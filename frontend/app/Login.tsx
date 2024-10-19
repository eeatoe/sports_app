import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  
  const handlePress = () => {
    router.push('/SignUp'); // Переход на экран с маршрутом '/SignUp'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Вход</Text>
      <View style={styles.border}>
        <Text style={{ fontSize: 14, color: "#fff" }}>email</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите Email"
          placeholderTextColor="#A0A0A0"
          textAlign="left"
        />
        <View style={styles.underline}></View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={styles.buttonSignUp} onPress={handlePress}>
            Ещё нет аккаунта?
          </Text>
          <TouchableOpacity style={styles.continueButton} onPress={undefined}>
            <Text style={styles.continueButtonText}>Далее</Text>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.separatorText}>или</Text>
            <View style={styles.separator} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1F1F1F', 
    paddingTop: 120
  },
  border: {
    marginBottom: 40,
    alignItems: "flex-start",
    marginTop: 50,
    borderRadius: 20,
    width: 311,
    height: 225,
    borderWidth: 1,
    borderColor: "#E5E8EE",
    padding: 15,
  },
  text: {
    fontSize: 34,
    color: "#fff",
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#1F1F1F',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    color: "#fff"
  },
  underline: {
    marginBottom: 25,
    height: 2,
    backgroundColor: '#fff',
    marginTop: -20,
    width: '100%',
  },
  buttonSignUp: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 12,
    color: "#A0A0A0",
    textDecorationLine: 'underline',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 18,
    borderRadius: 25,
    marginVertical: 10,
    width: 200
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30, // Отступ сверху и снизу для разделителя
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#A0A0A0', // Цвет полос
    marginHorizontal: 5, // Отступ между текстом и полосами
  },
  separatorText: {
    color: "#E5E8EE",
    fontSize: 16,
  },
  facebook: {
    backgroundColor: '#007BFF',
    paddingVertical: 18,
    borderRadius: 25,
    marginVertical: 10,
    width: 200
  }
});