import React from "react";
import { useFirebase } from "../hooks/useFirebase";
import { StyleSheet, Text, View } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
const Loading = () => {
  return (
    <View>
      {/* <Text>Loaidng</Text> */}
      <AnimatedLoader
        source={require("../assets/animation/loader.json")}
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
      >
        {/* <Text>Doing something...</Text> */}
      </AnimatedLoader>
    </View>
  );
};

export default Loading;
const styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 300,
  },
});
