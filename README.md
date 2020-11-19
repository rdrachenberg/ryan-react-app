# Ryan's Portfolio App

#### A MERN (MongoDB, Express.js, React.js, Node.js) stack app to display my personal portfolio. [Heroku Deployed](https://ryan-react-app.herokuapp.com/) 

<p align='center'>
    <img src='https://img.shields.io/badge/JavaScript-87.4%25-brightgreen?style=plastic&logo=javascript'>
    <img src='https://img.shields.io/badge/CSS-9.3%25-green?style=plascit&logo=CSS3&logoColor=green'>
    <img src='https://img.shields.io/badge/HTML-3.3%25-orange?style=plastic&logo=HTML5&logoColor=orange'>
    <a href='https://github.com/rdrachenberg'>
        <img src='https://img.shields.io/badge/Mongo%20-DB-blue?style=plastic&logo=mongoDB&logoColor=success'>
    </a>
    <a href='https://github.com/rdrachenberg'>
        <img src='https://img.shields.io/badge/Node%20-.js-success?style=plastic&logo=Node.js&logoColor=success'>
        <img src='https://img.shields.io/badge/React%20-16.12.0-informational?style=plastic&logo=React&logoColor=#61DAFB'>
    </a>
    <a href='https://github.com/rdrachenberg'>
        <img src='https://img.shields.io/badge/Made%20by-rDrachenberg-blue?style=plastic&logo=visual-studio-code&logoColor=blue'>
    </a> 
    <img src= 'https://img.shields.io/github/issues/rdrachenberg/ryan-react-app?style=plastic' />
    <img src= 'https://img.shields.io/github/license/rdrachenberg/ryan-react-app?style=plastic' />
    <a href='mailto:RyanDrachenberg@gmail.com'>
        <img src='https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg?logo=minutemailer&logoColor=#29B99B'>
    </a>
</p>
<p align='center'>
    <a href='https://ryan-react-app.herokuapp.com/' >
        <img src='https://img.shields.io/badge/Heroku-Deployed-blue?style=for-the-badge'>
    </a>
    </br>
    <a href='https://ryan-react-app.herokuapp.com/' >
        <img src='https://media.giphy.com/media/UQ1PjoQWY9XrejfOGC/giphy.gif' width=150px>
    </a>
</p>
</br>

### Tech Stack - MERN

    MongoDB, Express.js, React.js, Node.js

### Home Page

<img src="./readMeAssets/hompage.png">

### Portfolio

<img src="./readMeAssets/portfolio.png">

### Contact Me

<img src="./readMeAssets/contact-me.png">

### Root File Structure

    📦ryan-react-app
    ┣ 📂client
    ┣ 📂config
    ┃ ┣ 📜config.js
    ┃ ┣ 📜database.js
    ┃ ┣ 📜express.js
    ┃ ┗ 📜routes.js
    ┣ 📂controllers
    ┃ ┣ 📜index.js
    ┃ ┣ 📜message.js
    ┃ ┣ 📜post.js
    ┃ ┣ 📜project.js
    ┃ ┣ 📜user.js
    ┣ 📂models
    ┃ ┣ 📜Message.js
    ┃ ┣ 📜Post.js
    ┃ ┣ 📜Project.js
    ┃ ┣ 📜TokenBlacklist.js
    ┃ ┣ 📜User.js
    ┃ ┗ 📜index.js
    ┣ 📂routes
    ┃ ┣ 📜index.js
    ┃ ┣ 📜message.js
    ┃ ┣ 📜post.js
    ┃ ┣ 📜project.js
    ┃ ┗ 📜user.js
    ┣ 📂scripts
    ┃ ┣ 📜build.js
    ┃ ┗ 📜start-client.js
    ┣ 📂utils
    ┃ ┣ 📜auth.js
    ┃ ┣ 📜index.js
    ┃ ┗ 📜jwt.js
    ┣ 📜LICENSE
    ┣ 📜Procfile
    ┣ 📜README.md
    ┣ 📜package.json
    ┗ 📜server.js


### Client File Structure

    📦client
    ┣ 📂build
    ┃ ┣ 📂static
    ┃ ┃ ┣ 📂css
    ┃ ┃ ┣ 📂js
    ┃ ┃ ┗ 📂media
    ┣ 📂public
    ┣ 📂src
    ┃ ┣ 📂App
    ┃ ┣ 📂Components
    ┃ ┃ ┣ 📂Body
    ┃ ┃ ┣ 📂Contact
    ┃ ┃ ┣ 📂Footer
    ┃ ┃ ┣ 📂HomeContent
    ┃ ┃ ┣ 📂Login
    ┃ ┃ ┣ 📂MessageBoard
    ┃ ┃ ┣ 📂MostLanguages
    ┃ ┃ ┣ 📂NavBar
    ┃ ┃ ┗ 📂Portfolio
    ┃ ┣ 📂Main
    ┃ ┣ 📂services
    ┃ ┣ 📜index.css
    ┃ ┣ 📜index.js
    ┣ 📜package.json
    ┣ 📜static.json