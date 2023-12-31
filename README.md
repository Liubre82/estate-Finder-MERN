# Estate-Finder-MERN
[https://estate-finder-mern.onrender.com/](https://estate-finder-mern.onrender.com/)

[![projectPic][project.io]][projectRender-url]

<!-- ABOUT THE PROJECT -->
## About The Project
estateFinder is a real estate marketplace website that displays real estate properties that are listed up for rent or for sale that 
users will be able to see/browse on our website
Users have the ability to perform CRUD functionalities on a user login, a real estate listing, image uploads, 
and a review of a specific listing. user will also be able to contact a "landlord" or the user that created the listing through email on our website.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Design Patterns Used
* MVC
* REST API


### Built With

* [![React][React.js]][React-url]
* [![Tailwind][Tailwind.com]][Tailwind-url]
* [![Redux][Redux.com]][Redux-url]
* [![Mongodb][Mongodb.com]][Mongodb-url]
* [![Mongoose][Mongoose.js]][Mongoose-url]
* [![React-Router-DOM][React-Router-DOM]][React-Router-DOM-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![JWT][JWT.io]][JWT-url]
* [![Javascript][Javascript.com]][Javascript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

setting up your project locally. To get a local copy up and running follow these steps.


### Setup

* create your own firebase project and initialize firebase. create a firebase.js file in the `client/src` directory

  ```sh
  inside your firebase Project settings, scroll down and copy the given firebase initializer code
  and paste the code in the client/src/firebase.js file;
   ```
  [![firebaseConfig][firebase-config-img]][firebase-config-img-url]
   
* Create your own mongodb database & enter your mongodb connection string inside your `root` .env file (create a .env file in the `root` directory)
  to connect to your MongoDB deployment.
   ```js
   mongodbConnect = 'ENTER YOUR MONGODB CONNECTION STRING';
   ```
   
* Enter your jwt secret key inside your `root` .env file (create a .env file in the `root` directory).
   ```js
   JWT_SECRET = 'ENTER YOUR SECRET KEY';
   ```



### Installation

* install npm
  ```sh
  npm install npm@latest -g
  ```

1. Clone the repo
   ```sh
   gh repo clone Liubre82/estate-Finder-MERN
   ```
   
2. Install NPM packages for server folder(backend). `in root directory`
   ```sh
   npm install
   ```
   
3. Install NPM packages for client folder(frontend). `in root directory`
   ```sh
   cd client
   npm install
   ```




### Deployment

After everything is installed and created

   
* To run the `client/` directory (INSIDE THE `ROOT` DIRECTORY)
   ```js
   cd client
   npm run dev
   ```
   
* To start the server(backend)  in `root` directory. server/ will connect to your mongodb database, start an express serve on port 3000, & run our API
   ```js
   npm run dev
   ```

* (Optional) add some initial data to our listings & reviews collection so your web page isn't empty
  - First you must create ATLEAST 2 user accounts and retrieve the users _id.
  - Then go to the server/seeds/userIdParams.js file & initialize 1 user _id to the listingUser variable & initialize the reviewUsers variable array
  - Lastly, add ATLEAST 1 user id to the reviewUsers array, the _id you use cannot be the one you used for the listingUser variable.

[![urlParams][urlParams.js]][urlParams-url]

  After the variables are set correctly:


  In the `root` directory
  ```js
  node server/seeds/seeds.js
  ```

- listings & reviews collection will now be populated & your website will display listings & reviews.
- seeds.js WILL CLEAR YOUR ENTIRE LISTINGS & REVIEWS COLLECTION BEFORE ADDING THE INITIAL DATA INTO YOUR LISTINGS & REVIEWS COLLECTION

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Brent Liu -  brentliu0@.com

Project Link: [https://github.com/Liubre82/estate-Finder-MERN](https://github.com/Liubre82/estate-Finder-MERN)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[firebase-config-img]: https://firebasestorage.googleapis.com/v0/b/mern-real-estate-9a14b.appspot.com/o/SeedsImages%2FfirebaseConfig(readme.md).png?alt=media&token=643cf4c1-72ae-4dd0-a3a9-442b663dd255
[firebase-config-img-url]: https://firebasestorage.googleapis.com/v0/b/mern-real-estate-9a14b.appspot.com/o/SeedsImages%2FfirebaseConfig(readme.md).png?alt=media&token=643cf4c1-72ae-4dd0-a3a9-442b663dd255
[urlParams.js]: https://firebasestorage.googleapis.com/v0/b/mern-real-estate-9a14b.appspot.com/o/SeedsImages%2FuserIdparams(forReadMe.md).png?alt=media&token=9c07515c-d365-4ecc-8e0c-9071e7d3ba2c
[urlParams-url]: https://firebasestorage.googleapis.com/v0/b/mern-real-estate-9a14b.appspot.com/o/SeedsImages%2FuserIdparams(forReadMe.md).png?alt=media&token=9c07515c-d365-4ecc-8e0c-9071e7d3ba2c
[project.io]: https://firebasestorage.googleapis.com/v0/b/mern-real-estate-9a14b.appspot.com/o/SeedsImages%2Fproject%20image.png?alt=media&token=5b717eb0-73d7-4be2-b7d9-fbe989bbec80
[project-url]: https://firebasestorage.googleapis.com/v0/b/mern-real-estate-9a14b.appspot.com/o/SeedsImages%2Fproject%20image.png?alt=media&token=5b717eb0-73d7-4be2-b7d9-fbe989bbec80
[projectRender-io]: https://estate-finder-mern.onrender.com/
[projectRender-url]: https://estate-finder-mern.onrender.com/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Redux.com]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Mongodb.com]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongodb-url]: https://www.mongodb.com/
[React-Router-DOM]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-Router-DOM-url]: https://reactrouter.com/en/main
[Node.js]: 	https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Javascript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://www.javascript.com/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Mongoose.js]: https://img.shields.io/badge/Mongoose-800020?style=for-the-badge&logo=mongoose 
[Mongoose-url]: https://mongoosejs.com/
[JWT.io]: https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink
[JWT-url]: https://jwt.io/
