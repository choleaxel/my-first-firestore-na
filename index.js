
const admin = require("firebase-admin");

const serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const restaurant = {
  name: 'Mister 01',
  address: '555 N Federal HWY',
  cuisine: 'Pizza',
  rating: 4.9,
  phone: '(786) 677-2903',
}

db.collection('restaurants').add(restaurant)//referencing db, creating a collection named 'restaurants' to it
//also adding the data from the above added info
  .then(doc => console.log('Created restaurant', doc.id)) //Will print and also include the id created by Firebase
  .catch(err => console.error(err)) //handling an error




