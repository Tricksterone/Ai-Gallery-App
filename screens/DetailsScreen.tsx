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
        <Image source={image.image} style={{ width: 400, height: 300 }} />
        <Text>{image.title}</Text>
        <Text>{image.text}</Text>
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
  },
  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
  },
});
