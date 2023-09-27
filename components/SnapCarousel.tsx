import * as React from "react";
import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";

interface State {
  activeIndex: number;
  carouselItems: {
    title: string;
    text: string;
  }[];
}

export default class SnapCarousel extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
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
      ],
    };
  }
  _renderItem({ item }: { item: { title: string; text: string } }) {
    return (
      <View
        style={{
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
    );
  }
  render() {
    return (
      <Carousel
        layout={"default"}
        data={this.state.carouselItems}
        sliderWidth={400}
        itemWidth={350}
        renderItem={this._renderItem}
      />
    );
  }
}

{
  /* {images.map((item, index) => (
    <Image
      key={index}
      source={{ uri: item }}
      style={{ width: 200, height: 200 }}
    />
  ))} */
}
