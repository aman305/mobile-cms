import LinearGradient from "expo-linear-gradient";

export const COLORS = {
  shadowColor: () => {
    return (
      <LinearGradient
        colors={["##FFC107", "#FF3D00", "#4CAF50", "#1976D2"]}
      ></LinearGradient>
    );
  },
};
