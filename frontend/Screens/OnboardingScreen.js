import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Onboarding from "react-native-onboarding-swiper";

import Login from "./user/Login";
const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#80a8f2" : "#808080";
  return (
    <View
      style={{
        height: 5,
        width: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginRight: 12,
    }}
    {...props}>
    <Text style={{ color: "#80a8f2" }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = () => {
  const [completed, setCompleted] = useState(false);

  const handleSkip = () => {
    setCompleted(true);
  };

  const handleDone = () => {
    setCompleted(true);
  };

  return completed ? (
    <Login />
  ) : (
    <Onboarding
      onSkip={handleSkip}
      onDone={handleDone}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      bottomBarColor="#ffffff"
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboarding_1.png")}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Aquatic Dragon",
          subtitle: "Your One Tap Water Refilling Station",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboarding_2.png")}
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                backgroundColor: "#4a94d9",
              }}
            />
          ),
          title: "Less Hassle, More Hydrated",
          subtitle: "We Deliver Clean & Safe Water Right to your Door",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
