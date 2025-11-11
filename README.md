# 🚀 Portfolio - Marc Estassy BATABA

> Portfolio moderne et interactif d'un ingénieur logiciel Full-Stack & Cloud

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.24-FF0055?logo=framer)](https://www.framer.com/motion/)

## ✨ Fonctionnalités

- **🎨 Design moderne** : Interface épurée avec animations fluides
- **📱 Responsive** : Optimisé pour tous les écrans (mobile, tablette, desktop)
- **⚡ Performance** : Next.js 16 avec App Router et React 19
- **🌊 Navigation fluide** : Scroll smooth sans pollution d'URL
- **🎭 Animations** : Micro-interactions avec Framer Motion
- **♿ Accessibilité** : Focus states et navigation clavier
- **🌙 Thème sombre** : Design adapté aux développeurs

## 🏗️ Architecture

### Sections principales
- **Hero** : Présentation avec onglets interactifs (Objectif, Diplômes, Faits marquants)
- **Projets** : Showcase des réalisations techniques
- **Compétences** : 9 catégories organisées (Back-end, Front-end, DevOps, etc.)
- **Expériences** : Timeline interactive des missions professionnelles
- **Contact** : Formulaire et liens sociaux

### Structure technique
```
src/app/
├── components/          # Composants réutilisables
│   ├── SmoothLink.tsx   # Navigation sans hash
│   ├── NavigationContext.tsx
│   └── TabButton.tsx
├── header/              # Navigation principale
├── profile/             # Section hero avec onglets
├── projects/            # Portfolio des projets
├── skills/              # Compétences catégorisées
├── experiences/         # Timeline professionnelle
├── contact/             # Formulaire de contact
└── footer/              # Pied de page
```

## 🛠️ Stack Technique

### Frontend
- **Next.js 16.0.1** - Framework React avec App Router
- **React 19.2.0** - Bibliothèque UI avec hooks modernes
- **TypeScript 5** - Typage statique pour plus de robustesse
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Framer Motion 12.23.24** - Animations et transitions

### Développement
- **ESLint 9** - Linter pour la qualité du code
- **Lucide React** - Icônes modernes et cohérentes
- **PostCSS** - Transformation CSS avancée

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le repository
git clone https://github.com/Estassy/portfolio.git
cd portfolio

# Installer les dépendances
npm install
# ou yarn install
# ou pnpm install
# ou bun install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
# ou yarn dev
# ou pnpm dev
# ou bun dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
# Construire l'application
npm run build

# Lancer en mode production
npm run start
```

## 🎨 Personnalisation

### Couleurs et thème
Les couleurs sont définies dans `tailwind.config.js` avec une palette neutre moderne :
- **neutral-950** : Arrière-plan principal
- **neutral-800/900** : Cartes et composants
- **Gradients** : Accents visuels subtils

### Contenu
- **Profile** : Modifier `src/app/profile/profile.tsx`
- **Projets** : Éditer `src/app/projects/projectsData.ts`
- **Compétences** : Ajuster `src/app/skills/skills.tsx`
- **Expériences** : Mettre à jour `src/app/experiences/experiencesData.ts`

## 🔧 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification ESLint
```

## 📈 Performances

- **Lighthouse Score** : 90+ sur tous les critères
- **Core Web Vitals** : Optimisé pour LCP, FID, CLS
- **Bundle Size** : Optimisé avec tree-shaking
- **Images** : Next.js Image optimization
- **Fonts** : Preload et optimisation automatique

## 🚀 Déploiement

### Vercel (Recommandé)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Estassy/portfolio)

### Autres plateformes
- **Netlify** : `npm run build` + deploy `out/`
- **GitHub Pages** : Avec GitHub Actions
- **Docker** : Dockerfile inclus pour conteneurisation

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir `LICENSE` pour plus de détails.

## 📧 Contact

**Marc Estassy BATABA**
- Portfolio : [https://marc-estassy-bataba.vercel.app](https://marc-estassy-bataba.vercel.app)
- LinkedIn : [linkedin.com/in/marc-estassy-bataba](https://linkedin.com/in/marc-estassy-bataba)
- Email : marc.estassy.bataba@example.com

---

⭐ N'hésitez pas à star le projet si il vous a été utile !
