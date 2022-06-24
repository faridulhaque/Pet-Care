import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyDQwPXqplZHIEPnGo5hW-Wf4x3cKv2kgT8",
  // authDomain: "petcare-b3672.firebaseapp.com",
  // projectId: "petcare-b3672",
  // storageBucket: "petcare-b3672.appspot.com",
  // messagingSenderId: "376531059113",
  // appId: "1:376531059113:web:127577f367c6cbfc74c4b8",

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
