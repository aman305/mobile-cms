import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
interface CardDetailProps {
  navigation: any;
  route: any;
}

const CardDetail: React.FC<CardDetailProps> = ({ navigation, route }) => {
  const { data } = route.params;
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
          <Text className="text-2xl font-bold mb-4">Detail Page</Text>
          <Text className="text-lg">
            Document Id :{" "}
            <Text className="font-semibold">{data.documentId}</Text>
          </Text>
          <Text className="text-lg">
            Title :<Text className="font-semibold">{data.title}</Text>
          </Text>
          <Text className="text-lg">
            Description :{" "}
            <Text className="font-semibold">{data.description}</Text>
          </Text>
          <Text className="text-lg">
            Created on :
            <Text className="font-semibold">
              {data["created on"].slice(0, 10)}
            </Text>
          </Text>
          <Text className="text-lg">
            Last Edited :
            <Text className="font-semibold">
              {data["last edited"].slice(0, 10)}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardDetail;
