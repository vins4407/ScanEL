// import firebase from "firebase/compat/app";
// import  "firebase/compat/firestore";

// const db = firebase.firestore();

// const fetchUserData = async (userId) => { 
//   try {
//     const userRef = db.collection("users").doc(userId);
//     const userSnapshot = await userRef.get();
//     if (userSnapshot.exists) {
//       const { name, mobileNumber, email } = userSnapshot.data();
//       console.log("User data from Firestore:", { name, mobileNumber, email });
//       return { name, mobileNumber, email };
//     } else {
//       console.error("User not found in Firestore");
//     }
//   } catch (error) {
//     console.error("Error fetching user data from Firestore:", error);
//   }
// };

// export default fetchUserData;
