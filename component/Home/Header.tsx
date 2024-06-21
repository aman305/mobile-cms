import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useFirebase } from "../../hooks/useFirebase";
interface HeaderProps {
  handleOption: () => void;
  showOptions: boolean;
}

const Header: React.FC<HeaderProps> = ({ handleOption, showOptions }) => {
  const { userData } = useFirebase();

  return (
    <View className="w-fit h-24 realtive">
      <Text className="text-xl font-bold absolute z-10 top-14 left-3 text-white">
        Dashboard
      </Text>
      <TouchableOpacity
        onPress={handleOption}
        className="absolute flex-row items-center gap-2 top-14 right-3 z-10"
      >
        <Text className="text-lg text-white font-semibold">
          {userData.username}
        </Text>
        {showOptions ? (
          <AntDesign name="closecircle" size={28} color="white" />
        ) : (
          <FontAwesome name="user-circle-o" size={28} color="white" />
        )}
      </TouchableOpacity>
      <Image
        className="h-full"
        source={require("../../assets/images/navbar-bg.png")}
      />
    </View>
  );
};

export default Header;
