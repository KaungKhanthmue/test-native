import { View, Text,StyleSheet,  Button, } from "react-native";
import React from "react";

export default function body() {
  return (
    <View style={styles.container}>
      <View style={styles.infoDetails}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Details</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Email :</Text>
          <Text>kaungkhanthmue58@gmail.com </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 33,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Phone :</Text>
          <Text>09774268358 </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 18,
            paddingTop: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Address :</Text>
          <Text>Bagan </Text>
        </View>
      </View>

      <View style={styles.bodyButtonContainer}>
        <View style={styles.bodyButton}>
          <Text style={{ textAlign: "center", paddingVertical: 8 }}>Post</Text>
        </View>
        <View style={styles.bodyButton}>
          <Text style={{ textAlign: "center", paddingVertical: 8 }}>Photo</Text>
        </View>
      </View>

      <View style={styles.friendsAll}>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 10 }}>
          Friends
        </Text>
        <View style={styles.cards}>
          <View style={styles.card}></View>

          <View style={styles.card}></View>

          <View style={styles.card}></View>

          <View style={styles.card}></View>
          <View style={styles.card}></View>

          <View style={styles.card}></View>
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
  infoDetails: {
    width: "100%",
    height: 130,
    marginTop: 10,
    backgroundColor: "#e6e6e6",
    paddingLeft: 15,
    borderRadius: 10,
  },
  bodyButtonContainer: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 7,
    gap: 5,
    alignItems: "center",
  },
  bodyButton: {
    width: 60,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#e6ecff",
    marginLeft: 10,
  },
  friendsAll: {
    width: "100%",
    marginTop: 5,
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  cards: {
    width: "100%",
    height: 250,
    display: "flex",
    borderRadius: 10,
    backgroundColor: "#cccccc",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingTop:10,
    paddingLeft:10,
    marginTop: 10,
  },
  card: {
    width: 108,
    height: 110,
    borderRadius: 10,
    backgroundColor: "white",

  },
});

