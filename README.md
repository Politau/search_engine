# Next.js Activities Project

C'est un projet développé avec [Next.js](https://nextjs.org) et la création d'application via [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), avec l'utilisation de **Tailwind CSS** pour le style.

---

## Installation des dépendances

### 1. Dépendances Python

Pour installer les dépendances Python nécessaires, utilisez la commande suivante dans votre terminal :

```bash
pip install -r requirements.txt
```

### 2. Dépendances Frontend (Next.js)
Ensuite, installez les dépendances du projet frontend avec l'une des commandes suivantes :

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

---
## Exécuter le programme Python
Un script Python est inclus dans ce projet pour récupérer les données sur les différentes activités de Montpellier. Pour lancer le script, utilisez la commande suivante :

```bash
python scraping.py
```
Cela récupérera les données et les enregistrera dans un fichier JSON utilisé par l'application.

---
## Lancer l'application Next.js
Pour démarrer l'application Next.js en mode développement, utilisez la commande suivante :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Une fois le serveur démarré, ouvrez votre navigateur et accédez à http://localhost:3000 pour voir l'application en action.
