<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tjmcd2010/Watch-My-Pet">
    <img src="./public/Images/wmp.png" alt="dog Watch my Petlogo" width="80" height="80">
  </a>

<h1 align="center">Watch My Pet</h1>

  <p align="center">
    Your Pet Sitter App!
    <br />
    <a href="https://github.com/tjmcd2010/Watch-My-Pet"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/tjmcd2010/Watch-My-Pet">View Demo</a>
    ·
    <a href="https://github.com/tjmcd2010/Watch-My-Pet/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/tjmcd2010/Watch-My-Pet/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-description">Project Description</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

![Main Page](./public/Images/Main.png)
![Login Page](./public/Images/Login.png)
![Create New Request](./public/Images/Create.png)
![Display List of Requests](./public/Images/Requests.png)

## Deployed Application Link

[Watch My Pet](https://watch-my-pet.onrender.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Description

This is an interactive full-stack web application with a responsive design that will work on all screens. The app, "Watch My Pet", offers a pet sitting service that has been deployed to render.com. The use case for this application is a small tight-nit community where neighbors help each other by offering to watch or walk their pets while they’re away. An owner needs to log in or create an account in order to create a request. Available sitters would simply navigate the url and view pet sitting requests and respond accordingly if they’re available on the requested dates.

### Challenges We Faced

1. We utilized Materialize UI for this project, which is a library we have not yet been introduced to, which caused some styling challenges. 
2. We had some other minor challenges when it came to database structure and ensuring that tables were correctly mapped, due to naming conventions. 
3. As we worked through the project, we found several other ideas that would be great for future iterations, but time constraints didn't allow us to continue further development. 

### Built With

* [![Node.js][Nodejs.org]][Node-url]
* [![Express.js][Expressjs.com]][Express-url]
* [![handlebars.js][handlebarsjs.com]][handlebars-url]
* [![PostgreSQL][PostgreSQL.org]][PostgreSQL-url]
* [![Sequelize][Sequelizejs.com]][Sequelize-url]
* [![Render][Render.com]][Render-url]
* [![Materialize][Materializecss.com]][Materialize-url]

* Utilized Node.js and Express.js to create a RESTful API.
* Utilized Handlebars.js as the template engine.
* Utilized PostgreSQL and the Sequelize ORM for the database.
* Created GET, DELETE and POST routes for retrieving, deleting and adding new data.
* Applied Materialize which is a new library that we haven’t previously utilized or discussed for the UI design.
* Created a folder structure that meets the MVC paradigm.
* Added authentication (express-session and cookies), specifically disallowing non-logged in owners to create requests.
* Protected API keys and sensitive information with environment variables.
* Successfully deployed application using Render (with data).
* Applied a responsive design for all devices.
* Built an interactive application (i.e., accept and respond to user input).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

This website was built and tested using Chromium based browsers <a href="https://www.opera.com/gx">Opera GX</a> and <a href="(https://www.google.com/chrome/">Google Chrome</a> on a <a href="https://www.microsoft.com/en-us/software-download/windows10%20">Windows 10</a> machine, but should be viewable on any HTML supported browser.

### Installation

No installation necessary. Simply navigate to [Watch My Pet](https://watch-my-pet.onrender.com) and continue your journey as a sitter or an owner. 

<!-- USAGE EXAMPLES -->

## Usage

When visiting the application  at <a href="https://watch-my-pet.onrender.com">Watch My Pet</a> the user is presented with a page that gives the user the options to either view current pet sitting requests, log in or create a new request. If opting to create a new request, the user will be prompted to either sign in to an existing account or create a new one. 

```
* AS a pet owner
  * WHEN I create a user account
  * THEN I can create a a pet sitting request. 
* AS a pet owner, I want to be able to locate somebody that can watch my pet while I’m away
  * WHEN I’m planning a trip
  * THEN I can enter my pet details and service dates
* AS a pet sitter, I want to be able to offer my services as a pet sitter
  * WHEN I’m available to pet sit
  * THEN I can view pet sitting requests and reach out to the owner with my availabilty. 


```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contributors

Project Link: [https://github.com/tjmcd2010/Watch-My-Pet](https://github.com/tjmcd2010/Watch-My-Pet)

Anna Krentz- [GitHub: explorer7733](https://github.com/explorer7733) 

Hunter Mitchell - [GitHub: jhmitchell10](https://github.com/jhmitchell10)

Gio Cagliari - [GitHub: GeoMaster101](https://github.com/GeoMaster101)

Travis McDermott - [GitHub: tjmcd2010](https://github.com/tjmcd2010)




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Thanks to [Mark Carlson](https://github.com/mark-carlson) for instructor support!

* Thanks to [Clarence Cheung](https://github.com/kleranscoding) and [Mariah Wear](https://github.com/mariahw4) for TA support!


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tjmcd2010/Watch-My-Pet.svg?style=for-the-badge
[contributors-url]: https://github.com/tjmcd2010/Watch-My-Pet/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tjmcd2010/Watch-My-Pet.svg?style=for-the-badge
[forks-url]: https://github.com/tjmcd2010/Watch-My-Pet/network/members
[stars-shield]: https://img.shields.io/github/stars/tjmcd2010/Watch-My-Pet.svg?style=for-the-badge
[stars-url]: https://github.com/tjmcd2010/Watch-My-Pet/stargazers
[issues-shield]: https://img.shields.io/github/issues/tjmcd2010/Watch-My-Pet.svg?style=for-the-badge
[issues-url]: https://github.com/tjmcd2010/Watch-My-Pet/issues
[license-shield]: https://img.shields.io/github/license/tjmcd2010/Watch-My-Pet.svg?style=for-the-badge
[license-url]: https://github.com/tjmcd2010/Watch-My-Pet/blob/master/LICENSE.txt
[product-screenshot]: ./assets/images/WeatherDashboardScreenshot.png
[nodejs.org]: https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en/
[Expressjs.com]: https://img.shields.io/badge/Expressjs-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[handlebarsjs.com]: https://img.shields.io/badge/handlebarsjs-FC6600?style=for-the-badge&logo=handlebarsdotjs&logoColor=white
[Handlebars-url]: https://handlebarsjs.com/
[PostgreSQL.org]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Sequelizejs.com]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org/
[Render.com]: https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=white
[Render-url]: https://render.com/
[Materializecss.com]: https://img.shields.io/badge/Materialize-FF8A80?style=for-the-badge&logo=&logoColor=white
[Materialize-url]: https://materializecss.com/
