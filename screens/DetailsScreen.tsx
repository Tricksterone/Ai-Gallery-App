import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text } from "react-native";
import { RootStackParamList } from "../App";

export type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  return (
    <ScrollView>
      {/* <Image source={} style={{ width: 400, height: 300 }} /> */}
      <Text>random text att detail screen</Text>
    </ScrollView>
  );
}
