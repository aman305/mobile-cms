import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";
import EditModal from "./Modal/EditModal";
import { MaterialIcons } from "@expo/vector-icons";
import { useFirebase } from "../hooks/useFirebase";
import showToast from "./Toast";
const Card = ({ data, setData, dataList, navigaton }) => {
  const [showModal, setShowModal] = useState(false);
  const firebase = useFirebase();

  function handleEditModal(docId: string) {
    setShowModal(true);
  }
  function handleDelete(id: string) {
    firebase.deleteDocument(id);
    const newListData = dataList?.filter((item: any) => item.id !== id);
    setData(newListData);
    showToast(`Document with Id: ${data.documentId}, deleted`);
  }

  function handleCardPress() {
    navigaton.navigate("CARDDETAIL", { data: data });
  }

  return (
    <TouchableOpacity
      onPress={handleCardPress}
      className="border-[1px] bg-white border-gray-300 mx-3 my-4 rounded-2xl p-2"
    >
      {showModal ? (
        <EditModal
          setData={setData}
          dataList={dataList}
          data={data}
          setShowModal={setShowModal}
        />
      ) : null}
      {/* docId */}
      <View className="border-b-[1px] border-gray-300 px-1 py-3 flex-row justify-between">
        <Text className="text-gray-600 font-semibold">{data.documentId}</Text>
        <View className="flex-row gap-4">
          <TouchableOpacity onPress={() => handleDelete(data.id)}>
            <MaterialIcons name="delete" size={24} color="#BEBEBE" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEditModal(data.documentId)}>
            <AntDesign name="edit" size={24} color="#BEBEBE" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row justify-between py-3">
        <View className="w-1/2">
          <Text>{data.title}</Text>
          <Text className="text-xs text-gray-600" numberOfLines={1}>
            {data.description}
          </Text>
        </View>
        <View className="flex justify-center">
          <View
            className="flex  rounded-3xl px-6 py-1"
            style={{ backgroundColor: COLORS.statusBgColor[data.status] }}
          >
            <Text
              className="text-xs font-semibold tracking-widest"
              style={{ color: COLORS.statusTextColor[data.status] }}
            >
              {"• " + data.status}
            </Text>
          </View>
        </View>
      </View>
      <View className="my-2 gap-2">
        <View className="flex-row justify-between">
          <Text className="text-gray-600 font-semibold">Created on</Text>
          <Text className="text-gray-600">
            {data["created on"]?.slice(0, 10)}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600 font-semibold">Last edited</Text>
          <Text className="text-gray-600">
            {data["last edited"]?.slice(0, 10)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
