import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../App";
import { fantasyImages, horrorImages, sciFiImages } from "../carouselData";
import SnapCarousel, {
  CarouselData,
  CarouselImage,
} from "../components/SnapCarousel";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const handleImagePress = (image: CarouselImage) => {
    navigation.push("Details", { image });
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#331a4f", "#923cb5"]}
        locations={[0, 1]}
        style={styles.gradient}
      >
        {carouselDataList.map((carouselData) => (
          <SnapCarousel
            key={carouselData.title}
            carouselData={carouselData}
            onPress={handleImagePress}
          />
        ))}
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { backgroundColor: "rgb(105, 5, 134)" },
          ]}
          onPress={() => {
            navigation.navigate("Create"); // Navigate to the "Create" screen
          }}
        >
          <Text style={styles.buttonText}>Create Art</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});

const carouselDataList: CarouselData[] = [
  {
    title: "Fantasy",
    images: fantasyImages,
  },
  {
    title: "Horror",
    images: horrorImages,
  },
  {
    title: "Sci-Fi",
    images: sciFiImages,
  },
];
