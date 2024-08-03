import Slider from "@react-native-community/slider";
import { useState } from "react";
import { View, Text } from "react-native";

const CustomSlider = () => {
  const textLabels = [
    "very unpleasant",
    "slightly unpleasant",
    "unpleasant",
    "neutral",
    "pleasant",
    "slightly pleasant",
    "very pleasant",
  ];

  const calculateLabelIndex = (value: number) => {
    const labelCount = textLabels.length;
    const index = Math.round((labelCount - 1) * value);
    return Math.max(0, Math.min(index, labelCount - 1));
  };

  const [value, setValue] = useState(0.5);

  const labelIndex = calculateLabelIndex(value);
  const label = textLabels[labelIndex];
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          color: "lavender",
          padding: 20,
          fontSize: 30,
          fontWeight: "700",
          textTransform: "capitalize",
        }}
      >
        {label}
      </Text>
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
          step={0.1}
          value={value}
          onValueChange={(val) => setValue(val)}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
        />
      </View>
    </View>
  );
};

export default CustomSlider;
