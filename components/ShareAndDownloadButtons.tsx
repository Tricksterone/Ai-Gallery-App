import Constants from "expo-constants";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ShareAndDownloadButtons({
  imageURL,
}: {
  imageURL: string;
}) {
  const [state, setState] = useState("");
  const fileUri = FileSystem.cacheDirectory + "tmp.jpg";

  // Function to request permissions
  const requestPermissions = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied!");
      // Handle the case where the user denies permission (e.g., show an error message).
    }
  };

  // Function to save the image to the device's image library
  const saveToImageLibrary = async () => {
    try {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("AI_Art", asset, false);
      setState("Image saved to gallery");
    } catch (error) {
      setState("Error saving image to gallery");
      console.error(error);
    }
  };

  const handleDownload = async () => {
    try {
      FileSystem.downloadAsync(imageURL, fileUri)
        .then(({ uri }) => {
          setState(`Downloaded image to ${uri}`);
          saveToImageLibrary(); // Calling the function to save the image
        })
        .catch((err) => {
          setState("Error downloading image");
          console.log(err);
        });
    } catch (err) {
      setState("Error");
      console.error(err);
    }
  };

  const handleShare = async () => {
    try {
      const options = {
        mimeType: "image/jpeg",
        dialogTitle: "Share the image",
        UTI: "image/jpeg",
      };

      // Sharing only allows one to share a file.
      Sharing.shareAsync(fileUri, options)
        .then((data) => {
          setState("Shared");
        })
        .catch((err) => {
          setState("Error sharing image");
          console.log(JSON.stringify(err));
        });
    } catch (err) {
      setState("Error");
      console.error(err);
    }
  };

  useEffect(() => {
    requestPermissions(); // Request permissions when the component is mounted
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { backgroundColor: "rgb(105, 5, 134)" },
          ]}
          onPress={handleDownload}
        >
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { backgroundColor: "rgb(105, 5, 134)" },
          ]}
          onPress={handleShare}
        >
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.buttonText}>{state}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    color: "#fff",
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
