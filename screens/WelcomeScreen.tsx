import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const handleButtonPress = () => {
    console.log("Button pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../images/Hatter.png")}>
        <View style={styles.contentcontainer}>
          <Text style={styles.title}>WELCOME TO THE GALLERY FOR AI ART </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.title}>
            Here you can view art created from AI or create your own!
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
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
  contentcontainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
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
    backgroundColor: "rgba(119, 52, 219, 0.9)",
    width: 150,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
