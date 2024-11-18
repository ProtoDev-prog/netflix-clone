import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDpJN7cHmsIbJ3vTRkJUtISpOvP9RYw8x8",
  authDomain: "n-clone-fb616.firebaseapp.com",
  projectId: "n-clone-fb616",
  storageBucket: "n-clone-fb616.firebasestorage.app",
  messagingSenderId: "535964377749",
  appId: "1:535964377749:web:5d3308e82489086715f19c",
  measurementId: "G-BYHRN71VGW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userData.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    toast.error(err.code);
  }
};
// const logIn = async (email, password) => {
//   try {
//     signInWithEmailAndPassword(auth, email, password);
//     return new Promise((resolve) => setTimeout(resolve, 5000));
//   } catch (err) {
//     toast.error(err.code);
//   }
// };
const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully");
    return new Promise((resolve) => setTimeout(resolve, 3500));
  } catch (err) {
    toast.error(err.code.split("/")[1].split("-").join(" "));
    console.error("Login error:", err);
  }
};

const logOut = () => {
  signOut(auth);
};

export { auth, db, logIn, signUp, logOut };
