# grocery-tracker
An app made with HTML, CSS and JS. Tracks your grocery items like a typical to-do list, but it also calculates your expenses.

# App Structure
Grocery Tracker is built using the MVC web app architecture. This stands for **Model** - **Controller** - **View**. The model interacts with our database and defines the documents that our app interacts with. In this app, we have two models: a User model and a List model. 

# Set up
To run grocery tracker, ensure that you have Node.js installed. Once you've cloned this repository, in your terminal/command line, type `npm install`. This will look in the package.json file and install all the packages under `"dependencies"`. You'll also see the node_modules folder added to the grocery-tracker directory. 

In your package.json file, under dependencies, you should have:
```json
"dependencies": {
  "@fortawesome/fontawesome-free": "^5.14.0",
  "bcrypt": "^5.0.0",
  "cookie-parser": "^1.4.5",
  "ejs": "^3.1.5",
  "express": "^4.17.1",
  "jsonwebtoken": "^8.5.1",
  "mongoose": "^5.10.3",
  "nodemon": "^2.0.4",
  "validator": "^13.1.1"
}
```

Find links to these packages and what they do:
[bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
[cookie-parser](https://github.com/expressjs/cookie-parser#readme)
[ejs](https://ejs.co/)
[express](https://expressjs.com/)
[jsonwebtoken](https://jwt.io/)
[mongoose](https://mongoosejs.com/)
[nodemon](https://nodemon.io/)
[validator](https://github.com/validatorjs/validator.js)