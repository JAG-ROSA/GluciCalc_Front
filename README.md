<!-- PROJECT LOGO -->
# GluciCalc - Client Application

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#technical-stack">Technical Stack</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#project-installation">Project Installation</a></li>
      </ul>
    </li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#user-journey">User journey</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
# About The Project

**GluciCalc** is an application **for diabetics that calculates the amount of carbohydrates** in a meal based on commercial products or customised recipes.

In addition, diabetics will have access to :
- more than 600 000 product sheets of the main commercial products,
- a complete follow-up set of tools: 
    - personnal dashboard,
    - follow-up calendar (by days, weeks, months),
    - carbonhydrate consumption data representation (by days, weeks, months),

Major societal problem deserves simple, modern and quick solution to simplify their daily life.
 


**Find the app in production on Vercel [GluciCalc!](https://gluci-calc.vercel.app/)**

Welcome to the GluciCalc app!

<!-- Technical Stack -->
# Technical Stack
- The GluciCalc website is designed in an Single Page Application way with ReactJS and it is served by a Ruby on Rails API to store the application data.

- The user authentification are done with Devise & Devise-JWT Gem which use JWT-Token protocol to ensure application security.

- All the global states are managed with Redux and JS-Cookie.

- Carbonhydrate calculations are made with the products information sheets provided by the collaborative API [Open Food Facts](https://fr.openfoodfacts.org/) & [Ciqual](https://ciqual.anses.fr/).

## Client Stack:
* [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
* [React JS (version 17.0)](https://fr.reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-Router](https://reactrouter.com/)
* [Axios](https://github.com/axios/axios)
* [JS-Cookie](https://github.com/js-cookie/js-cookie)

## API-Server Stack: 
* [Ruby-on-Rails](https://rubyonrails.org/)
* [Open Food Facts](https://fr.openfoodfacts.org/)
* [Ciqual](https://ciqual.anses.fr/)

## UI-Kit
The application design was built with our own UI-Kit to better represent our brand image.

You can find a preview on the following page: 
* [GluciCalc UI KIT]() 

## Design Frameworks:
The following design framework were used in addition to our UI-Kit for specific use-cases.

* [React-Bootstrap](https://react-bootstrap.github.io/)
* [React-Icons](https://react-icons.github.io/react-icons/)
* [AntDesign](https://ant.design/) 

<!-- GETTING STARTED -->
# Getting Started
To get a local copy and run this project locally, please follow these steps.

## Prerequisites

Be sure to have NPM installed on your machine.
1. Check your Node and NPM version
  ```sh
  node -v
  npm -v
  ```
2. In case of older version, please run the following command line to update your npm version
  ```sh
  npm install npm@latest -g
  ```
3. Start the back-end API server
  ```sh
   rails server
  ```
  You can find more information on the following page: [GluciCalc - API Application](https://github.com/carolemny/GluciCalc_Back.git).

## Project Installation

1. Clone the repo
  ```sh
   git clone https://github.com/JAG-ROSA/GluciCalc_Front.git
  ```
2. Install NPM packages
  ```sh
   npm install
  ```
3. Start the server
  ```sh
   npm run start
  ```

<!-- Demo -->
# Demo
You can try the application with our user test: 
```javascript
  email: "glucicalcadmin@yopmail.com",
  password: "azerty",
```

<!-- CONTACT -->
# Contributors
* [Carole](https://github.com/carolemny)
* [Arnaud](https://github.com/JAG-ROSA/)
* [Morgane](https://github.com/m-tessier)
* [Martin](https://github.com/Martinfzz)

## License
[MIT](https://choosealicense.com/licenses/mit/)