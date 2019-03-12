import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>할 일</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 35 : 10
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold"
  }
});

export default Header;
