import { db } from "../config/firebaseConfig";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

export const getSocialHandles = async (id) => {
  const q = query(collection(db, "socialHandles"), where("uid", "==", id));
  const docs = await getDocs(q);
  const data = docs.docs.map((doc) => doc.data());
  console.log(data);
  if (data && data.length > 0) {
    return data[0];
  }
};
