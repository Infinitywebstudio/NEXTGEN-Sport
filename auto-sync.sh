#!/bin/bash

# NEXGEN SPORT - Auto Sync Script
# Surveillance automatique des mises à jour GitHub

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
INTERVAL=10  # Intervalle en secondes
REPO="origin"
BRANCH="main"

# Banner
clear
echo ""
echo -e "${CYAN}============================================${NC}"
echo -e "${CYAN}   NEXGEN SPORT - AUTO SYNC${NC}"
echo -e "${CYAN}   Surveillance des mises à jour GitHub${NC}"
echo -e "${CYAN}============================================${NC}"
echo ""

# Se placer dans le dossier du script
cd "$(dirname "$0")" || exit

# Vérifier si c'est un repo Git
if [ ! -d ".git" ]; then
    echo -e "${RED}[ERREUR] Ce dossier n'est pas un repo Git !${NC}"
    echo "Veuillez d'abord initialiser le repo avec 'git init'"
    exit 1
fi

echo -e "${BLUE}[INFO] Démarrage de la surveillance...${NC}"
echo -e "${BLUE}[INFO] Vérification toutes les $INTERVAL secondes${NC}"
echo -e "${YELLOW}[INFO] Appuyez sur Ctrl+C pour arrêter${NC}"
echo ""

# Fonction pour obtenir le timestamp
get_timestamp() {
    date "+%Y-%m-%d %H:%M:%S"
}

# Fonction pour notification sonore (optionnel)
beep() {
    # Fonctionne sur certains systèmes Linux/Mac
    command -v tput >/dev/null 2>&1 && tput bel
}

# Compteur de vérifications
CHECK_COUNT=0

# Boucle de surveillance
while true; do
    ((CHECK_COUNT++))
    TIMESTAMP=$(get_timestamp)

    echo -e "${BLUE}[$TIMESTAMP] Vérification #$CHECK_COUNT...${NC}"

    # Fetch les dernières modifications
    if git fetch $REPO $BRANCH --quiet 2>/dev/null; then

        # Obtenir les hash des commits
        LOCAL_HASH=$(git rev-parse HEAD 2>/dev/null)
        REMOTE_HASH=$(git rev-parse $REPO/$BRANCH 2>/dev/null)

        if [ "$LOCAL_HASH" != "$REMOTE_HASH" ]; then
            echo ""
            echo -e "${GREEN}============================================${NC}"
            echo -e "${GREEN}   🔔 MISE À JOUR DÉTECTÉE !${NC}"
            echo -e "${GREEN}============================================${NC}"
            echo ""

            # Notification sonore
            beep

            # Afficher les nouveaux commits
            echo -e "${BLUE}[INFO] Nouveaux commits :${NC}"
            git log HEAD..$REPO/$BRANCH --oneline --decorate --color=always
            echo ""

            # Vérifier s'il y a des modifications locales
            if ! git diff --quiet 2>/dev/null; then
                echo -e "${YELLOW}[INFO] Sauvegarde des modifications locales...${NC}"
                git stash push -m "Auto-stash $(date '+%Y-%m-%d %H:%M:%S')" >/dev/null 2>&1
                STASHED=1
            else
                STASHED=0
            fi

            # Mettre à jour
            echo -e "${BLUE}[INFO] Téléchargement des mises à jour...${NC}"
            if git pull $REPO $BRANCH --no-edit 2>/dev/null; then
                echo ""
                echo -e "${GREEN}[✓ SUCCÈS] Fichiers locaux mis à jour !${NC}"
                echo ""

                # Afficher les fichiers modifiés
                echo -e "${BLUE}[INFO] Fichiers modifiés :${NC}"
                git diff --name-status HEAD@{1} HEAD 2>/dev/null
                echo ""

                # Restaurer les modifications locales
                if [ $STASHED -eq 1 ]; then
                    echo -e "${BLUE}[INFO] Restauration des modifications locales...${NC}"
                    git stash pop >/dev/null 2>&1
                fi

                # Notification sonore de succès
                beep
                sleep 0.1
                beep

            else
                echo -e "${RED}[✗ ERREUR] Échec de la mise à jour${NC}"

                # Restaurer les modifications si nécessaire
                if [ $STASHED -eq 1 ]; then
                    echo -e "${BLUE}[INFO] Restauration des modifications locales...${NC}"
                    git stash pop >/dev/null 2>&1
                fi
            fi

            echo -e "${GREEN}============================================${NC}"
            echo ""

        else
            echo -e "        ${GREEN}[✓ OK] Aucune mise à jour${NC}"
        fi

    else
        echo -e "${RED}[ERREUR] Impossible de contacter le repo distant${NC}"
        echo -e "${YELLOW}        Vérifiez votre connexion Internet${NC}"
    fi

    # Attendre avant la prochaine vérification
    echo -e "${BLUE}        Prochaine vérification dans $INTERVAL secondes...${NC}"
    echo ""
    sleep $INTERVAL
done
