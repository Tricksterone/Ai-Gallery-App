import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import ShareButton from "../components/ShareButton";

export type Props = NativeStackScreenProps<RootStackParamList, "Create">;

export default function CreateArt() {
  const [createdImageURL, setCreatedImageURL] = useState<string>("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false); //set to true while testing
  const [image, setImage] = useState("");

  async function createImageFromDALLE() {
    setIsLoading(true); // Set isLoading to true when the request starts

    const OPENAI_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

    const data = {
      prompt: text,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    };

    fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setIsLoading(false); // Set isLoading to false when the request is completed
        setImage(responseData.data[0].url);
        setCreatedImageURL(responseData.data[0].url);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set isLoading to false on error as well
      });
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#331a4f", "#923cb5"]}
        locations={[0, 1]}
        style={styles.gradient}
      >
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {/* Render the ShareButton component */}
        {createdImageURL && <ShareButton imageURL={createdImageURL} />}
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"white"}
            placeholder="Enter prompt here"
            onChangeText={(prompt) => setText(prompt)}
            value={text}
            multiline={true}
            textAlignVertical="top"
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={createImageFromDALLE}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Creating Art..." : "Send Prompt"}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  input: {
    marginBottom: 5,
    width: 300,
    height: 90,
    backgroundColor: "rgb(105, 41, 134)",
    color: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    width: 400,
    height: 300,
  },
  buttonContainer: {
    marginBottom: 5,
    backgroundColor: "rgb(105, 41, 134)",
    padding: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
