import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { useRouter, Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [storedEmail, setStoredEmail] = useState<string | null>(null); 

    const validateEmail = (email: string) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  };
  
    const saveEmail = async () => {
      if (validateEmail(email)) {
        await AsyncStorage.setItem('email', email);
        const storedValue = await AsyncStorage.getItem("email");
        setStoredEmail(storedValue);
        setError('');
        router.push('/Login2');  // Переход на следующую страницу
      } else {
        setError('Неверный формат email');
      }
    };
  

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

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [redirectlogin, setRedirectlogin] = useState(false);
  const handleRedirectSignUp = () => {
    setRedirectlogin(true);
  };
  if (redirectlogin) {
    return <Redirect href="/SignUp" />; 
  }

  const iconFacebook: ImageSourcePropType = require('@/assets/images/facebook.png');
  const iconGoogle: ImageSourcePropType = require('@/assets/images/Google.png');
  const iconApple: ImageSourcePropType = require('@/assets/images/Apple.png');
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Вход</Text>
      <View style={styles.border}>
        <View style={{width: "100%"}}>
          <Text style={{ fontSize: 14, color: "#fff",paddingLeft: 10, }}>email</Text>
          <TextInput
          style={styles.input}
          placeholder="Введите Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#A0A0A0"
          textAlign="left"
          />
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.underline}></View>
          <Text style={styles.buttonSignUp} onPress={handleRedirectSignUp }>
            Ещё нет аккаунта?
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
            <Text style={styles.continueButtonText}>Продолжить с Facebook</Text>
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