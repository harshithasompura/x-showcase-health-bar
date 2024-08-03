import Slider from "@react-native-community/slider";
import { View } from "react-native";

const CustomSlider = () => {
  return (
    <View
      style={{
        backgroundColor: "#453E3E",
        borderRadius: 30,
        paddingVertical: 6,
        paddingHorizontal: 12,
      }}
    >
      <Slider
        style={{ width: 300, height: 50, opacity: 1 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
      />
    </View>
  );
};

export default CustomSlider;
