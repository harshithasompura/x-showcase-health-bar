import React, { useState, useMemo } from "react";

import Slider from "@react-native-community/slider";
import { View, Text, Image, StyleSheet } from "react-native";

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

  const images = [
    require("../assets/image1.png"),
    require("../assets/image2.png"),
    require("../assets/image3.png"),
    require("../assets/image4.png"),
    require("../assets/image5.png"),
    require("../assets/image6.png"),
    require("../assets/image7.png"),
  ];

  const calculateLabelIndex = useMemo(() => {
    return (value: number) => {
      const labelCount = textLabels.length;
      const index = Math.round((labelCount - 1) * value);
      return {
        labelIndex: Math.max(0, Math.min(index, labelCount - 1)),
        imageIndex: Math.max(0, Math.min(index, images.length - 1)),
      };
    };
  }, [textLabels, images]);

  const [value, setValue] = useState(0.5);

  const { labelIndex, imageIndex } = calculateLabelIndex(value);
  const label = textLabels[labelIndex];
  const image = images[imageIndex];
  return (
    <View>
      <Image source={image} style={styles.image} />
      <Text
        style={{
          textAlign: "center",
          color: "lavender",
          padding: 20,
          fontSize: 30,
          fontWeight: "700",
          textTransform: "capitalize",
          marginTop: 24,
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
          marginTop: 24,
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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    margin: 8,
    padding: 8,
    objectFit: "contain",
  },
});

export default CustomSlider;
