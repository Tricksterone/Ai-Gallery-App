import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import SnapCarousel from "../components/SnapCarousel";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View>
      <Button
        title="Go to Welcome Page"
        onPress={() => navigation.navigate("Welcome")}
      />
      <Text>Welcome to the HomeScreen!</Text>
      <SnapCarousel />
    </View>
  );
}
{
  /* <MaterialIcons name="home" size={20} color="lightblue" /> */
}
