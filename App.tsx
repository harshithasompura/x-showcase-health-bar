import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CustomSlider from "./components/Slider";
export default function App() {
  return (
    <View style={styles.container}>
      <CustomSlider />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
