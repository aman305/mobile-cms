import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

type InputProps = {
  handleUserName: (value: string) => void;
  username: string | null;
  handleEmailChange: (value: string) => void;
  email: string | null;
  handlePasswordChange: (value: string) => void;
  password: string | null;
};

const Input: React.FC<InputProps> = ({
  handleUserName,
  username,
  handleEmailChange,
  email,
  handlePasswordChange,
  password,
}) => {
  return (
    <View className="w-full gap-8">
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
          onChangeText={handleUserName}
          autoCapitalize="none"
          value={username ?? ""}
        />
      </View>

      <View
        className="flex-row px-3 items-center rounded-full shadow-md shadow-gray-400"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <View>
          <Ionicons name="mail" size={24} color="#9A9A9A" />
        </View>
        <View className=" px-2 w-full">
          <TextInput
            className="py-5 mr-6 rounded-3xl"
            style={{
              backgroundColor: "#FFFFFF",
              fontSize: 16,
            }}
            placeholder="Enter your email"
            placeholderTextColor="#9A9A9A"
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email ?? ""}
          />
        </View>
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
            className="py-5 mr-6 rounded-3xl"
            style={{
              backgroundColor: "#FFFFFF",
              fontSize: 16,
            }}
            placeholderTextColor="#9A9A9A"
            placeholder="Enter password"
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
            value={password ?? ""}
          />
        </View>
      </View>
    </View>
  );
};

export default Input;
