import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import CustomSlider from "./components/Slider";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose how you're feeling right now</Text>
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
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  heading: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
    width: 300,
  },
  button: {
    backgroundColor: "#FAFAF9",
    paddingHorizontal: 160,
    paddingVertical: 20,
    borderRadius: 36,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
