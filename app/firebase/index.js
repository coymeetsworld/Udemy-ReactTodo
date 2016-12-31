import firebase from 'firebase/firebase-browser';

try {
	var config = {
  	apiKey: "AIzaSyD7R3F5bY_E-jzaEApT6tOXAQwmA9O_7sw",
  	authDomain: "todo-app-f1f92.firebaseapp.com",
  	databaseURL: "https://todo-app-f1f92.firebaseio.com",
  	storageBucket: "todo-app-f1f92.appspot.com",
  	messagingSenderId: "1049151407475"
	};
	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;