import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Homescreen from "../screens/Homescreen";
import ProfileDetail from "../screens/ProfileDetail";
import CardDetail from "../screens/CardDetail";

type RootStackParamList = {
  SIGNUP: undefined;
  LOGIN: undefined;
  HOMESCREEN: undefined;
  PROFILE: undefined;
  CARDDETAIL: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SIGNUP" component={Signup} />
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="HOMESCREEN" component={Homescreen} />
        <Stack.Screen name="PROFILE" component={ProfileDetail} />
        <Stack.Screen name="CARDDETAIL" component={CardDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
