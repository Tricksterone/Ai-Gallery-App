import React, { FunctionComponent } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";

const images: string[] = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
];

const { width } = Dimensions.get("screen");

const CustomPageControl: FunctionComponent = () => {
  console.log(images);
  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={style.imageContainer}>
              <Image style={style.image} source={{ uri: item }} />
            </View>
          )}
        />
        {/* {images.map((item, index) => (
          <Image
            key={index}
            source={{ uri: item }}
            style={{ width: 200, height: 200 }}
          />
        ))} */}
      </View>
      <View style={style.bottomContainer}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 3,
  },
  topContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width,
  },
  image: {
    width,
    height: 300,
    borderRadius: 40,
  },
});
export default CustomPageControl;
