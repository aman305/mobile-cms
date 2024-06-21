import Toast from "react-native-root-toast";

export default function showToast(message: string) {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
}
