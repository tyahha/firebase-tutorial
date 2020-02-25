import React from "react";
import logo from "./logo.svg";
import "./App.css";

import firebase from "firebase/app";
import { fireBaseConfig } from "./firebaseConfig";

import "firebase/auth";

firebase.initializeApp(fireBaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <button
          onClick={() => {
            firebase
              .auth()
              .signInWithPopup(provider)
              .then(result => {
                alert("resultuser: " + result.user?.displayName ?? "nothing");
              })
              .catch(error => {
                console.log("error.code", error.code);
                console.log("error.message", error.message);
                console.log("error.email", error.email);
                console.log("error.credential", error.credential);
              });
          }}
        >
          テスト
        </button>
      </div>
    </div>
  );
}

export default App;
