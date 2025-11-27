# NEXGEN SPORT - Maquette HTML/CSS/JS

## 📋 Description

Maquette complète du site de scouting de talents sportifs **NEXGEN SPORT**, comprenant :
- **Homepage** avec 6 sections optimisées
- **Dashboard Talent** avec interface complète de gestion

## 🎨 Identité Visuelle

### Couleurs de la marque
- **Primaire** : `#4bc3b9` (Turquoise)
- **Secondaire** : `#f87028` (Orange)
- **Secondaire Alt** : `#ff3131` (Rouge)
- **Tertiaire** : `#8fc92f` (Vert)
- **Texte** : `rgb(20, 20, 20)` (Noir)

### Style
- Design minimaliste et moderne
- Interface premium et élégante
- Animations fluides et transitions douces
- Fully responsive (mobile, tablette, desktop)

## 📁 Structure des Fichiers

```
NEXTGEN/
├── index.html          # Homepage avec hero, recherche, talents, médias
├── dashboard.html      # Dashboard talent avec sidebar et widgets
├── styles.css          # CSS global avec toutes les couleurs et styles
├── script.js           # JavaScript pour interactions et animations
├── README.md           # Ce fichier
└── *.md                # Fichiers de contenu du projet
```

## 🏠 Homepage - Sections

### 1. **Hero Section**
- Titre accrocheur
- Barre de recherche avec filtres (Sport, Poste, Localisation)
- Design minimaliste et moderne

### 2. **Talents en Vedette**
- Grille de cartes talents avec photos
- Statistiques clés (matchs, buts, passes)
- Badges (Top, Rising)
- Bouton "Voir le Profil"

### 3. **Comment ça Marche**
- 3 étapes claires avec icônes
- Design en grille responsive
- Icônes avec dégradés

### 4. **Notre Mission**
- Section À propos avec image
- Points clés de la mission
- Design split (texte + image)

### 5. **Derniers Contenus**
- Cartes médias (Vidéos, Podcasts, Articles)
- Thumbnails avec types de contenu
- Dates de publication

### 6. **Footer**
- Informations de contact
- Liens vers réseaux sociaux
- Navigation complète
- Mentions légales

## 🎯 Dashboard Talent - Modules

### Navigation
- **Sidebar fixe** avec menu de navigation
- Sections : Vue d'ensemble, Profil, Compétences, Parcours, Portfolio, Opportunités, Paramètres
- Bouton retour au site

### Widgets et Cartes

1. **Header Dashboard**
   - Photo de profil
   - Nom et poste
   - Notifications avec badge

2. **Stats Overview** (4 cartes)
   - Vues du profil
   - Abonnés
   - Opportunités
   - Profil complété

3. **Profil Talent**
   - Photo avec statut (en ligne)
   - Informations détaillées (âge, niveau, pied préféré)
   - Biographie

4. **Compétences**
   - Barres de progression avec pourcentages
   - 6 compétences affichées (Finition, Vitesse, Dribble, etc.)
   - Design moderne avec gradients

5. **Statistiques de Performance**
   - Grille de stats (Matchs, Buts, Passes D., Minutes)
   - Sélecteur de période
   - Zone pour graphique (à implémenter avec Chart.js)

6. **Activité Récente**
   - Timeline d'activités
   - Icônes colorées par type d'activité
   - Timestamps

7. **Parcours & Expériences**
   - Timeline verticale
   - Clubs et équipes
   - Tags pour niveau et compétitions

8. **Portfolio Vidéo**
   - Grille de miniatures vidéos
   - Overlay play au hover
   - Bouton "Ajouter une vidéo"

9. **Opportunités**
   - Liste d'opportunités (Essais, Contacts Agents, Tournois)
   - Boutons Accepter/Refuser
   - Badge "nouvelles opportunités"

## 🚀 Comment Utiliser

### Ouvrir la maquette

1. **Homepage** : Ouvrez `index.html` dans votre navigateur
2. **Dashboard** : Ouvrez `dashboard.html` dans votre navigateur

### Navigation

- Cliquez sur "Mon Compte" dans le header pour aller au dashboard (lien vers `dashboard.html`)
- Cliquez sur "Retour au site" dans le dashboard pour revenir à l'accueil

### Interactions JavaScript

Les interactions suivantes sont déjà implémentées :
- ✅ Menus déroulants dans la navigation
- ✅ Recherche avec filtres (simulation)
- ✅ Boutons "Voir le Profil" sur les cartes talents
- ✅ Animations de skill bars au scroll
- ✅ Accepter/Refuser les opportunités
- ✅ Navigation active dans la sidebar
- ✅ Compteurs animés sur les stats
- ✅ Effets hover sur les cartes
- ✅ Menu mobile responsive

## 📱 Responsive Design

La maquette est entièrement responsive :
- **Desktop** (>1024px) : Layout complet avec sidebar
- **Tablette** (768px - 1024px) : Layout adapté
- **Mobile** (<768px) : Layout vertical, menu hamburger

## 🔧 Prochaines Étapes - Développement React

### Composants à créer

**Homepage :**
- `Hero` + `SearchBar`
- `TalentCard` (réutilisable)
- `StepCard` (Comment ça marche)
- `MediaCard`
- `Footer`

**Dashboard :**
- `Sidebar`
- `DashboardHeader`
- `StatCard`
- `ProfileCard`
- `SkillsCard`
- `TimelineCard`
- `PortfolioCard`
- `OpportunityCard`

### State Management
- État utilisateur (profil, stats)
- État des opportunités
- État du portfolio
- Filtres de recherche

### API / Backend
- Endpoints pour talents
- Endpoints pour opportunités
- Upload de vidéos
- Authentification

## 📝 Notes Importantes

### Ce qui est inclus
- ✅ Structure HTML sémantique
- ✅ CSS moderne avec variables CSS
- ✅ Animations et transitions
- ✅ JavaScript vanilla pour interactions
- ✅ Design responsive complet
- ✅ Couleurs de marque respectées
- ✅ Layout minimaliste et premium

### Ce qui reste à faire (React)
- ⏳ Composants React
- ⏳ Routing (React Router)
- ⏳ State Management (Context API ou Redux)
- ⏳ Intégration API
- ⏳ Authentification
- ⏳ Upload de fichiers
- ⏳ Graphiques (Chart.js ou Recharts)
- ⏳ Optimisation des performances
- ⏳ Tests

## 🎨 Icônes et Images

- **Icônes** : Font Awesome 6.4.0 (CDN)
- **Images** : Unsplash (placeholder - à remplacer par vos vraies images)

## 💡 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `styles.css` :
```css
:root {
    --primary-color: #4bc3b9;
    --secondary-color: #f87028;
    --secondary-alt: #ff3131;
    --tertiary-color: #8fc92f;
}
```

### Ajouter des talents
Dupliquez une `.talent-card` dans `index.html` et modifiez le contenu.

### Ajouter des opportunités
Dupliquez un `.opportunity-item` dans `dashboard.html`.

## 📞 Support

Pour toute question sur cette maquette, référez-vous aux fichiers MD du projet :
- `nexgen_sport_content.md` - Contenu et objectifs
- `Dashboard talent.md` - Spécifications du dashboard
- `Menu.md` - Structure du menu
- `nextgen_homepage_important element.md` - Éléments clés de la homepage

---

**Créé par Claude Code pour NEXGEN SPORT**
Prêt pour développement React 🚀
