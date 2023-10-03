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

export type Props = NativeStackScreenProps<RootStackParamList, "Create">;

export default function CreateArt() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false); //set to true while testing
  const [image, setImage] = useState(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFhUVFRUVFRUVFRUVFRUVFRUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFysdHR0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tNy0tLS0tLS0tLS0tLSstLS0tLS0rLS0tLS0tK//AABEIAKgBKwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADsQAAEDAgQDBgUDAgQHAAAAAAEAAhEDIQQFEjFBUWEGE3GBkfAiMqGx0RTB4VJyQkNi8RUjM4KSssL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAQEAAgIDAQEBAAAAAAAAAQIRAzESIQRBYVEiE//aAAwDAQACEQMRAD8A9ChNCnCeFjxoFpTFqNpS0o4YBYolisaU2lTwKxYommrJamLVNhqvdqTaSPoRGsU8UWHpK7oUaDFZLVWcjqjWYufzGnddNiBZYGPbdKwdYzqSE6mr7moTmqQjl+B7x4bG/wBOqBmGBdSeWOG31HNdd2fw4p0w+Pift0areb5aK7P9YHwn9j0Ws8Xc/wBT37ebVKaEaa0MRRLSQRBFiFWc1YqCYxT7tTYEUBIKr6SruprSc1AexHRxQLFJrVYdTSDE+lwINUw1S0JAIHCDU+hSCmAg+L+Ui66yjsuXyxl11FDZa4TYmmIUk8KyCLUxYjaUxajgA0JtCPpS0qeBMBPCdOrBoShPCeEBGE0KSUpBAtTaURKEqEA1TY1OAiMap4Y9FqMQo0QiuCuQKWJC5/G7roMWuexhup0IqOChokgcyB6ojkfLKWqq3pf0U86bdc0hzWjYNC1KAsq1OmCSVZYV05KuS7YYLS8VALOEHxH8LmHBej5/hu8ouHGJHiLrzx4XP5c8vTyE0IrQogKwGRv6fnkslBkIRarJQnBTQAWpBiIQptCQANNQLFcLFHu0unxWbTVqlRRKVJXaFFP5HIJl9FbtMWVHC0oV9q28V+kbiSkFBPK1QlKSjKUoCcJoUZT6kAQBKE6SAZJydDrFKnEHPURUVSrWUaVWSolOxptKkEGmUYKySaEWmEMI1NILVIKT01NKoVpCUMYVzuKd8S3sc6y5zEOuo0cQcVpdnGTUPRv3WU4rqezuE0U9Z3dfy4JZn2FinUuRffkrLWpNaDsid0QuiQqhWEtK8+zfC93UI4G4816E+YWbmeADmyQCRtP2PRTvHygl44WNP93/AK/z9vHZ6av43J3sl3zcTz8VSptPL1suXWbPa5epQhOCPpKE9RYYSmxRKnTUnEwE4akAptClQtFivUGqrSV2ikpcohHCDSRgujw+mWzpJJLZmSSSSASUJJIA6dRlOgEhYjZGCq4pynVOMrEGClhDdRrCZRME1Zym1KSMEKmEQLQhGo9JAarFJMLTE1QqTEnU5WkJjZgbLBNJziYC66pgdW6Pgsta0zCPh0uucwWQPfBdYLqP08NDRwVuFBzlUzIXQWUQEYBDNUJd4q4OncxV6rFN9eFFtSbgKuDrNxtYNsQsOpk4f8TTpldAcKXuJdEDgpugCw8AlcS+y647F5a+nuJHNUXBdq+qCNJEygV8opEG0eC59eD/ABpNuMIU2roqvZwaSWukqpQyF+9RzWjqbrG+LX+Kmoz2N9E63G5fQb87y48ALDwCeriaNMTTotP9xk/VOfj6v8P5Mmkr9FYuYdpao+Tu2wYjQFTwfaxwe1tVjSCd2jTHWyV8H9V83ZUkYIdIyJCIn45xG70kkklqgkkkkAkkkkAUFOhypSgJgqtXCNKHUU6hys6pTRsNThF7qUenRKWci0mojQiMw55K7h8GtJml1UZSJV2hh1bZhwEUNVzMLobKSlpU0ziqT1EBTUGlMHIAiBiXQEYFU8bMFOBxmb9qKtPFihTpioCzUWk6S2N3ar2iLQtjJ88ZXB02e352OjUOtrEdQuE7R1H4bHNrloc2ozuxqkDUDMEjnC5/I8ViqOM/UvJjWSRJjunE6x6GY5gLfPj7nrLXl5rj2dxJfHn5Kxia0CB5J2079Im3Xa6Dj3aQXctlm0M7EBrY3J4KpjcUWkNAlxEnpPsoWUtc9xqP8h797o9VrdZd7sEEr0mQNT91LEYr4YlZlfGa3lrTI48h+VXx1WBANtp8N45m3D9pT+IlV8/zp9NnzR4G/mVn5fnLnxLvUTPmSVCpWY4Fpbb+ogb9P9ysvENNCHNhzeMC46ylxedOqrYywjY7xIHiOXgs7F4kgS10jruI3aeY3grOdmYLO8pwQfnZtuN45rJq5hEmZaee90taXKWYY0Ek7e/yrfZfKXV6jXuBFNpmefIBV+z2UOr1Nbx8APqvR8HQa0BrRAHALj8m+elSdXKbVIpNCRS8fotEkkktEkkkkgEkkkgI6k+pAD04egLGpIFDaVbwtAkpyBawmCm5Wg3DtCLTZAhDquWsieoOICmyqFn1qqD3yYbRqBNrWJ+vgwVbpYmeKno40A5QqOQe9UHVRzTCw1yi5yi4woOM+KZLDKijUQaLr3R3iU4HM5vgqdTUx7Q5p3aRIXL1uybG1qWg1AwuEtLg9rgDOn4vijnfYr0J2FEyVNuHG54e7LSa4n4y+4fDA7lVc2qSI9fBTxWMDQYiwXn/AGjz175GuJtA5ckpP2dbON7TU6Y0suTtHv3KrVszL22429+N/JchhKY/6rjYRvGwE/ss9/a46u7pU9UB39IFgS43tsPp4J/UR16DldAgEmB/UTt6pZhiKRGmQ7zF/t9CvP8ACdvCD8dG0xqBBPO7R04LpKOYUazdY2dsR8pPIHgRyOk9Lp9EsvpWzIM3HrqdI6QZWaNR2IcOUQf5V3G+vI/sVk1ajrwVNVFKoHMcY2O45hXMjyV1Zwc75JnxVbB0HVXhp9V6BgaIY0NGwC5PLvnptmdXMHQawBrRAC0qKo0leorlarITFO1MVvhnoySSStJJJJIBJJJIDPD0SndVqYJMBbeXYLiUZnSSweE5rYoUQE9KlCMwLaThdO8qhiqsK3iHWWTiqobJJVSBSxDzM6vJV6VVw3i6FicTYwLrMdjnEjZo6kfYXRYfGtiGTcSgYfNADB4dVGjWBuCSen8qtmQOkubv1+L6Gyys59wOloYsESCpuxI5rgcJ2gc06HOA9B9AF0uFDXAOJv1srzeh0LCCPY+yC9zuB9VmDMWsMF4+iua5uDPor4Vi/han9QPlf7KdWrxB/Cq0qhA/2/KHVrefPmE+E0RVkSsXMM7aJYHBtSSA0kSYvIHGyuU3ho3XLdsP0wfTqVRdhD2xuXD5RPJFh5+6o18zcS7U6FyGYV9b9IPFCznOapeQynLRdxEyCeSpYTWXFzmuF+Nkpq0/JJPqLeYYepUpimwwBeZieBHgqLOzdZoFRjdYI+Jo+YeE7rpsveLT0XTYQMDQZA4+/JaST2ws68mZk/8AzCdLhzaWO1eELeyrJ69LViD8LCRNM3BEW1Dn+V3z8ZTH+Ief0WPm2cNiB8Q5fwjUgzmRkVDNx76Ku+hq8UelW5bJi66zq17K8I1gnit2iVl4MWC06K87f3XRn0u0ir9ErOpFXqKSlxpSKZqYlbYRo6SjKUq0pJKMpSgJJJpTSgDZZgrXW5RpQhYanAVmVtJwjymlJRc6EwHjTaeS5POMxaG+ckLoMfi2hpnkvGe1WZVqlRzWAhoO6fqLxi69Rs5z2hBESBHM/sFhHtA3nPj+B+VgjL6jrmTz/ko1HLI3k9B+5P8AKi6tdE/G3f46HC9pXSA0EnkB+wWg7tPaDc8gQfV23pPksHDZYSIs0cm8fHn5lWKmTkD4THXj/Hkjmms/EM/EPc7UIZPEWJ/7vmI6Cyf9U8C1R3kY+p/Cx8VSqMNyUAVnDis/TSeCZ/TRxOJfznlJc76TH0V/Ke1mJokNeQ9vKLx5WWK2uVF1abFOasGvDnU+3uGR5lTxFMOY7fccj1UMyeafxRI+q8k7P5xUwz9VIyJEt1CI4zO3BesZNm9PF0wWxPFtjB8l0Z115/m8Nxf4xcf2kpixMb3IIk81y1XH/q67GGSxjtVuI2H1XcZ7ljHNIIF+i4VjHYWt3zBLRDSOYNyPIRdaX7YT6aed1GtaG0GBrd7C55yeJXPEOfeZjgRwWlm9ZtRvfU3S11pG7bSQRw3WQcURwkTu3w3hTrhVYoAyI33jotCvmJa2CfPeCsRtbUfmB5B0g891TfVN2kEX8fuo+Q408Tjidj/uoYZhNzdU8Ow+IV+k0iEHxYkBAw7XPqW4FV8ZXDASSuhyRjTSDm8d1l5N8h5z2tDDsgK5TQKQVhq426zSV6iqNJXaKAthMSmlQJWsTU9SWpDlKVXSE1JakOUpR0CSlqQ5SlHQ6fZNrQX1oVLE4rkumQpOrtbHtbuViZhnc2Z6wgPwxcZcT4JxgGf0j0Wkw1znM9qFWqXf5rJ62WTjMFWcfhpU6v8AY9s/VdIzLmGZY3/xCoO7P0XPk0megCdlb53I5h+T13f5BZyD30h6AuB5LHxze6f3ddzqTv8AUwR4yHeG3NekVOz9DSYosvv8A8b2XmXaJwp1+4qiaBswmdVC4bLCf8A3LNoNoWes2TrbPm6GXVmjUNTmTZ7YIII5ckXD5q4j5wduhjjM/siZHUdhXuw+JuxwljgC5tgSdAF3TqG3FYub0Hiq46TSBMtDgQ4j+rTw8Dss9fU7K1l17auPrtj43AdDz4Qf32WM7GgmGsJvFgTfy22CASOU7XN7jeOXkmNQ81laetas9j/Gd4Z0sTHgCoupjqep/AQ21ii96iJnD9+R728Ft9ke0JwtYudLmuEG5ncdYA8lhOKE8Ks65eq3jO5yvY/+NUsSAabhHEcY8PT2VyfaOrBDW3Gsu67Qf29Fw1LFPpnUxxBPufVNUzSq5+p7yRN/7YIMdYJW3/rLHmeTwXNadbF91Lm7OnW3mQJ1AcLfZVxmNI3G9+lxNjw4LFxFN4e4OJJHHhtYjoQfqg93Btwj1A/Kn5OezX+NulmjH/C+RexIuPHn9/srH60NEP8AjbFnC7gP/oeP0WBVZPxcePjzTU3EW4e7hLpcv7b7Ma3emZ4xz8PwjHPGhtmnVyhc80e+IP8AUOv3RQ93E3HoRzR0/tPEYx1R0k25Luex9WaUHh+y4QU5vHiuy7Du+YeKy8k/5PHt1tNHagsCMxc7ZZpK7SKp0lZaVUJYLkMuUC5NKrpCak2pQlLUjoT1JalDUlqR0J6ktShKUo6G0ZKRoqxYIbnrulOAOpqQpqbXBJ9UBP5GQYAFVeYPsW4oGNzKB7/lYlfOQOIHDhw6yJPThxR1pnx2trE48N5e+BsVx/a7Km4thfSgvbLtNp6xHNNmOcB20248B6C3u3Fc/XzWsx4LHRHVvMcA48zwSup6rq8fh4p4FmvBVdU95h6lMNJmRTIOmn0AIdYKec479TRp1XWe2WO5uMD4vOPujuzbW3EB9MNNZg1ECPjZdhI5m8rlHYwwWjY/F4RO3qsNX9RrdzxyfJM1BPv6p9aqtrTuJR2Fp4kKOMc776PKiHI4w87EH2ef26qLqBHD37Cfxq71Dvfc2SNRQLU0JcT8qRKhpUtKUITq99ndUkBrhMWaeIHLqFXLUZyiU+sNSBAKJCIQown1jYi1WKZmOn2QQFOnYo6ji7QYJXR9jammq5p4/uucwzrrRwtY06zH8CYKV+4fP29HARGoVJ0gO5hEYudS3SRgVXpoyZJEppTEppR0JSlKjKUo6EpSlRlKUdCUpSoynlHQ1quKVV2M6p0l6PHRMxD9fHFU8VjuqZJNrjEc3meZXMHblpP1E+Hmueq5sZN+Ebu4bCCBZJJYb1euvGZxQrZi43Prcn1NxbkeKrHFnmkksflWtvAa+MJt+wHjwWPXZDr7BJJOX7ed+Vflnt/VWA2E4SSSLglOoRsVcZjJs7zPlbwSSVS1pnV9JVS034/ne4sgVGJJKqsIpvfv1SSUsaYoZSSSZ6RIUUySbLRIj90kkM6PRdxWlUZqp23F0kkH+nc9mcV3lBp4gLWmEkljr2P0IyqjtqJJIM8pJJKSJJJJAJJJJAJJJJAf/9k="
  );

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
    width: 400,
    height: 300,
  },
  buttonContainer: {
    marginBottom: 5,
    backgroundColor: "rgb(105, 41, 134)",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
