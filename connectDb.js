import admin from "firebase-admin"; 
import serviceAccount from './credentials.js'; 

admin.initializeApp({  
  credential: admin.credential.cert(serviceAccount)
}); 

const db = admin.firestore();  
export const restaurantsCol = db.collection('restaurants'); 
// this creates the ability to access db and collection by using one line of code elsewhere
// this was all the same code from the index.js and other files in our project
// now we can delete those lines of code and replace with <import { restaurantsCol } from "./connectDb.js">
// can use this in the index and delete file as well, I left the lines b/c I need the comments