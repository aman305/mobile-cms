import { useContext } from "react";
import { FirebaseContext } from "../context/Firebase";

export const useFirebase = () => {
  return useContext(FirebaseContext);
};
