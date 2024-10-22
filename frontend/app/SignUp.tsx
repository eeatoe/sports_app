import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { useRouter, Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import Colors from '../constants/Colors';

export default function SignUp() {

  const router = useRouter(); // используется для маршрутизации

//------Далее идёт логика ассинхронного хранилища email---------------------------
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

    const validateEmail = (email: string) => { // проверка на корректность email
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  };
  
    const saveEmail = async () => {
      if (validateEmail(email)) {
        await AsyncStorage.setItem('email', email);
        setError('');
        router.push('/SignUp2'); //переход на следующую стр
      } else {
        Alert.alert('Неверный формат email');
      }
    };
//----------------Далее идёт код иконок Google, Apple и Facebook-------------------------------------------

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

//----------------Логика редиректа кнопки "уже есть аккаунт?"---------------------

  const [redirectlogin, setRedirectlogin] = useState(false);
  const handleRedirectSignUp = () => {
    setRedirectlogin(true);
  };
  if (redirectlogin) {
    return  <Redirect href="/Login" />; 
  }
//----------------------------------------------------------------------------------
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Регистрация</Text>
      <View style={styles.border}>
        <View style={{width: "100%"}}>
          <Text style={{ fontSize: 14, color: Colors.primaryColor, paddingLeft: 10, }}>email</Text>
          <TextInput
          style={styles.input}
          placeholder="Введите Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={Colors.secondaryColor}
          textAlign="left"
          />
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.underline}></View>
          <Text style={styles.buttonSignUp} onPress={handleRedirectSignUp }>
            Уже есть аккаунт?
          </Text>
          <TouchableOpacity style={styles.continueButton} onPress={saveEmail}>
            <Text style={styles.continueButtonText}>Далее</Text>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.separatorText}>или</Text>
            <View style={styles.separator} />
          </View>
          <TouchableOpacity style={styles.facebook} onPress={undefined}>
            <Image source={iconFacebook} style={styles.icon} />
            <Text style={styles.TextFacebook}>Продолжить с Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.google} onPress={undefined}>
            <Image source={iconGoogle} style={styles.icon} />
            <Text style={{color: '#000000',fontSize: 16,textAlign: 'center',opacity: 0.54}}>Продолжить с Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Apple} onPress={undefined}>
            <Image source={iconApple} style={styles.iconApple} />
            <Text style={{color: '#F5F5F5',fontSize: 16,textAlign: 'center'}}>Продолжить с Apple</Text>
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
    height: 225,
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
    marginBottom: 15,
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
  TextFacebook: {
    color: Colors.primaryColor,
    fontSize: 16,
    textAlign: 'center',
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