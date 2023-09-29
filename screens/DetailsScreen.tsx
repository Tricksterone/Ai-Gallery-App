import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ScrollView, Text } from "react-native";
import { RootStackParamList } from "../App";

export type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  const { image } = route.params;
  return (
    <ScrollView>
      <Image source={image.image} style={{ width: 400, height: 300 }} />
      <Text>{image.title}</Text>
      <Text>{image.text}</Text>
    </ScrollView>
  );
}
