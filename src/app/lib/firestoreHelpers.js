import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

const collectionName = "postcards";

export async function getAllPostcards() {
  const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addPostcard({ sender, recipient, message, imageUrl, user }) {
  return await addDoc(collection(db, collectionName), {
    sender,
    recipient,
    message,
    imageUrl,
    user,
    createdAt: serverTimestamp(),
  });
}

export async function deletePostcard(id) {
  return await deleteDoc(doc(db, collectionName, id));
}
