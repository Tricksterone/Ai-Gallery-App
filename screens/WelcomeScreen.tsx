import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../App";

export type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../images/Cheshire.png")}
        style={styles.imageBackground}
        resizeMode="cover"
        resizeMethod="resize"
      >
        <View style={styles.contentcontainer}>
          <Text style={styles.description}>
            WELCOME TO THE GALLERY FOR AI ART
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.description}>
            Here you can view art created from AI or create your own!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push("Home")}
          >
            <Text style={styles.buttonText}>Get Started!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  contentcontainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  description: {
    fontSize: 25,
    padding: 15,
    color: "rgba(255, 60, 147, 1)",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "rgb(105, 5, 134)",
    width: 150,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
