import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar"; // Попытался поменять статус бар

export default function SportsApp() {
  const handleButtonPress = () => {
    alert('Интерактивности нету типа, ты типа скипнул жостка!'); // Действие при нажатии кнопки!!!!!!!! когда сделаем переход будем менять эту функцию
  };

  return (
    // тут я сделал чёрный фон
    <View style={styles.container}>
      {/* тут я настроил статус бар на авто */}
      <StatusBar style="auto" />
      {/* Здесь я сделал кнопку skip */}
      <TouchableOpacity style={styles.button_skip} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>пропустить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center', // Выравниваем по левому краю
    justifyContent: 'center',
  },
  button_skip: {
    backgroundColor: '#1F1F1F', // Цвет фона кнопки
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    top: 16,
    right: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});