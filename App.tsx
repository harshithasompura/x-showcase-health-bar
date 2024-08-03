import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import CustomSlider from "./components/Slider";
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <CustomSlider />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Very Unpleasant
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Very Pleasant
          </Text>
        </View>
      </View>

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
