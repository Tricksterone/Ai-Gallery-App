import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { RootStackParamList } from "../App";

const Authroization = "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 ";
export type Props = NativeStackScreenProps<RootStackParamList, "Create">;

export default function CreateArt() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter prompt here"
        onChangeText={(prompt) => setText(prompt)}
        value={text}
        multiline={true}
        textAlignVertical="top"
      />
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
});
