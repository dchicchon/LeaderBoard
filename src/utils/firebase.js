import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDZLb_DPsrPliq9sZrORiTjUKhXl0gIqyQ",
  authDomain: "leaderboard-8c38f.firebaseapp.com",
  databaseURL: "https://leaderboard-8c38f.firebaseio.com",
  projectId: "leaderboard-8c38f",
  storageBucket: "leaderboard-8c38f.appspot.com",
  messagingSenderId: "98306186489",
  appId: "1:98306186489:web:f7195e95ac564ad9ea9628",
  measurementId: "G-9KL6TM54SM",
};

firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export function analyticsClick(e) {
  analytics.logEvent(e.currentTarget.className);
}
