import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${import.meta.env.VITE_FIREBASE_DATABASE_URL}`,
  projectId: `${import.meta.env.VITE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_SOTRAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_APP_ID}`,
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default async function getVacancies() {
  const vacancyCol = collection(db, "vacancy");
  const vacancySnapshot = await getDocs(vacancyCol);
  const vacancyList = vacancySnapshot.docs.map((doc) => doc.data());
  return vacancyList;
}
