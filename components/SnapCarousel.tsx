import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export type CarouselData = {
  title: string;
  images: CarouselImage[];
};

export type CarouselImage = {
  id: number;
  title: string;
  text: string;
  image: any;
};

type Props = CarouselData;

export default function SnapCarousel({ title, images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width: screenWidth } = Dimensions.get("screen");

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / 400);
    setActiveIndex(currentIndex);
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: activeIndex === index ? "white" : "lightgray",
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.carouselTitle}>{title}</Text>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((item, index) => (
          <View
            key={index}
            style={[
              styles.carouselItem,
              {
                width: screenWidth,
              },
            ]}
          >
            <Text style={{ fontSize: 30, color: "white" }}>{item.title}</Text>
            <Image source={item.image} style={{ width: 400, height: 300 }} />
          </View>
        ))}
      </ScrollView>
      {renderPagination()}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom: 2,
  },
  carouselTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  carouselItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
