# 🔄 Auto-Sync - Synchronisation Automatique GitHub

Scripts de surveillance automatique pour synchroniser vos fichiers locaux avec le repository GitHub **NEXGEN SPORT**.

## 📋 Scripts Disponibles

### 1. **auto-sync.bat** (Windows - Batch)
Script batch classique pour Windows.

**Utilisation :**
```bash
# Double-cliquez sur le fichier ou lancez dans le terminal :
auto-sync.bat
```

### 2. **auto-sync.ps1** (Windows - PowerShell) ⭐ RECOMMANDÉ
Script PowerShell moderne avec couleurs et notifications.

**Utilisation :**
```powershell
# Clic droit → "Exécuter avec PowerShell" ou dans PowerShell :
.\auto-sync.ps1
```

**Note :** Si vous rencontrez une erreur de stratégie d'exécution :
```powershell
# Autoriser l'exécution de scripts (une seule fois)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 3. **auto-sync.sh** (Git Bash / Linux / Mac)
Script bash pour Git Bash sur Windows ou systèmes Unix.

**Utilisation :**
```bash
# Dans Git Bash :
bash auto-sync.sh

# Ou rendez-le exécutable :
chmod +x auto-sync.sh
./auto-sync.sh
```

## ⚙️ Fonctionnalités

### ✅ Ce que fait le script :

1. **Surveillance Continue**
   - Vérifie toutes les 10 secondes s'il y a des mises à jour sur GitHub
   - Fonctionne en boucle tant que le terminal est ouvert

2. **Détection Intelligente**
   - Compare le commit local avec le commit distant
   - Affiche les nouveaux commits détectés

3. **Synchronisation Automatique**
   - Télécharge automatiquement les mises à jour
   - Met à jour vos fichiers locaux

4. **Protection des Modifications Locales**
   - Sauvegarde automatiquement vos modifications en cours (`git stash`)
   - Les restaure après la mise à jour
   - Aucune perte de données !

5. **Logs Clairs**
   - Affiche les fichiers modifiés
   - Timestamps pour chaque vérification
   - Codes couleur pour faciliter la lecture

6. **Notifications**
   - Affichage visuel des mises à jour
   - Sons de notification (PowerShell/Bash)

## 🚀 Démarrage Rapide

### Windows (Recommandé)
```powershell
# 1. Ouvrir PowerShell dans le dossier NEXTGEN
cd C:\Users\THE GXVX\Desktop\NEXTGEN

# 2. Lancer le script
.\auto-sync.ps1
```

### Git Bash
```bash
# 1. Ouvrir Git Bash dans le dossier
cd /c/Users/THE\ GXVX/Desktop/NEXTGEN

# 2. Lancer le script
bash auto-sync.sh
```

## 📊 Exemple de Sortie

```
============================================
   NEXGEN SPORT - AUTO SYNC
   Surveillance des mises à jour GitHub
============================================

[INFO] Démarrage de la surveillance...
[INFO] Vérification toutes les 10 secondes
[INFO] Appuyez sur Ctrl+C pour arrêter

[2025-01-15 14:30:00] Vérification #1...
        [✓ OK] Aucune mise à jour
        Prochaine vérification dans 10 secondes...

[2025-01-15 14:30:10] Vérification #2...

============================================
   🔔 MISE À JOUR DÉTECTÉE !
============================================

[INFO] Nouveaux commits :
c144a90 Update styles.css
a5b3c12 Fix responsive design

[INFO] Téléchargement des mises à jour...

[✓ SUCCÈS] Fichiers locaux mis à jour !

[INFO] Fichiers modifiés :
M       styles.css
M       index.html

============================================
```

## 🛠️ Configuration

Vous pouvez modifier l'intervalle de vérification dans chaque script :

### PowerShell (auto-sync.ps1)
```powershell
$interval = 10  # Changer 10 par la valeur en secondes souhaitée
```

### Batch (auto-sync.bat)
```batch
timeout /t 10   # Changer 10 par la valeur en secondes souhaitée
```

### Bash (auto-sync.sh)
```bash
INTERVAL=10     # Changer 10 par la valeur en secondes souhaitée
```

## ⚠️ Important

### Avant de Lancer le Script

1. **Assurez-vous d'être connecté à Internet**
2. **Le repo doit être initialisé** (déjà fait)
3. **Git doit être installé** sur votre système

### Pendant l'Exécution

- ✅ Vous pouvez continuer à travailler sur vos fichiers
- ✅ Vos modifications seront sauvegardées automatiquement
- ✅ Le script vous notifiera des mises à jour
- ⚠️ Ne fermez pas le terminal si vous voulez que la surveillance continue

### Arrêter le Script

- Appuyez sur **Ctrl+C** dans le terminal
- Ou fermez simplement la fenêtre du terminal

## 🔍 Résolution de Problèmes

### "Impossible de contacter le repo distant"
- Vérifiez votre connexion Internet
- Vérifiez que GitHub est accessible

### "Échec de la mise à jour"
- Conflit possible entre modifications locales et distantes
- Le script sauvegarde vos modifications avec `git stash`
- Résolvez manuellement avec `git stash pop` si nécessaire

### Erreur PowerShell "Scripts désactivés"
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 💡 Cas d'Usage

### En tant que Développeur Solo
Lancez le script pour rester synchronisé si vous travaillez sur plusieurs machines.

### En Équipe
Idéal pour détecter instantanément les changements de vos collaborateurs.

### Pour les Présentations
Gardez le script actif pendant que vous montrez votre maquette à un client - vous serez toujours à jour !

## 📝 Notes

- Le script utilise `git fetch` pour vérifier les mises à jour (rapide, pas de téléchargement)
- Le téléchargement ne se fait que si des changements sont détectés
- Vos modifications locales sont **toujours protégées**

## 🎯 Prochaines Étapes

Une fois le script lancé, vous pouvez :
1. Continuer à travailler sur vos fichiers localement
2. Laisser le terminal ouvert en arrière-plan
3. Être notifié automatiquement des mises à jour
4. Profiter de fichiers toujours synchronisés !

---

**Créé pour NEXGEN SPORT** 🚀
Surveillance automatique - Synchronisation en temps réel
