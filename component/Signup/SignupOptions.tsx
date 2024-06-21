import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

type Props = {};

const SignupOptions: React.FC<Props> = () => {
  return (
    <View>
      <Text>Or create account using social media</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.shadow, { shadowColor: "#FF3D00" }]}>
          <Image
            source={require("../../assets/icons/google-circle.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.shadow, { shadowColor: "#3F51B5" }]}>
          <Image
            source={require("../../assets/icons/facebook-circle.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.shadow, { shadowColor: "#03A9F4" }]}>
          <Image
            source={require("../../assets/icons/twitter-circled.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  shadow: {
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.75,
    shadowRadius: 20,
  },
  icon: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
});

export default SignupOptions;
