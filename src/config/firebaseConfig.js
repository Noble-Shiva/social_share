// const firebaseConfig = {
//   apiKey: "AIzaSyC2azLx4YL1Ma4eCEIBploemksqeguBelM",
//   authDomain: "social-share-007.firebaseapp.com",
//   projectId: "social-share-007",
//   storageBucket: "social-share-007.appspot.com",
//   messagingSenderId: "239720000497",
//   appId: "1:239720000497:web:17f44460a02cde56a67250",
//   measurementId: "G-XWE2DN2PN5",
// };
// export default firebaseConfig;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  getAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2azLx4YL1Ma4eCEIBploemksqeguBelM",
  authDomain: "social-share-007.firebaseapp.com",
  projectId: "social-share-007",
  storageBucket: "social-share-007.appspot.com",
  messagingSenderId: "239720000497",
  appId: "1:239720000497:web:17f44460a02cde56a67250",
  measurementId: "G-XWE2DN2PN5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Auth Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
