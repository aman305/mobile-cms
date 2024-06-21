import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFirebase } from "../hooks/useFirebase";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ArrowButton from "../component/ArrowButton";
import { StatusBar } from "expo-status-bar";
import Topvector from "../component/Topvector";
import Title from "../component/Signup/Title";
import Input from "../component/Signup/Input";
import SignupOptions from "../component/Signup/SignupOptions";

type RootStackParamList = {
  Signup: undefined;
  LOGIN: undefined;
};

type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Signup"
>;

type Props = {
  navigation: SignupScreenNavigationProp;
};

const Signup: React.FC<Props> = ({ navigation }) => {
  const firebase = useFirebase();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleUserName = (value: string) => {
    setUsername(value);
  };

  const handleSignup = async () => {
    if (email && password && username) {
      const user = await firebase.signupWithEmailAndPassword(
        email,
        password,
        username
      );
      setEmail(null);
      setPassword(null);
      setUsername(null);
      if (user) {
        navigation.navigate("LOGIN");
      } else {
        console.log("Please Fill information");
      }
    } else {
      console.log("Please Fill information");
    }
  };

  return (
    <View className="flex-1" style={{ backgroundColor: "#F5F5F5" }}>
      <StatusBar style="light" />
      <Topvector />
      <View className="m-8 flex items-center">
        <Title text="Create account" />
        <Input
          username={username}
          handleUserName={handleUserName}
          handleEmailChange={handleEmailChange}
          email={email}
          handlePasswordChange={handlePasswordChange}
          password={password}
        />
        <View className="flex-row mt-4">
          <View>
            <Text style={{ color: "#BEBEBE" }} className="mx-2">
              Already have an account?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LOGIN");
            }}
          >
            <Text style={{ color: "#03A9F4" }} className="font-bold">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full px-3">
          <ArrowButton onPress={handleSignup} title="Create" />
        </View>
        <SignupOptions />
      </View>
    </View>
  );
};

export default Signup;
