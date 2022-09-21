import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import {
  auth,
  db,
  facebookProvider,
  googleProvider,
} from "../config/firebaseConfig";

// Functions
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    // console.log("Google Auth Response : ", res);
    const user = res.user;
    console.log("Google Auth User : ", user);
    return {
      uid: user.uid,
      name: user.displayName,
      authProvider: "google",
      email: user.email,
      profilePictureUrl: user.photoURL,
    };
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    console.log("Facebook Auth Response : ", res);
    const user = res.user;
    // console.log("Google Auth User : ", user);
    // const q = query(collection(db, "users"), where("uid", "==", user.uid));
    // const docs = await getDocs(q);
    // if (docs.docs.length === 0) {
    //   await addDoc(collection(db, "users"), {
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //   });
    // }
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};

export const createUser = async (user) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const docs = await getDocs(q);
  console.log(docs.docs);
  if (docs.docs.length === 0) {
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: user.displayName,
      authProvider: "google",
      email: user.email,
      profilePictureUrl: user.photoURL,
      phoneNo: user.phoneNo,
    });
  }
};

export const getUserDetails = async (id) => {
  const q = query(collection(db, "users"), where("uid", "==", id));
  const docs = await getDocs(q);
  const data = docs.docs.map((doc) => doc.data());
  if (data && data.length > 0) {
    return data[0];
  }
};
