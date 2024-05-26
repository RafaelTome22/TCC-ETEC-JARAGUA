import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

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
const auth = getAuth(app); // Initialize Auth
const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);
export { auth, googleProvider };