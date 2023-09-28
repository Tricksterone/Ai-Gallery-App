import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, ScrollView } from "react-native";
import { RootStackParamList } from "../App";
import SnapCarousel, {
  CarouselData,
  CarouselImage,
} from "../components/SnapCarousel";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView>
      <Button
        title="Go to Welcome Page"
        onPress={() => navigation.navigate("Welcome")}
      />
      {carouselDataList.map((carouselData) => (
        <SnapCarousel title={carouselData.title} images={carouselData.images} />
      ))}
    </ScrollView>
  );
}

const fantasyImages: CarouselImage[] = [
  {
    id: 1,
    title: "Item 1",
    text: "This is space for text",
    image: require("../images/Hatter.png"),
  },
  {
    id: 2,
    title: "Item 2",
    text: "This is space for text",
    image: require("../images/Hatter-tea-party.png"),
  },
  {
    id: 3,
    title: "Item 3",
    text: "This is space for text",
    image: require("../images/Cheshire.png"),
  },
  {
    id: 4,
    title: "Item 4",
    text: "This is space for text",
    image: require("../images/Alice.png"),
  },
];

const horrorImages: CarouselImage[] = [
  {
    id: 5,
    title: "Item 5",
    text: "This is space for text",
    image: require("../images/Diffusion.png"),
  },
  {
    id: 6,
    title: "Item 6",
    text: "This is space for text",
    image: require("../images/White-hair-faired-lady.png"),
  },
  {
    id: 7,
    title: "Item 7",
    text: "This is space for text",
    image: require("../images/Lady-on-a-throne.png"),
  },
  {
    id: 8,
    title: "Item 8",
    text: "This is space for text",
    image: require("../images/Diabolos.png"),
  },
];

const sciFiImages: CarouselImage[] = [
  {
    id: 9,
    title: "Item 9",
    text: "This is space for text",
    image: require("../images/Daemon.png"),
  },
  {
    id: 10,
    title: "Item 10",
    text: "This is space for text",
    image: require("../images/Woman-with-veins-purple-shaded-eyes.png"),
  },
  {
    id: 11,
    title: "Item 11",
    text: "This is space for text",
    image: require("../images/Bat-winged-woman.png"),
  },
];

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
