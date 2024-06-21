import React, { createContext, useState, useEffect } from "react";
import { app } from "../firebase_config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config";

import {
  doc,
  updateDoc,
  setDoc,
  getFirestore,
  getDoc,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { DataType } from "../modal/DataType";
type UserData = {
  username: string;
};
type FirebaseContextType = {
  signupWithEmailAndPassword: (
    email: string,
    password: string,
    username: string
  ) => Promise<any>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  onLogout: () => Promise<void>;
  addData: (data: any) => Promise<any>;
  updateData: (id: string, newData: any) => Promise<void>;
  deleteDocument: (id: string) => Promise<void>;
  user: any;
  userData: UserData | null;
  data: DataType[];
  loading: boolean;
};

export const FirebaseContext = createContext<FirebaseContextType | null>(null);

const db = getFirestore(app);
const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);

  async function updateData(id: string, newData: any) {
    try {
      const docRef = doc(db, "assignment", id);
      const newDataList = data.filter((item) => item.id !== id);
      setData([newData, ...newDataList]);
      await updateDoc(docRef, newData);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  async function fetchUserData(uid: string) {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        return userDoc.data() as UserData;
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.log("Error fetching user data", error.message);
    }
    return null;
  }

  async function addData(data: any) {
    const currentDate = new Date();
    const formatedDate = currentDate.toISOString();
    const newData: DataType = {
      documentId: data.documentId,
      title: data.title,
      description: data.description,
      status: data.status,
      "created on": formatedDate,
      "last edited": formatedDate,
      id: "",
    };

    try {
      const docRef = await addDoc(collection(db, "assignment"), newData);
      return docRef;
    } catch (error) {
      console.log("Failed to add data into database", error.message);
    }
  }

  async function deleteDocument(id: string) {
    try {
      await deleteDoc(doc(db, "assignment", id));
      const newDataList = data.filter((item) => item.id !== id);
      setData(newDataList);
    } catch (error) {
      console.log("Failed to delete ", error.message);
    }
  }

  async function signupWithEmailAndPassword(
    email: string,
    password: string,
    username: string
  ) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        await setDoc(doc(db, "users", userCredential.user.uid), {
          username: username,
        });
        return userCredential.user;
      } else {
        console.log("Failed to create account");
      }
    } catch (error) {
      console.log("Cannot create account, ", error.message);
    }
  }

  async function loginWithEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.log("Error occurred while login...", error.message);
    }
  }

  async function onLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error logging out, ", error.message);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "assignment"));
        const dataList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as DataType[];
        setData(dataList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userData = await fetchUserData(user.uid);
        setUserData(userData);
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const contextValue: FirebaseContextType = {
    signupWithEmailAndPassword,
    loginWithEmailAndPassword,
    onLogout,
    addData,
    updateData,
    deleteDocument,
    user,
    userData,
    data,
    loading,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
