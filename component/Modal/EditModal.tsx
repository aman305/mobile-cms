import { documentId } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, Modal, TextInput, Button, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useFirebase } from "../../hooks/useFirebase";
import showToast from "../Toast";

const EditModal = ({ setShowModal, data, dataList, setData }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(data.status);
  const [inputError, setInputError] = useState(false);
  console.log(data.id, "data.id in edit modal");

  const [items, setItems] = useState([
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "In progress",
      value: "in progress",
    },
    {
      label: "Not started",
      value: "not started",
    },
  ]);
  const [inputData, setInputData] = useState({
    id: data.id,
    documentId: data.documentId,
    title: data.title,
    description: data.description,
    status: data.status,
  });

  const currDate = new Date();
  const formateDate = currDate.toISOString();
  const editedData = {
    id: inputData.id,
    documentId: inputData.documentId,
    title: inputData.title,
    description: inputData.description,
    status: inputData.status,
    "created on": data["created on"],
    "last edited": formateDate,
  };
  const firebase = useFirebase();
  const [modalVisible, setModalVisible] = useState(true);

  function handleEditData() {
    const docRef = firebase.updateData(data.id, editedData);
    if (docRef) {
      showToast("Data edited successfully!");
    } else {
      showToast("Something went wrong !!");
    }
  }

  const handleInputChange = (name, value) => {
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = () => {
    validateInput();
    if (!inputError) {
      handleEditData();
      setModalVisible(false);
      setShowModal(false);
    }
  };

  function handleDropdownValue(value) {
    setInputData((prevData) => ({
      ...prevData,
      status: value,
    }));
  }

  useEffect(() => {
    validateInput();
  }, [inputData]);

  function validateInput() {
    if (
      inputData.description.length === 0 ||
      inputData.documentId.length === 0 ||
      inputData.status.length === 0 ||
      inputData.title.length === 0
    ) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }

  return (
    <View style={styles.container} className="absolute z-10">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        hardwareAccelerated={true}
        className="absolute z-10"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Details</Text>
            <TextInput
              style={[styles.input]}
              placeholder="Document Id"
              editable={false}
              value={inputData.documentId}
              onChangeText={(text) => handleInputChange("documentId", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={inputData.title}
              onChangeText={(text) => handleInputChange("title", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={inputData.description}
              onChangeText={(text) => handleInputChange("description", text)}
            />
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Choose status"
              onChangeValue={handleDropdownValue}
              style={{
                borderColor: "#BEBEBE",
              }}
              containerStyle={{
                borderColor: "#BEBEBE",
              }}
              placeholderStyle={{
                color: "#BEBEBE",
              }}
            />
            {inputError ? (
              <Text className="text-red-400 pt-2 text-">
                Please fill all the details
              </Text>
            ) : null}
            <View style={styles.buttonContainer}>
              <Button title="Submit" onPress={handleSubmit} />
              <Button
                title="Cancel"
                onPress={() => {
                  setModalVisible(false);
                  setShowModal(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    fontSize: 18,
    color: "blue",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default EditModal;
