import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};

export type RootStackParamList = {
  Login: undefined;
  HOMESCREEN: undefined;
  SIGNUP: undefined;
};

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  return (
    <View className="relative h-32">
      <TouchableOpacity
        onPress={() => navigation.navigate("SIGNUP")}
        className="z-10 left-4 top-12"
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../assets/icons/back.png")}
        />
      </TouchableOpacity>
      <Image
        className="absolute w-full h-full"
        source={require("../../assets/images/topVector.png")}
      />
    </View>
  );
};

export default Header;
