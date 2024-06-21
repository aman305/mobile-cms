import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

type SearchProps = {
  searchText: string;
  handleSearch: (text: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchText, handleSearch }) => {
  return (
    <View className="pb-14">
      <View className="bg-gray-200 my-6 mx-3 rounded-2xl flex-row items-center px-3 py-2">
        <Feather name="search" size={24} color="gray" />
        <TextInput
          className="p-2 text-[16px]"
          value={searchText}
          placeholder="Search"
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

export default Search;
