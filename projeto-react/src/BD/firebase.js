// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgoB8KFH6XkVkLC-q_iIcQRdRxRDIlr-I",
  authDomain: "tcc-etec-jaragua.firebaseapp.com",
  databaseURL: "https://tcc-etec-jaragua-default-rtdb.firebaseio.com",
  projectId: "tcc-etec-jaragua",
  storageBucket: "tcc-etec-jaragua.appspot.com",
  messagingSenderId: "107027055211",
  appId: "1:107027055211:web:871cc1daed49786fc7272e",
  measurementId: "G-XF38S8BG2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);