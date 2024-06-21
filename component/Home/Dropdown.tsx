import React, { useState } from "react";
import { View, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = ({ data, setUpdatedData }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("Filter");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("Sort");

  const [filterItems, setFilterItems] = useState([
    { label: "Default", value: null },
    { label: "competed", value: "completed" },
    { label: "in progress", value: "in progress" },
    { label: "not started", value: "not started" },
  ]);

  const [sortItems, setSortItems] = useState([
    { label: "Default", value: null },
    { label: "Date Created", value: "Date Created" },
    { label: "Last Edited", value: "Last Edited" },
  ]);

  const sortByEdited = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a["last edited"]);
      const dateB = new Date(b["last edited"]);
      return dateA.getTime() - dateB.getTime();
    });
    setUpdatedData(sortedData);
  };

  const sortByCreated = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a["created on"]);
      const dateB = new Date(b["created on"]);
      return dateA.getTime() - dateB.getTime();
    });
    setUpdatedData(sortedData);
  };

  function handleSortDropdown(selectedValue: string) {
    if (!sortValue) return null;
    if (selectedValue === "Date Created") {
      sortByCreated();
    } else if (selectedValue === "Last Edited") {
      sortByEdited();
    }

    setFilterValue(filterValue);
  }

  function handleFilterDropdown(selectedValue: string) {
    if (!filterValue) {
      setUpdatedData(data);
      return;
    }
    const newData = data.filter((item) => item.status === selectedValue);
    setUpdatedData(newData);
  }

  return (
    <View className="w-full h-14 flex-row absolute z-10 top-[190px] justify-evenly">
      <View className="bg-white w-40  flex-row rounded-xl">
        <View className="pt-4 pl-2">
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../../assets/icons/filter.png")}
          />
        </View>
        <View className="pt-1">
          <DropDownPicker
            open={filterOpen}
            value={filterValue}
            items={filterItems}
            setOpen={setFilterOpen}
            setValue={setFilterValue}
            setItems={setFilterItems}
            showTickIcon={true}
            placeholder="Filter"
            dropDownContainerStyle={{
              width: 160,
              left: -36,
              zIndex: 10,
              borderColor: "white",
              top: 40,
              paddingLeft: 10,
            }}
            textStyle={{
              fontSize: 10,
            }}
            containerStyle={{
              borderColor: "#BEBEBE",
              height: 20,
              borderBottomEndRadius: 0,
            }}
            style={{
              borderColor: "white",
              width: 110,
              height: 20,
            }}
            placeholderStyle={{
              color: "#BEBEBE",
            }}
            onChangeValue={handleFilterDropdown}
          />
        </View>
      </View>
      <View className="bg-white w-40  flex-row rounded-xl">
        <View className="pt-4 pl-2">
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../../assets/icons/sort.png")}
          />
        </View>
        <View className="pt-1">
          <DropDownPicker
            open={sortOpen}
            value={sortValue}
            items={sortItems}
            setOpen={setSortOpen}
            setValue={setSortValue}
            setItems={setSortItems}
            showTickIcon={true}
            placeholder="Sort"
            dropDownContainerStyle={{
              width: 160,
              left: -36,
              zIndex: 10,
              borderColor: "white",
              top: 40,
              paddingLeft: 10,
            }}
            textStyle={{
              fontSize: 10,
            }}
            containerStyle={{
              borderColor: "#BEBEBE",
              height: 20,
              borderBottomEndRadius: 0,
            }}
            style={{
              borderColor: "white",
              width: 110,
              height: 20,
            }}
            placeholderStyle={{
              color: "#BEBEBE",
              fontSize: 16,
            }}
            onChangeValue={handleSortDropdown}
          />
        </View>
      </View>
    </View>
  );
};

export default Dropdown;
