# grocery-tracker
An app made with HTML, CSS and JS. Tracks your grocery items like a typical to-do list, but it also calculates your expenses.

## getting grocery-tracker set up
To run grocery tracker, ensure that you have Node.js installed. Once you're cloned this repository, in your terminal/command line, run `npm install`. This will look in the package.json file and install all the packages under `"dependencies"`. You'll then see the node_modules folder added to the grocery-tracker directory. 

## getting node_modules
Run `npm intall` in your terminal/command line (assuming Node.js is already installed)

This should install the following libraries: ejs, express and nodemon

In your package.json file, under dependencies, you should have:
```json
"dependencies": {
  "ejs": "^3.1.5",
  "express": "^4.17.1",
  "mongoose": "^5.10.3",
  "nodemon": "^2.0.4",
  "validator": "^13.1.1"
}
```

Find links to these packages and what they do:
[ejs](https://ejs.co/)
[express](https://expressjs.com/)
[mongoose](https://mongoosejs.com/)
[nodemon](https://nodemon.io/)
[validator](https://github.com/validatorjs/validator.js)