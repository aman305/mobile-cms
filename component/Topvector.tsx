import React from "react";
import { View, Image } from "react-native";
type Props = {};

const Topvector = (props: Props) => {
  return (
    <View className="relative h-32">
      <Image
        className="w-full h-full"
        source={require("../assets/images/topVector.png")}
      />
    </View>
  );
};

export default Topvector;
