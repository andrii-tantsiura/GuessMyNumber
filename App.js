import { StyleSheet, ImageBackground, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartScreen from "./screens/StartScreen";

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={["#3b021f", "#ddb52f"]}>
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        source={require("./assets/images/background.png")}
      >
        <StartScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: { opacity: 0.15 },
});
