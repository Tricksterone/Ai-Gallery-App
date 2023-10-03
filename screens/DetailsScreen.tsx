import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../App";

export type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  const { image } = route.params;

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#331a4f", "#923cb5"]}
        locations={[0, 1]}
        style={styles.gradient}
      >
        <Image
          source={image.image}
          style={{ width: 400, height: 300, marginTop: 10, borderRadius: 5 }}
        />
        <Text style={styles.text}>{image.title}</Text>
        <Text style={styles.promptText}>{image.text}</Text>
      </LinearGradient>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
  },
  promptText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    lineHeight: 24,
    paddingHorizontal: 16,
  },
});
