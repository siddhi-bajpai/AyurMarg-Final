// // index.js

// document.addEventListener('DOMContentLoaded', function () {
//     // Initialize Firebase
//     const firebaseConfig = {
//       apiKey: 'YOUR_API_KEY',
//       authDomain: 'YOUR_AUTH_DOMAIN',
//       projectId: 'YOUR_PROJECT_ID',
//     };
  
//     firebase.initializeApp(firebaseConfig);
//     const db = firebase.firestore();
  
//     // Retrieve the user's email from local storage
//     const userEmail = localStorage.getItem('userEmail');
  
//     // Reference to the user's document in Firestore
//     const userDocRef = db.collection('users').doc(userEmail);
  
//     // Fetch user data from Firestore
//     userDocRef.get()
//       .then((doc) => {
//         if (doc.exists) {
//           const userData = doc.data();
  
//           // Update form fields with retrieved data
//           document.getElementById('user_name').value = userData.username || '';
//           document.getElementById('user_mobile').value = userData.mobile || '';
//           document.getElementById('user_gender').value = userData.gender || '';
//           document.getElementById('user_age').value = userData.age || '';
//           document.getElementById('user_weight').value = userData.weight || '';
//           document.getElementById('user_bloodgroup').value = userData.bloodgroup || '';
//           document.getElementById('user_address').value = userData.address || '';
//         } else {
//           console.log('No such document!');
//         }
//       })
//       .catch((error) => {
//         console.error('Error getting user details: ', error);
//       });
  
//     // Function to save updated user details
//     document.getElementById('userInfoForm').addEventListener('submit', function (event) {
//       event.preventDefault();
  
//       // Gather updated user details from form
//       const updatedUserData = {
//         username: document.getElementById('user_name').value,
//         mobile: document.getElementById('user_mobile').value,
//         gender: document.getElementById('user_gender').value,
//         age: document.getElementById('user_age').value,
//         weight: document.getElementById('user_weight').value,
//         bloodgroup: document.getElementById('user_bloodgroup').value,
//         address: document.getElementById('user_address').value,
//       };
  
//       // Update user details in Firestore
//       userDocRef.update(updatedUserData)
//         .then(() => {
//           console.log('User details updated successfully');
//         })
//         .catch((error) => {
//           console.error('Error updating user details: ', error);
//         });
//     });
//   });
  