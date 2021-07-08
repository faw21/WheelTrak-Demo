var firebaseConfig = {
    apiKey: "AIzaSyDZcJ_G63LZa36zabkHvA-y8USOh9qzZz4",
    authDomain: "wheeltrak-website-contact.firebaseapp.com",
    databaseURL: "https://wheeltrak-website-contact-default-rtdb.firebaseio.com/",
    projectId: "wheeltrak-website-contact",
    storageBucket: "wheeltrak-website-contact.appspot.com",
    messagingSenderId: "546953362678",
    appId: "1:546953362678:web:013899257ed229fd8180d7",
    measurementId: "G-0ZDNQQQW9L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//Reference messages collections
var messagesRef = firebase.database().ref('nameEmailCombo');
//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
	e.preventDefault();

	console.log(123);

	var name = getInputVal('name');
	var email = getInputVal('email');
	console.log(name + " " + email);


	//Save message
	saveMessage(name, email);

	//Show response
	document.querySelector('.alert').style.display = 'block';

	document.getElementById('contactForm').reset();

	//Hide alert after 3 secs.
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';

	}, 3000);
}

//Function to get input value
function getInputVal(id){
	return document.getElementById(id).value;
}

// Save the messages to firebase
function saveMessage(name, email){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name:name,
		email:email
	});
}