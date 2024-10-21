import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { useRouter, Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from './config';

export default function Login2() {
  
  const router = useRouter();

//------------Здесь отправляются на сервер данные для входа-------------------------

  const [password, setPassword] = useState('');
  const sendDataLogin = async () => {
    try {
      // Извлекаем имя пользователя и логин из AsyncStorage
      const login = await AsyncStorage.getItem('email');
      console.log(login,password)
      // Проверяем, что данные существуют
      if (password && login) {
        // Формируем данные для отправки
        const requestData = {
          user: {
            email: login,
            password: password
          }
        };

        // Отправляем POST-запрос на сервер
        const response = await fetch(`${API_BASE_URL}/api/v1/sessions`, {
          method: 'POST',  // Используем метод POST
          headers: {
            'Content-Type': 'application/json',  // Указываем, что передаем JSON
          },
          body: JSON.stringify(requestData),  // Преобразуем объект данных в JSON
        });

        // Обрабатываем ответ от сервера
        if (response.ok) {
          const responseData = await response.json();  // Если ответ успешный
          const token = responseData.token;
          await AsyncStorage.setItem('jwtToken', token); // записываю токен в ассинхронное хранилище
          await AsyncStorage.removeItem('email'); // удаляю эмэйл из хранилища для безопасности
          setPassword(''); // удаляю пароль из состояния для безопасности
        } else {
          console.error('Ошибка на сервере:', response.status);
        }
      } else {
        console.error('Имя пользователя или логин не найдены в AsyncStorage');
      }
    } catch (error) {
      console.error('Ошибка сети или запроса:', error);
    }
  };
//---------------------------------------------------------------------------------------------

  interface IconWithTextProps {
    iconSource: ImageSourcePropType; // Определяем тип для иконки
    text: string; // Определяем тип для текста
  }
  
  const IconWithText: React.FC<IconWithTextProps> = ({ iconSource, text }) => {
    return (
      <View style={styles.container}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };
  const iconFacebook: ImageSourcePropType = require('@/assets/images/facebook.png');
  const iconGoogle: ImageSourcePropType = require('@/assets/images/Google.png');
  const iconApple: ImageSourcePropType = require('@/assets/images/Apple.png');

//-------------------------------------------------------------------------------------
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Вход</Text>
      <View style={styles.border}>
        <View style={{width: "100%"}}>
          <Text style={{ fontSize: 14, color: "#fff",paddingLeft: 10, }}>Пароль</Text>
          <TextInput
          style={styles.input}
          placeholder="Введите пароль"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#A0A0A0"
          textAlign="left"
          />
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.underline}></View>
          <Text style={styles.buttonSignUp} onPress={undefined}>
            Забыли пароль?
          </Text>
          <TouchableOpacity style={styles.continueButton} onPress={sendDataLogin}>
            <Text style={styles.continueButtonText}>Войти</Text>
          </TouchableOpacity>
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
    marginBottom: 15,
    height: 2,
    backgroundColor: '#fff',
    marginTop: -20,
    width: '92%',
  },
  buttonSignUp: {
    marginBottom: 10,
    textAlign: "left",
    fontSize: 12,
    color: "#A0A0A0",
    textDecorationLine: 'underline',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 18,
    borderRadius: 25,
    marginVertical: 10,
    width: "90%"
  },
  continueButtonText: {
    color: '#F5F5F5',
    fontSize: 16,
    textAlign: 'center',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40, // Отступ сверху и снизу для разделителя
    marginBottom: 19
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#A0A0A0', // Цвет полос
    marginHorizontal: 5, // Отступ между текстом и полосами
  },
  separatorText: {
    color: "#A0A0A0",
    fontSize: 16,
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#007BFF',
    padding: 18,
    borderRadius: 25,
    width: 311
  },
  google: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 25,
    marginTop: 25,
    width: 311
  },
  Apple: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
    padding: 18,
    borderRadius: 25,
    marginTop: 25,
    width: 311,
  },
  icon: {
    width: 24, // Ширина иконки
    height: 24, // Высота иконки
    marginRight: 10, // Отступ между иконкой и текстом
  },
  iconApple: {
    width: 25, // Ширина иконки
    height: 31, // Высота иконки
    marginRight: 10, // Отступ между иконкой и текстом
  }
});