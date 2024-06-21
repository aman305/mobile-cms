import React from "react";
import { Text } from "react-native";

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return (
    <Text className="text-3xl font-semibold my-8" style={{ color: "#262626" }}>
      {text}
    </Text>
  );
};

export default Title;
