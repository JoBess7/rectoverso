# Clinique Recto Verso

Site vitrine en français, maintenant structuré avec Next.js App Router et TypeScript. La page d’accueil est une première itération visuelle basée sur les photos et l’identité de marque fournies.

## Démarrer localement

Prérequis : Node.js 20.9 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrir ensuite <http://localhost:3000>. Pour préparer une version de production, utiliser `npm run build`, puis `npm run start`.

## Organisation

- `app/layout.tsx` : langue, métadonnées et styles globaux
- `app/page.tsx` : page d’accueil
- `app/components/` : header interactif et pied de page
- `public/assets/` : photos, logo, illustrations et polices servies par Next.js
- `assets/references/color-guide.pdf` : guide de couleurs fourni
- `archive/static-prototype/` : première version HTML/CSS conservée comme référence

## Identité visuelle

Les couleurs de départ proviennent des fichiers fournis : sarcelle `#00454F`, menthe `#24EDA0`, menthe pâle `#CAFCE0`, lavande `#C9C2FF` et camomille `#FFBA3B`. Les polices Inter Display et les ressources d’origine sont dans `public/assets/`. Les fichiers ZIP d’origine restent dans leur emplacement initial.

## Portée actuelle

La page d’accueil reprend les éléments visibles du site actuel. Les liens Services, Équipe et Contact descendent vers les sections de cette page; ces pages seront créées pendant les prochaines étapes de migration. Le lien de rendez-vous GoRendezVous est provisoire. Les coordonnées et textes doivent être confirmés avant publication.

Le formulaire actuel et les politiques complètes de renseignements personnels ne sont pas encore reproduits. Ne pas recueillir de renseignements de santé ou de renseignements sur les patients avec ce site.

## Étapes suivantes

1. Installer les dépendances avec `npm install` et lancer le serveur local.
2. Ajuster ensemble le cadrage photo et la page d’accueil.
3. Migrer le contenu des pages Services, Équipe et Contact.
4. Comparer les options de CMS et d’hébergement du brief avant toute décision de production.
