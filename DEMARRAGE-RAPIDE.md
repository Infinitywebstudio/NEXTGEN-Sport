# ⚡ Démarrage Rapide - Auto-Sync

## 🚀 Lancer la Synchronisation Automatique

### Méthode 1 : Double-Clic (PLUS SIMPLE) ⭐

1. **Double-cliquez** sur le fichier `START-AUTO-SYNC.bat`
2. C'est tout ! La synchronisation démarre automatiquement

### Méthode 2 : PowerShell (Recommandé)

1. **Clic droit** sur `auto-sync.ps1`
2. Sélectionnez **"Exécuter avec PowerShell"**

### Méthode 3 : Terminal PowerShell

```powershell
cd C:\Users\THE GXVX\Desktop\NEXTGEN
.\auto-sync.ps1
```

### Méthode 4 : Git Bash

```bash
cd /c/Users/THE\ GXVX/Desktop/NEXTGEN
bash auto-sync.sh
```

---

## 📊 Ce qui se passe

Une fois lancé, le script va :

1. ✅ Vérifier toutes les **10 secondes** s'il y a des mises à jour sur GitHub
2. 🔔 Vous **notifier** quand une mise à jour est détectée
3. ⬇️ **Télécharger** automatiquement les changements
4. 💾 **Protéger** vos modifications locales (git stash)
5. 📝 Afficher les **fichiers modifiés**

---

## ⏸️ Arrêter la Synchronisation

- Appuyez sur **Ctrl + C** dans le terminal
- Ou fermez simplement la fenêtre

---

## 🎯 Exemple Visuel

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
        [✓ OK] Aucune mise à jour
        Prochaine vérification dans 10 secondes...

```

### Quand une mise à jour est détectée :

```
============================================
   🔔 MISE À JOUR DÉTECTÉE !
============================================

[INFO] Nouveaux commits :
a5b3c12 Update dashboard.html
c144a90 Fix responsive design

[INFO] Téléchargement des mises à jour...

[✓ SUCCÈS] Fichiers locaux mis à jour !

[INFO] Fichiers modifiés :
M       dashboard.html
M       styles.css
```

---

## ⚙️ Paramètres Modifiables

### Changer l'intervalle de vérification

**Dans `auto-sync.ps1` (ligne 13) :**
```powershell
$interval = 10  # Changer par 5, 15, 30, etc.
```

**Dans `auto-sync.bat` :**
```batch
timeout /t 10   # Changer par 5, 15, 30, etc.
```

**Dans `auto-sync.sh` :**
```bash
INTERVAL=10     # Changer par 5, 15, 30, etc.
```

---

## 💡 Conseils

### Pour le Développement
- Lancez le script et **laissez-le tourner en arrière-plan**
- Vous serez notifié des changements de vos collaborateurs
- Continuez à travailler normalement sur vos fichiers

### Pour les Présentations
- Lancez le script **avant** de montrer votre maquette
- Vous serez toujours à jour avec les dernières modifications
- Impressionnez votre client avec la synchronisation en temps réel !

### Travail Multi-Machine
- Lancez le script sur **chaque machine**
- Modifications sur machine A → Auto-détectées sur machine B
- Pas besoin de faire `git pull` manuellement

---

## 🛠️ En cas de Problème

### "Impossible de contacter le repo"
→ Vérifiez votre connexion Internet

### "Scripts désactivés" (PowerShell)
→ Lancez une seule fois :
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Conflit de fusion
→ Le script sauvegarde automatiquement vos modifications
→ Résolvez manuellement si nécessaire avec `git stash pop`

---

## 📚 Documentation Complète

Pour plus de détails, consultez **AUTO-SYNC-README.md**

---

**NEXGEN SPORT** 🚀
Synchronisation automatique - Toujours à jour !
