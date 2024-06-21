import React, { useEffect, useState } from "react";
import FirebaseProvider from "./context/Firebase";
import AppNavigation from "./navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const App: React.FC = (): any => {
  return (
    <FirebaseProvider>
      <AppNavigation />
    </FirebaseProvider>
  );
};

export default App;
