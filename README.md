# HiterKredit

Site multilingue de simulation et de demande de prêt personnel, déployé sur
Vercel. Domaine cible : https://www.hiterkredit.com

## Langues

- 🇸🇮 Slovène (`/sl`) — langue par défaut
- 🇸🇰 Slovaque (`/sk`)
- 🇱🇹 Lituanien (`/lt`)
- 🇵🇷 Espagnol / Porto Rico (`/es`)
- 🇳🇱 Néerlandais / Pays-Bas & Flandre (`/nl`)
- 🇮🇪 Anglais / Irlande (`/en`)

## Fonctionnalités

- Simulateur de prêt interactif (montant + durée) sur la page d'accueil et sur
  `/simulator`, avec calcul de mensualité en temps réel.
- Les valeurs simulées sont conservées dans `sessionStorage` (côté navigateur
  uniquement) et pré-remplissent automatiquement le formulaire de demande —
  **aucune donnée n'est stockée côté serveur**.
- Formulaire de demande de prêt (`/apply`) et formulaire de contact (page
  `/about`), tous deux envoyés par email via l'API Brevo.
- Header et footer professionnels, menu de navigation mobile en bas d'écran.
- SEO : métadonnées par langue, hreflang, sitemap, robots.txt, JSON-LD.

## Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner :

```
BREVO_API_KEY=...
MAIL_SENDER=gerardfreelancer123@gmail.com
MAIL_ADMIN=gerardfreelancer123@gmail.com
```

Sur Vercel, ajouter ces mêmes variables dans Project Settings -> Environment Variables.

## Développement local

```bash
npm install
npm run dev
```

## Déploiement

Le projet est prêt pour un déploiement direct sur Vercel (framework Next.js
détecté automatiquement). Penser à configurer le domaine personnalisé
www.hiterkredit.com dans les réglages du projet Vercel.
