import React from "react";
import { TouchableOpacity, View, Text, Button, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ArrowButton = ({ onPress, title }) => {
  return (
    <View className="h-32 w-full  flex-row my-4  justify-end ">
      <View className="gap-4 flex-row items-center">
        <Text className="text-2xl font-semibold" style={{ color: "#262626" }}>
          {title}
        </Text>
        <TouchableOpacity className="h-14" onPress={onPress}>
          <LinearGradient
            className="rounded-full h-full px-5 flex justify-center "
            colors={["#F97794", "#623AA2"]}
          >
            <AntDesign name="arrowright" size={48} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArrowButton;
