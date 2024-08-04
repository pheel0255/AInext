// Import the functions you need from the SDKs you need
import { initializeApp, isSupported } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

if (typeof window !== "undefined") {
  isSupported().then((isSupported) => {
    if (isSupported) {
      const app = getApp();
      getAnalytics(app);
    }
  });
}
const firebaseConfig = {
  apiKey: "AIzaSyDhL256AWUCSySPSsrtt3h7YWPCa-TcskQ",
  authDomain: "inventory-management-e21e7.firebaseapp.com",
  projectId: "inventory-management-e21e7",
  storageBucket: "inventory-management-e21e7.appspot.com",
  messagingSenderId: "933153805287",
  appId: "1:933153805287:web:cfa8aff3065360ebc42342",
  measurementId: "G-1VLNPGJ91Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
