import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useFirebase } from "../hooks/useFirebase";
interface ProfileDetailProps {
  navigation: any;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ navigation }) => {
  const { user, userData } = useFirebase();
  return (
    <View className="flex-1 relative">
      <Image
        className="h-24"
        source={require("../assets/images/navbar-bg.png")}
      />
      <View className="absolute z-10 top-12 left-3">
        <TouchableOpacity onPress={() => navigation.navigate("HOMESCREEN")}>
          <Image
            className=" h-10 w-10 opacity-80"
            source={require("../assets/icons/back-circle.png")}
          />
        </TouchableOpacity>
        <View className="my-4">
          <Text className="text-3xl font-semibold">Profile Page</Text>
          <View className="">
            <Text className="text-lg">Email : {user.email}</Text>
            <Text className="text-lg">Username : {userData.username}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetail;
