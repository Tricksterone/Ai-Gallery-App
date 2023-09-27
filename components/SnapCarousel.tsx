import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function SnapCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width: screenWidth } = Dimensions.get("screen");

  const carouselItems = [
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
      image: require("../images/Hatter.png"),
    },
    {
      id: 3,
      title: "Item 3",
      text: "This is space for text",
      image: require("../images/Hatter.png"),
    },
    {
      id: 4,
      title: "Item 4",
      text: "This is space for text",
      image: require("../images/Hatter.png"),
    },
  ];

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / 350); // Assuming item width is 350
    setActiveIndex(currentIndex);
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {carouselItems.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  activeIndex === index ? "darkgray" : "lightgray",
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      >
        {carouselItems.map((item, index) => (
          <View
            key={index}
            style={[
              styles.carouselItem,
              {
                width: screenWidth,
              },
            ]}
          >
            <Text>{item.id}</Text>
            <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <Image source={item.image} style={{ width: 400, height: 300 }} />
            <Text>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      {renderPagination()}
    </View>
  );
}

const styles = StyleSheet.create({
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
