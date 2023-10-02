import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { RootStackParamList } from "../App";

export type Props = NativeStackScreenProps<RootStackParamList, "Create">;

export default function CreateArt() {
  const [text, setText] = useState("");
  const [image, setImage] = useState();

  async function createImageFromDALLE() {
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
        setImage(responseData.data[0].url);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TextInput
        style={styles.input}
        placeholder="Enter prompt here"
        onChangeText={(prompt) => setText(prompt)}
        value={text}
        multiline={true}
        textAlignVertical="top"
      />
      <Button title="Send Prompt" onPress={createImageFromDALLE} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  input: {
    width: 300,
    height: 100,
    backgroundColor: "lightgray",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  image: {
    width: 300,
    height: 200,
  },
});
