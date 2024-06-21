import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useFirebase } from "../hooks/useFirebase";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DataType } from "../modal/DataType";
import Card from "../component/Card";
import Loading from "../component/Loading";
import Profile from "../component/Home/Profile";
import Header from "../component/Home/Header";
import Search from "../component/Home/Search";
import Dropdown from "../component/Home/Dropdown";
import AddModal from "../component/Modal/AddModal";

type RootStackParamList = {
  Homescreen: undefined;
  SIGNUP: undefined;
  PROFILE: undefined;
};

type HomescreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Homescreen"
>;

type Props = {
  navigation: HomescreenNavigationProp;
};

const Homescreen: React.FC<Props> = ({ navigation }) => {
  const firebase = useFirebase();
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [data, setData] = useState<DataType[]>(firebase?.data || []);
  const [updatedData, setUpdatedData] = useState<DataType[]>(data);
  const [showModal, setShowModal] = useState<any>(false);

  function handleSearch(value: string) {
    setSearchText(value);
    const filteredData = data.filter((item) =>
      item.documentId.toLowerCase().includes(value.toLowerCase())
    );
    setUpdatedData(filteredData);
  }

  function handleOption() {
    setShowOptions(!showOptions);
  }

  function handleLogout() {
    try {
      const logout = firebase.onLogout();
      setShowOptions(false);
      if (logout) {
        navigation.navigate("SIGNUP");
      } else {
        console.log("logout failed");
      }
    } catch (error) {
      console.log("error logout", error.message);
    }
  }

  function handleAddItem() {
    setShowModal(true);
  }

  useEffect(() => {
    const data = firebase?.data;
    setUpdatedData(data);
    setData(data);
  }, [firebase?.data]);

  if (firebase.loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1">
      {/* header */}
      <Header showOptions={showOptions} handleOption={handleOption} />
      {showOptions ? (
        <Profile
          setShowOptions={setShowOptions}
          handleLogout={handleLogout}
          navigation={navigation}
        />
      ) : null}

      {/* search */}
      <Search searchText={searchText} handleSearch={handleSearch} />

      {/* dropdown */}
      <Dropdown data={data} setUpdatedData={setUpdatedData} />

      {/* cards */}
      <View className="relative border-t-[1px]  h-[600px] border-gray-300">
        {!firebase.loading ? (
          <ScrollView className="">
            {updatedData.map((item: any, index: any) => (
              <Card
                navigaton={navigation}
                setData={setData}
                dataList={data}
                key={index}
                data={item}
              />
            ))}
            {/*           */}
          </ScrollView>
        ) : null}
        <View className="absolute z-10 top-[500px] left-[300px] ">
          <TouchableOpacity className="rounded-3xl" onPress={handleAddItem}>
            <Image
              source={require("../assets/icons/add.png")}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </TouchableOpacity>
        </View>
        {showModal ? (
          <AddModal
            updatedData={updatedData}
            setUpdatedData={setUpdatedData}
            setShowModal={setShowModal}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Homescreen;
