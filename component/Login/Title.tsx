import React from "react";
import { View, Text } from "react-native";

type Props = {};

const Title: React.FC<Props> = () => {
  return (
    <View>
      <View className="py-4">
        <Text
          className="text-5xl font-bold tracking-wider"
          style={{ color: "#262626" }}
        >
          Welcome
        </Text>
      </View>
      <View className="py-4 pb-8">
        <Text className="text-xl tracking-wider">Sign in to your account</Text>
      </View>
    </View>
  );
};

export default Title;
