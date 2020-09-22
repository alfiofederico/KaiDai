var firebaseConfig = {
  apiKey: "AIzaSyByCWhgIAR2IKrinm1skmm_2vWMLeIh5KY",
  authDomain: "contactform-d3cce.firebaseapp.com",
  databaseURL: "https://contactform-d3cce.firebaseio.com",
  projectId: "contactform-d3cce",
  storageBucket: "contactform-d3cce.appspot.com",
  messagingSenderId: "517799279664",
  appId: "1:517799279664:web:7c591396bfa3105cf041f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let messagesRef = firebase.database().ref('messages');




document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
  e.preventDefault();

  let name = getInputValue('name');
  let email = getInputValue('email');
  let phone = getInputValue('phone');
  let message = getInputValue('message');

  saveMessage(name,email,phone,message);

  document.querySelector('.alert').style.display = 'block';
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000)


  document.getElementById('contactForm').reset();

}

function getInputValue(id){
  return document.getElementById(id).value;
}



function saveMessage(name, email, phone, message){

  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    phone:phone,
    message:message
  });
}