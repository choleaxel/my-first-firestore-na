//We dont typically want to delete, only when duplicated data is stored
//this is how we do it


// //const admin = require("firebase-admin"); // this is es5, require is not used in ES6

// import admin from "firebase-admin"; // imports firebase library of tools, es6 syntax instead of above 
// //from es5 if using es6 we need to add type: modules to package.json 

// //const serviceAccount = require('./credentials'); //es5

// import serviceAccount from './credentials.js'; //importing credentials to connect to firebase
// //es6 syntax

// admin.initializeApp({ //connects to our firebase project 
//   credential: admin.credential.cert(serviceAccount)
// }); //creating a certificate based from out credentials


// // now we are connected to OUR firebase project & related services

// const db = admin.firestore();  // naming our database with variable db, creates a shortcut 
// //to access firestore database

// // can also  const restaurantsCol = db.collection('restaurants'); as a short hand and can place
// // in place of where <db.collection('restaurants')> is being used; optional
// restaurantsCol.doc(57cmgGoyoH9kq3qZQF6s).delete()
//     .then(res => console.log('Success deleting 57cmgGoyoH9kq3qZQF6s!!'))
//     .catch(err => console.error('Error deleting:57cmgGoyoH9kq3qZQF6s', err))
// restaurantsCol.doc(l1lwAQyOXE4ZUerGLitN).delete()
//     .then(res => console.log('Success deleting l1lwAQyOXE4ZUerGLitN!!'))
//     .catch(err => console.error('Error deleting:l1lwAQyOXE4ZUerGLitN', err))


// //Created restaurant 57cmgGoyoH9kq3qZQF6s
// //Created restaurant l1lwAQyOXE4ZUerGLitN