import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function SnapCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      title: "Item 1",
      text: "This is space for text",
    },
    {
      title: "Item 2",
      text: "This is space for text",
    },
    {
      title: "Item 3",
      text: "This is space for text",
    },
    {
      title: "Item 4",
      text: "This is space for text",
    },
  ];

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / 350); // Assuming item width is 350
    setActiveIndex(currentIndex);
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
            style={{
              width: 350, // Assuming item width is 350
              backgroundColor: "lightblue",
              borderRadius: 5,
              height: 250,
              padding: 20,
              marginLeft: 25,
              marginRight: 25,
            }}
          >
            <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <Text>Active Index: {activeIndex}</Text>
    </View>
  );
}
