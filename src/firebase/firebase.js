import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCjfHGht5-_YypNHgNtPg5Kn4tRXXBPE58",
  authDomain: "petuk-ji-47765.firebaseapp.com",
  projectId: "petuk-ji-47765",
  storageBucket: "petuk-ji-47765.appspot.com",
  messagingSenderId: "409467953606",
  appId: "1:409467953606:web:1a2973d27e4a01c60212c7",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default async function getVacancies() {
  const vacancyCol = collection(db, "vacancy");
  const vacancySnapshot = await getDocs(vacancyCol);
  const vacancyList = vacancySnapshot.docs.map((doc) => doc.data());
  return vacancyList;
}
