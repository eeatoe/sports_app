import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>логин</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // можно изменить цвет фона
  },
  text: {
    fontSize: 24, // размер шрифта
    fontWeight: 'bold', // жирный шрифт
  },
});

export default MenuScreen;