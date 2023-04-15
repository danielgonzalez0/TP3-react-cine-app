<p align="center">
<img src="https://img.shields.io/badge/VERCEL-Deployed-brightgreen?style=for-the-badge&logo=vercel">
<img src="https://img.shields.io/badge/Create%20with-React-blue?style=for-the-badge&logo=react">
</p>

# Application Front-end Movie React

The project is part of a front-end training course specialising in  React.

training link : https://fromscratch.podia.com/

the application allows you to search for films by typing a title in the search bar. It is possible to save films as favourites on the fav"coup de coeur" page.

## Version

version 1 

### Project Deployment link: 
[link](https://tp-3-react-cine-app.vercel.app/)
## Features

- dynamic search by title
- sorting by notes (ascending and descending)
- bookmark saving system
- responsive design

## Tech Stack

**Client:** React, Axios, react-router-dom, Sass

**Server:** none


## Required

[![Node.js](https://custom-icon-badges.demolab.com/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![NPM](https://img.shields.io/badge/-NPM-CC3534?logo=npm&logoColor=white&style=for-the-badge)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
## Installation

clone project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

launch server

```bash
  npm run start
```
## Environment Variables

To run this project, you will need to create an .env file at the root of the project and add the following environment variables to your .env file

`REACT_APP_KEY`

## API Reference

![TMDB](https://user-images.githubusercontent.com/86351071/231418851-e086bbf2-7b58-41dd-8b32-60a4be8587f3.png)

#### Search movies

https://developers.themoviedb.org/3/search/search-movies

```http
  GET /search/movie
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `REACT_APP_KEY` | `string` | **Required**. Your API key |

#### exemple appel API

```http
  https://api.themoviedb.org/3/search/movie?api_key=<<YOUR_API_KEY>>&language=fr-FR&query=<<KEYWORDS>>&page=1&include_adult=false
```
## Demo
![react-cine-anime](https://user-images.githubusercontent.com/86351071/231419628-5d149844-6119-4e18-b5cd-ce6f90b5fe40.gif)

## Screenshots

### `Homepage`

![homepage](https://user-images.githubusercontent.com/86351071/231273246-44514de1-ddd5-4a93-ac61-4cdb16a0c809.png)

### `Favorites`

![favorites](https://user-images.githubusercontent.com/86351071/231274638-c6713175-393e-4aaf-bd7f-654a9406a5ec.png)

## 🚀 About Me

I am currently retraining to become a front-end developer and am taking the Application Developer - JavaScript React course at OpenClassrooms.

The objective of this training is to acquire a specialization in front-end and to consolidate the knowledge that I obtained during my previous training in web development.

The ultimate goal is to find a first position as a junior web developer to perfect my skills and gain more experience.

I am a professional with many years of experience in controlling and accounting, combined with a solid higher education background. I am able to function independently, and I have a strong sense of organisation and proven analytical and synthesis skills.

I am empathetic and rigorous by nature, I listen to others and I can easily work in a team.


