
const admin = require("firebase-admin");

const serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();  // naming our db 


const restaurant = {
  name: 'Mister 01',
  address: '555 N Federal HWY',
  cuisine: 'Pizza',
  rating: 4.9,
  phone: '(786) 677-2903',
}

// db.collection('restaurants').add(restaurant)//referencing db, creating a collection named 'restaurants' to it
// //also adding the data from the above added info
//   .then(doc => console.log('Created restaurant', doc.id)) //Will print & include the id created by Firebase
//   .catch(err => console.error(err)) //handling an error


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
  console.log('Created restaurant', doc.id)
 } catch(err) {
   console.error(err)
 }
}
// calling the function
addRestaurant(restaurant2)