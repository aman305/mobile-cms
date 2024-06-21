import React from "react";
import { TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type InputsProps = {
  email: string;
  handleEmailChange: (value: string) => void;
  password: string;
  handlePasswordChange: (value: string) => void;
};

const Inputs: React.FC<InputsProps> = ({
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
}) => {
  return (
    <View className="gap-8 w-full">
      <View
        className="flex-row px-4 items-center rounded-full shadow-md shadow-gray-400"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <FontAwesome name="user" size={24} color="#9A9A9A" />
        <TextInput
          className="px-2 py-5 mr-3 rounded-3xl"
          style={{
            backgroundColor: "#FFFFFF",
            fontSize: 16,
          }}
          placeholderTextColor="#9A9A9A"
          placeholder="Enter username"
          onChangeText={handleEmailChange}
          autoCapitalize="none"
          value={email}
        />
      </View>
      <View
        className="flex-row px-4 items-center rounded-full shadow-md shadow-gray-400"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <View>
          <FontAwesome name="lock" size={24} color="#9A9A9A" />
        </View>
        <View className=" px-2 w-full">
          <TextInput
            className="py-5 mr-2 rounded-3xl"
            style={{
              backgroundColor: "#FFFFFF",
              fontSize: 16,
            }}
            placeholderTextColor="#9A9A9A"
            placeholder="Enter password"
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
            value={password}
          />
        </View>
      </View>
    </View>
  );
};

export default Inputs;
