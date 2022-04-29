
//const admin = require("firebase-admin"); // this is es5, require is not used in ES6

import admin from "firebase-admin"; // imports firebase library of tools, es6 syntax instead of above 
//from es5 if using es6 we need to add type: modules to package.json 

//const serviceAccount = require('./credentials'); //es5

import serviceAccount from './credentials.js'; //importing credentials to connect to firebase
//es6 syntax

admin.initializeApp({ //connects to our firebase project 
  credential: admin.credential.cert(serviceAccount)
}); //creating a certificate based from out credentials


// now we are connected to OUR firebase project & related services

const db = admin.firestore();  // naming our database with variable db, creates a shortcut 
//to access firestore database

// can also  const restaurantsCol = db.collection('restaurants'); as a short hand and can place
// in place of where <db.collection('restaurants')> is being used; optional

const restaurant = {  //creating an object -- in this case a specific rest we want to add to our db
  name: 'Mister 01',
  address: '555 N Federal HWY',
  cuisine: 'Pizza',
  rating: 4.9,
  phone: '(786) 677-2903',
}

db.collection('restaurants').add(restaurant)//referencing db, creating a collection named 'restaurants' to it
//also adding the data from the above added info
//restaurantsCol.add(restaurant) //shorthand of above line 
  .then(doc => console.log('Created restaurant', doc.id)) // handle resolve, what will it do?
  .catch(err => console.error(err)) //handling an error, what happens if it fails?


const restaurant2 = {
  name: 'Bolay',
  address: '7060 West Palmetto Park Rd.',
  cuisine: 'American',
  rating: 4.6,
}
// done in aync await syntax, need to wrap in a try..catch as best practice, code will error instead of crash
async function addRestaurant(data) {
 try { 
  const doc = await db.collection('restaurants').add(data) //setting it to data so that we can reuse
  //const doc = await restaurantCol.add(data) shorthand for above line of code
  console.log('Created restaurant', doc.id) //handle resolve
 } catch(err) {
   console.error(err) // handle reject
 }
}
// calling the function
addRestaurant(restaurant2) //restaurant2 is being passed in the place of data above

