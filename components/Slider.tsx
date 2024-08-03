import React, { useState, useMemo, useEffect } from "react";
import { View, Text, Image, StyleSheet, Animated, Easing } from "react-native";
import Slider from "@react-native-community/slider";

const IMAGE_SIZE = 200;
const CONTAINER_SIZE = IMAGE_SIZE + 24; 

const createRippleAnimation = (animation: Animated.Value, delay: number) =>
  Animated.loop(
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 3000,
        delay,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ])
  );

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

  const outlineImages = [
    require("../assets/outline1.png"),
    require("../assets/outline2.png"),
    require("../assets/outline3.png"),
    require("../assets/outline4.png"),
    require("../assets/outline5.png"),
    require("../assets/outline6.png"),
    require("../assets/outline7.png"),
  ];

  const calculateIndex = useMemo(() => (value: number) => {
    const index = Math.round((textLabels.length - 1) * value);
    return {
      labelIndex: Math.max(0, Math.min(index, textLabels.length - 1)),
      imageIndex: Math.max(0, Math.min(index, images.length - 1)),
      outlineIndex: Math.max(0, Math.min(index, outlineImages.length - 1)),
    };
  }, [textLabels.length, images.length, outlineImages.length]);

  const [value, setValue] = useState(0.5);
  const { labelIndex, imageIndex, outlineIndex } = calculateIndex(value);
  const label = textLabels[labelIndex];
  const image = images[imageIndex];
  const outlineImage = outlineImages[outlineIndex];

  const rippleAnimations = [0, 1, 2].map(() => new Animated.Value(0));

  useEffect(() => {
    rippleAnimations.forEach((animation, index) =>
      createRippleAnimation(animation, index * 1000).start()
    );
  }, [rippleAnimations]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.rippleContainer}>
          {rippleAnimations.map((animation, index) => (
            <Animated.Image
              key={index}
              source={outlineImage}
              style={[
                styles.outlineImage,
                {
                  transform: [{
                    scale: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 4],
                    }),
                  }],
                  opacity: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.3, 0],
                  }),
                },
              ]}
            />
          ))}
        </View>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          step={0.1}
          value={value}
          onValueChange={setValue}
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
  imageContainer: {
    position: "relative",
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  rippleContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  outlineImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    position: "absolute",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    zIndex: 1,
  },
  label: {
    textAlign: "center",
    color: "lavender",
    padding: 20,
    fontSize: 30,
    fontWeight: "700",
    textTransform: "capitalize",
    marginTop: 24,
  },
  sliderContainer: {
    backgroundColor: "#453E3E",
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 24,
  },
  slider: {
    width: 300,
    height: 50,
  },
});

export default CustomSlider;
