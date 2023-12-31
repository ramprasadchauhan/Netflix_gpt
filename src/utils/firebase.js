import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGMDpEfpheOubon1eq7xGM1Z0nqZYsJoQ",
  authDomain: "netflixgpt-f6e7f.firebaseapp.com",
  projectId: "netflixgpt-f6e7f",
  storageBucket: "netflixgpt-f6e7f.appspot.com",
  messagingSenderId: "97339947948",
  appId: "1:97339947948:web:90f4ee005ad4189b075809",
  measurementId: "G-6LQH3TVH1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
