import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-TABAsffjFfVTwVD2qJ9RojCw5vWFqhE",
  authDomain: "coderhouse-react-a4b64.firebaseapp.com",
  projectId: "coderhouse-react-a4b64",
  storageBucket: "coderhouse-react-a4b64.appspot.com",
  messagingSenderId: "283672414176",
  appId: "1:283672414176:web:1d0df2adc782b34effcd85",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.debug))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
