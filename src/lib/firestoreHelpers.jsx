import { db } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

// 💾 Spara vykort: postcards/{userEmail}/postcards/{1,2,...}
export async function savePostcardForUser(userEmail, postcardData) {
  const userDocRef = doc(db, "postcards", userEmail);
  const userPostcardsCollection = collection(userDocRef, "postcards");

  const snapshot = await getDocs(userPostcardsCollection);
  const existingCount = snapshot.size;

  if (existingCount >= 5) {
    throw new Error("You have reached the maximum of 5 postcards.");
  }

  const newId = (existingCount + 1).toString();
  const newPostcardRef = doc(userPostcardsCollection, newId);

  await setDoc(newPostcardRef, {
    ...postcardData,
    createdAt: new Date(),
  });
}

// 🔄 Hämta vykort från postcards/{userEmail}/postcards
export async function getUserPostcards(userEmail) {
  const userPostcardsCollection = collection(
    db,
    "postcards",
    userEmail,
    "postcards"
  );
  const snapshot = await getDocs(userPostcardsCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// ❌ Ta bort vykort från postcards/{userEmail}/postcards/{id}
export async function deletePostcard(userEmail, id) {
  const ref = doc(db, "postcards", userEmail, "postcards", id);
  return await deleteDoc(ref);
}
