import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFirebase } from "../hooks/useFirebase";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ArrowButton from "../component/ArrowButton";
import showToast from "../component/Toast";
import Header from "../component/Login/Header";
import Title from "../component/Login/Title";
import Inputs from "../component/Login/Input";

type RootStackParamList = {
  Login: undefined;
  HOMESCREEN: undefined;
  SIGNUP: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const firebase = useFirebase();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLogin = async () => {
    try {
      const user = await firebase.loginWithEmailAndPassword(email, password);
      if (user) {
        navigation.navigate("HOMESCREEN");
      } else {
        showToast("Invalid credentials !!");
        console.log("Something went wrong!");
      }
    } catch (error: any) {
      showToast("Enter valid email !!");
      console.log("Unable to login!", error.message);
    }
  };

  return (
    <View className="flex-1">
      <Header navigation={navigation} />
      <View className="m-8 flex items-center">
        <Title />
        <Inputs
          email={email}
          handleEmailChange={handleEmailChange}
          password={password}
          handlePasswordChange={handlePasswordChange}
        />
        <TouchableOpacity className="w-full my-2 px-4">
          <Text className="text-right text-[16px]" style={{ color: "#BEBEBE" }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <ArrowButton onPress={handleLogin} title="Sign in" />
      </View>
    </View>
  );
};

export default Login;
