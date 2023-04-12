<p align="center">
<img src="https://img.shields.io/badge/VERCEL-Deployed-brightgreen?style=for-the-badge&logo=vercel">
<img src="https://img.shields.io/badge/Create%20with-React-blue?style=for-the-badge&logo=react">
</p>


# Application Front-end Movie React

Le projet est réalisé dans le cadre d'une formation front-end spécialisé dans l'utilisation de React.

lien formation : https://fromscratch.podia.com/

Application cinéma qui permet de rechercher des films en tapant un titre dans la barre de recherche. Il est possible de sauvegarder des films en favoris sur la page coup de coeur.

## Version
version 1 

### Project Deployment link: 
[link](https://tp-3-react-cine-app.vercel.app/)
## Demo

![react-cine-anime](https://user-images.githubusercontent.com/86351071/231419628-5d149844-6119-4e18-b5cd-ce6f90b5fe40.gif)

## Features

- recherche dynamique par titre
- tri par notes (croissant et décroissant)
- système de sauvegarde des favoris
- design responsive

## Tech Stack

**Client:** React, Axios, react-router-dom, Sass

**Server:** none

## Required

[![Node.js](https://custom-icon-badges.demolab.com/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![NPM](https://img.shields.io/badge/-NPM-CC3534?logo=npm&logoColor=white&style=for-the-badge)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
## Installation

Cloner le projet

```bash
  git clone https://github.com/danielgonzalez0/TP3-react-cine-app.git
```

Aller dans le répertoire du projet

```bash
  cd my-project
```

Installer les dépendences

```bash
  npm install
```

Lancer le serveur

```bash
  npm run start
```
## Environment Variables

Pour exécuter ce projet, vous devrez ajouter les variables d'environnement suivantes à votre fichier .env

`REACT_APP_KEY`

## API Reference

![TMDB](https://user-images.githubusercontent.com/86351071/231418851-e086bbf2-7b58-41dd-8b32-60a4be8587f3.png)

#### Search movies

https://developers.themoviedb.org/3/search/search-movies

```
 GET /search/movie
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `REACT_APP_KEY` | `string` | **Required**. Your API key |

#### exemple appel API

```
  https://api.themoviedb.org/3/search/movie?api_key=<<YOUR_API_KEY>>&language=fr-FR&query=<<KEYWORDS>>&page=1&include_adult=false
```

## Screenshots

### `Homepage`

![homepage](https://user-images.githubusercontent.com/86351071/231273246-44514de1-ddd5-4a93-ac61-4cdb16a0c809.png)

### `Favorites`

![favorites](https://user-images.githubusercontent.com/86351071/231274638-c6713175-393e-4aaf-bd7f-654a9406a5ec.png)

## 🚀 About Me

En reconversion professionnelle pour devenir développeur Front-end , je suis actuellement la formation Développeur d'application - JavaScript React chez OpenClassrooms. 

L’objectif de cette formation est d’acquérir une spécialisation en front-end et de consolider les acquis que j’ai pu obtenir lors de ma précédente formation en développement web.

Le but à terme est de trouver un premier poste en développeur web junior pour parfaire mes compétences et acquérir plus d'expérience. 

Professionnel doté de nombreuses années d'expérience en contrôle de gestion et comptabilité, combinées à une solide formation supérieure, je suis capable de fonctionner de manière autonome, et je fais preuve d'un solide sens de l'organisation et de capacités d’analyse et de synthèse avérées. 

De nature empathique et rigoureuse, je suis à l’écoute des autres et je peux facilement travailler en équipe.
