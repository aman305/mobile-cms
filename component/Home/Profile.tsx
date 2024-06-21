import React from "react";
import { View, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFirebase } from "../../hooks/useFirebase";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type RootStackParamList = {
  PROFILE: undefined;
};

type ProfileProps = {
  handleLogout: () => void;
  navigation: any;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

const Profile: React.FC<ProfileProps> = ({
  handleLogout,
  navigation,
  setShowOptions,
}) => {
  const firebase = useFirebase();

  return (
    <View className="absolute z-10 top-[85px] left-[268px] rounded-2xl bg-white  px-4 py-3 ">
      <View className="flex-row items-center gap-1 pb-1 border-b-[1px] border-gray-300">
        <MaterialCommunityIcons
          name="face-man-profile"
          size={24}
          color="black"
        />
        <Text
          onPress={() => {
            setShowOptions(false);
            navigation.navigate("PROFILE");
          }}
          className="text-lg tracking-wider"
        >
          Profile
        </Text>
      </View>
      <View className="flex-row gap-2 pt-1  items-center">
        <SimpleLineIcons name="logout" size={18} color="black" />
        <Text className="text-lg tracking-wider" onPress={handleLogout}>
          Logout
        </Text>
      </View>
    </View>
  );
};

export default Profile;
