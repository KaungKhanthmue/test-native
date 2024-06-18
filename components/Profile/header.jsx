import {View,Text,StyleSheet,Image, Button,ScrollView,} from "react-native";
import React from "react";

export default function header() {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Image
          style={styles.coverImage}
          src="https://imgs.search.brave.com/-4Moq4406v343JJRE5XaDWQrbmfylJSBw1SfKBzi1_E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NTExODc1ODA0NTkt/NDM0OTAyNzljMGZh/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGQy/VmljMmwwWlNVeU1H/TnZkbVZ5ZkdWdWZE/QjhmREI4Zkh3dw.jpeg"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={{ marginTop: 40, fontSize: 23, fontWeight: "bold" }}>
          Kaung Khant Hmue
        </Text>
        <Text>kaungkhanthmue58@gmail.com</Text>
      </View>
      <View style={styles.upperbutton}>
        <View style={styles.upperbuttonInner}>
          <Button title="Add Post New" color="blue" />
          <Button title="Edit Profile" color="#b3b3b3" />
        </View>
      </View>

      <View style={styles.profile}>
        <View style={styles.profileInner}>
          <Image
            style={styles.image}
            src="https://imgs.search.brave.com/O6uM4tB0cYztvgnUgQmYN6c0ZN69eVgXzARrLtta2Zw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/MS8wNi8yMy8wNC9u/YXR1cmUtMTk1OTIy/OV82NDAuanBn"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  secondContainer: {
    width: "100%",
    height: 200,
    marginTop: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    width: "96%",
    height: 100,
  },
  upperbutton: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 7,
    gap: 10,
  },
  upperbuttonInner: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
  profile: {
    width: 150,
    height: 150,
    zIndex: 100,
    position: "absolute",
    left: 5,
    top: 120,
    borderRadius: 100 / 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInner: {
    width: 140,
    height: 140,
    borderRadius: 100 / 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 100 / 1,
    resizeMode: "cover",
  },
  coverImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    resizeMode: "cover",
  },
});
