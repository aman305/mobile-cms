import { initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyDfSyitwcHh5yomJDJ0F65no7W3fFnUito",
  authDomain: "mobilecms-33c89.firebaseapp.com",
  projectId: "mobilecms-33c89",
  storageBucket: "mobilecms-33c89.appspot.com",
  messagingSenderId: "958270588787",
  appId: "1:958270588787:web:10594704bf14bc53486706",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
