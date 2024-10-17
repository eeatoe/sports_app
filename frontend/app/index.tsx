import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";

const { width, height } = Dimensions.get('window');

export default function index() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleButtonPress = () => {
    alert('Интерактивности нету типа, ты типа скипнул жостка!');
  };
  const continueButtonPress = () => {
    
  }

  const imageWelcome = require("@/assets/images/welcome_image1.png");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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
        <View>
          <Text style={styles.title}>Тренируйтесь правильно</Text>
          <Text style={styles.paragraph}>Покажем, как выполнять упражнения эффективно и без вреда для вашего здоровья</Text>
        </View>
      </View>
      <View style={styles.imageContainer2}>
        <TouchableOpacity style={styles.continueButton} onPress={undefined}>
          <Text style={styles.continueButtonText}>Продолжить</Text>
        </TouchableOpacity>
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
    top: 40,
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
  imageContainer2: {
    color: '#a83232',
    flex: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: width-(width*0.1),
    height: height-(height*0.7),
    borderRadius: 18,
    marginTop: 197,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
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
  title: {
    color: '#fff',
    fontSize: 22,
    marginTop: 20, // Отступ от индикатора
    textAlign: 'center', // Выравнивание текста по центру
    marginBottom: 25
  },
  paragraph: {
    color: "#fff",
    fontSize: 16,
    marginTop: 0,
    textAlign: "center",
    paddingHorizontal: 76,
  },
  continueButton: {
    backgroundColor: '#007BFF', // Цвет кнопки
    paddingVertical: 12,
    width: width-20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 25,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});