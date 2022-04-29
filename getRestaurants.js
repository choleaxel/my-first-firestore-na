import { restaurantsCol } from "./connectDb.js";

// import admin from "firebase-admin"; 

// import serviceAccount from './credentials.js'; 

// admin.initializeApp({ //connects to our firebase project 
//   credential: admin.credential.cert(serviceAccount)
// }); //creating a certificate based from out credentials

// // now we are connected to OUR firebase project & related services
// const db = admin.firestore();  // naming our database with variable db, creates a shortcut 
// //to access firestore database

// const restaurantsCol = db.collection('restaurants'); //as a short hand and can place
// // in place of where <db.collection('restaurants')> is being used; optional


// //query 
// restaurantsCol.get() //get all restaurants
//     .then(snapshot => { // loop through all results
//         snapshot.docs.forEach(doc => console.log(doc.data())) 
//     })
//     //.catch(err => console.error(err))
//     .catch(console.error) //this line is the same as above



//get all the restaurants with the name bolay, that is not deleted, cannot run on mine since i did not
//delete on mine
restaurantsCol
//.where('name', '==', 'Bolay')
.where('rating', '>=', 4.5)
//.where('deleted', '!=', true)
.get() 
.then(snapshot => { // loop through all results
        snapshot.docs.forEach(doc => console.log(doc.data())) 
    })
    //.catch(err => console.error(err))
    .catch(console.error) //this line is the same as above