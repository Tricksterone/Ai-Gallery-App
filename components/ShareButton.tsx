import Constants from "expo-constants";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CarouselImage } from "./SnapCarousel";

type Props = { image: CarouselImage };

export default function ShareButton({ image }: Props) {
  const [state, setState] = useState("");
  const imageURL = "https://i.imgur.com/B8rw1pu.jpeg";
  const fileUri = FileSystem.cacheDirectory + "tmp.jpg";
  console.log(image);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{state}</Text>
      <Text style={styles.paragraph}>{fileUri}</Text>

      <Button
        title="Share"
        onPress={() => {
          const options = {
            mimeType: "image/jpeg",
            dialogTitle: "Share the image",
            UTI: "image/jpeg",
          };

          FileSystem.downloadAsync(imageURL, fileUri)
            .then(({ uri }) => {
              setState(`Downloaded image to ${uri}`);
            })
            .catch((err) => {
              setState("Error downloading image");
              console.log(err);
            });

          // Sharing only allows one to share a file.
          Sharing.shareAsync(fileUri, options)
            .then((data) => {
              setState("Shared");
            })
            .catch((err) => {
              setState("Error sharing image");
              console.log(JSON.stringify(err));
            });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
