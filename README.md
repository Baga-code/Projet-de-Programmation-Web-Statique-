# Projet Web Statique IFOAD – UJKZ

## 🎯 Contexte et objectif
Ce projet consiste à développer une **application web statique** pour l’IFOAD (Institut de Formation Ouverte et à Distance) de l’Université Joseph Ki-Zerbo (UJKZ), afin de diffuser efficacement :
- Les **offres de formation** et programmes
- Les **emplois du temps** des enseignants et étudiants
- Les **actualités**, **partenariats**, et **informations de contact**

L’ensemble du site est construit avec **Bootstrap 5**, un design responsive et des interactions JavaScript légères pour offrir une expérience moderne et fluide.

---

## 📂 Structure du projet
```
projet-ifo uad-ujkz/
├─ base/
│  ├─ header.html      # En-tête partagé (navbar inclusions)
│  └─ footer.html      # Pied de page partagé
├─ css/
│  └─ style.css        # Styles personnalisés
├─ js/
│  └─ script.js        # Logique JS (tabs, modals, slider, date dynamique)
├─ images/
│  ├─ partenaires/     # Logos des partenaires
│  ├─ carousel/        # Images du carrousel
│  ├─ universite/      # Logos des universités publiques
│  └─ ...              # Autres visuels (logos, illustrations)
|
├─ historique.html  # Histoire d’IFOAD et licence SIA (tabs)
├─ formation.html   # Informations sur Licence / Master / Débouchés
├─ programme.html   # Détails des parcours L1→Master
├─ documentation.html# Sections de PDF à télécharger
├─ admission.html   # Critères d’admission
├─ personnel.html   # Cartes des enseignants et ATOS
├─ index.html          # Page d’accueil (navbar, carrousel, slider partenaires, date)
├─ .gitignore          # Fichiers à exclure du dépôt Git
└─README.md           # Documentation du projet

```


---

## 🚀 Fonctionnalités principales

### 1. Barre de navigation _(header)_
- **Horizontale fixe** : logos IFOAD à gauche, UJKZ à droite
- **Menus déroulants** : Historique, Formation, Documentation, Établissements
- **Boutons modals** : Partenaires, Traitement, Actualités & Emploi du temps, Contact
- **Responsive** : menu hamburger pour mobile, sidebar pour desktop

### 2. Carrousel d’images
- Présentation de l’actualité ou d’annonces
- Automatique et contrôles manuels

### 3. Slider des partenaires
- **06 partenaires officiels** (AVU, FUN MOOC, UNESCO, HCR, AUF, Musée National)
- Script JavaScript `initPartenairesSlider()` pour injection et défilement automatique

### 4. Navigation par onglets _(tabs)_
- **Historique** : IFOAD / Licence SIA (activation via hash URL)
- **Formation** : Licence / Master / Débouchés
- **Programme** : Semestres détaillés pour chaque cycle

### 5. Modals dynamiques
- **Traitement** : calculs (factorielle, PGCD, racines, etc.) avec champs dynamiques
- **Actualités & Emploi du Temps** : tableaux L1→Master
- **Contact** : informations et formulaire

### 6. Date dynamique
- Affichage de la date locale (`toLocaleDateString('fr-FR')`)

---

## 🔧 Installation 
1. **Cloner** ou **dézipper** le dossier du projet
2.  ouvrir `index.html` localement
3. **Ouvrir** dans le navigateur : `index.html`

---

---

## 🤝 Contribuer
Les contributions sont les bienvenues ! Merci de :
1. **Créer une branche** pour votre feature
2. **Soumettre une pull request** décrivant vos changements
3. Respecter les conventions de code (indentation, commentaires)

---
 
## 👨‍🏫 Enseignant encadrant

Nom : Dr Gouayon KOALA

Email :  ....................

## 👤 Étudiant

Nom : Joseph BAGA

Email :josephbaga45@gmail.com

Téléphone :  +226 66555154