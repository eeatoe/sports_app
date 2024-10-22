import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { useRouter, Redirect } from 'expo-router';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../constants/Colors';

export default function SignUp2() {
  
  //-----здесь будет логика ассинхронного хранилища-----------------
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handlePasswordSubmit = async () => {
    if (password === confirmPassword) {
      try {
        // Сохраняем пароль в асинхронное хранилище
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('confirmPassword', confirmPassword);
        // Переход на следующий экран
        router.push('/SignUp3'); // 
      } catch (error) {
        Alert.alert('Ошибка', 'Не удалось сохранить пароль');
      }
    } else {
      Alert.alert('Ошибка', 'Подтверждение пароля не совпадает');
    }
  };

//----------Далее идёт код иконок Google, Apple и Facebook-----------------------------

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
      <Text style={styles.text}>Регистрация</Text>
      <View style={styles.border}>
        <View style={{width: "100%"}}>
          <Text style={{ fontSize: 14, color: "#fff",paddingLeft: 10, }}>Пароль</Text>
          <TextInput
          style={styles.input}
          placeholder="Введите пароль"
          placeholderTextColor={Colors.secondaryColor}
          textAlign="left"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          />
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.underline}></View>
        <View style={{width: "100%"}}>
        <Text style={{ fontSize: 14, color: "#fff",paddingLeft: 10, }}>Подтверждение пароля</Text>
        <TextInput  
          style={styles.input}
          placeholder="Введите пароль"
          placeholderTextColor={Colors.secondaryColor}
          textAlign="left"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          />
        </View>
          <View style={styles.underline}></View>
        
          <TouchableOpacity style={styles.continueButton} onPress={handlePasswordSubmit}>
            <Text style={styles.continueButtonText}>Далее</Text>
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
    backgroundColor: Colors.background, 
    paddingTop: 120
  },
  border: {
    marginBottom: 40,
    alignItems: "flex-start",
    marginTop: 50,
    borderRadius: 20,
    width: 311,
    height: 387,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    padding: 15,
  },
  text: {
    fontSize: 34,
    color: Colors.primaryColor,
  },
  input: {
    height: 40,
    borderColor: Colors.background,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    color: Colors.primaryColor
  },
  underline: {
    marginBottom: 60,
    height: 2,
    backgroundColor: Colors.primaryColor,
    marginTop: -20,
    width: '92%',
  },
  buttonSignUp: {
    marginBottom: 10,
    textAlign: "left",
    fontSize: 12,
    color: Colors.secondaryColor,
    textDecorationLine: 'underline',
  },
  continueButton: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 18,
    borderRadius: 25,
    marginVertical: 10,
    width: "90%"
  },
  continueButtonText: {
    color: Colors.buttonText,
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
    backgroundColor: Colors.secondaryColor, // Цвет полос
    marginHorizontal: 5, // Отступ между текстом и полосами
  },
  separatorText: {
    color: Colors.secondaryColor,
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