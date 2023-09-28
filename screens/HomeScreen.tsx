import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView } from "react-native";
import { RootStackParamList } from "../App";
import { fantasyImages, horrorImages, sciFiImages } from "../carouselData";
import SnapCarousel, { CarouselData } from "../components/SnapCarousel";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView>
      {/* <Button
        title="Go to Welcome Page"
        onPress={() => navigation.navigate("Welcome")}
      /> */}
      {carouselDataList.map((carouselData) => (
        <SnapCarousel title={carouselData.title} images={carouselData.images} />
      ))}
    </ScrollView>
  );
}

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
