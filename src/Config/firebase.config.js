// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuVn3ee_m7j5s707kLzt2Ee4vL3AO51Fc",
  authDomain: "roomies-4acec.firebaseapp.com",
  projectId: "roomies-4acec",
  storageBucket: "roomies-4acec.firebasestorage.app",
  messagingSenderId: "341232321656",
  appId: "1:341232321656:web:d3a6a80cb2d08bf486198d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth instance and app
export const auth = getAuth(app);
export default app;