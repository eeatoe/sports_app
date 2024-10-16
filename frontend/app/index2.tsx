import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";

export default function index2() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleButtonPress = () => {
    alert('Интерактивности нету типа, ты типа скипнул жостка!');
  };

  const imageWelcome = require("@/assets/images/welcome_image1.png");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button_skip} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>пропустить</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={imageWelcome} style={styles.image} />

        {/* Индикатор страниц */}
        <View style={styles.paginationContainer}>
            <View style={[styles.dot, currentPage === 0 && styles.activeDot]} />
            <View style={[styles.dot, currentPage === 1 && styles.activeDot]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_skip: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    top: 15,
    right: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: 311,
    height: 291,
    borderRadius: 18,
    marginTop: 197,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007BFF',
  },
});