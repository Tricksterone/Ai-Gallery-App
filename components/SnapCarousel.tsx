import React, { useState } from "react";
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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

type Props = {
  carouselData: CarouselData;
  onPress: (image: CarouselImage) => void;
};

export default function SnapCarousel({ carouselData, onPress }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width: screenWidth } = Dimensions.get("screen");

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / 400);
    setActiveIndex(currentIndex);
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {carouselData.images.map((_, index) => (
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
      <Text style={styles.carouselTitle}>{carouselData.title}</Text>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      >
        {carouselData.images.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.carouselItem,
              {
                width: screenWidth,
              },
            ]}
            onPress={() => onPress(item)}
          >
            <Text style={{ fontSize: 30, color: "white", marginBottom: 4 }}>
              {item.title}
            </Text>
            <Image source={item.image} style={{ width: 400, height: 300 }} />
          </TouchableOpacity>
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
    marginLeft: 10,
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
