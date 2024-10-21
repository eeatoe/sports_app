import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from './config';

export default function SignUp() {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [isAgreed, setIsAgreed] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [birthDate, setBirthDate] = useState('');
//-----------подготовка данных к отправке на сервер------------------
  const monthNames: { [key: string]: string } = {
    Январь: '01',
    Февраль: '02',
    Март: '03',
    Апрель: '04',
    Май: '05',
    Июнь: '06',
    Июль: '07',
    Август: '08',
    Сентябрь: '09',
    Октябрь: '10',
    Ноябрь: '11',
    Декабрь: '12',
  };
function formatBirthDate(day: number, month: string, year: number): string {
  const monthNumber = monthNames[month];
  if (!monthNumber) {
    throw new Error('Некорректное название месяца');
  }
  
  const formattedDay = day < 10 ? `0${day}` : day.toString();
  return `${year}-${monthNumber}-${formattedDay}`;
}

useEffect(() => {
  if (hasUserInteracted && day && month && year) {
    const dayNumber = parseInt(day, 10);
    const yearNumber = parseInt(year, 10);
    if (!isNaN(dayNumber) && !isNaN(yearNumber) && monthNames[month]) {
      const formattedBirthDate = formatBirthDate(dayNumber, month, yearNumber);
      setBirthDate(formattedBirthDate);
      console.log(formattedBirthDate, "создание"); // логирую для проверки
    } else {
      console.error('Некорректные данные для формирования даты');
    }
  }
}, [day, month, year, hasUserInteracted]);
//------------сбор данных и отправка на сервер-----------------------
const [password, setPassword] = useState('');
const sendDataRegistration = async () => {
  try {
    setHasUserInteracted(true); //// Установить состояние взаимодействия, когда пользователь отправляет данные
    // Извлекаем имя пользователя и логин из AsyncStorage
    const dayNumber = parseInt(day, 10);
    const yearNumber = parseInt(year, 10);
    const validBirthDate = formatBirthDate(dayNumber, month, yearNumber);
    const email = await AsyncStorage.getItem('email');
    const password = await AsyncStorage.getItem('password');
    const confirmPassword = await AsyncStorage.getItem('confirmPassword');
    console.log(email, password, confirmPassword ,name, validBirthDate, "перед отправкой")
    // Проверяем, что данные существуют
    if (email && password && confirmPassword && name && validBirthDate) {
      // Формируем данные для отправки
      const requestData = {
        user: {
          email: email,
          password: password,
          password_confirmation: confirmPassword,
          name: name,
          birth_date: validBirthDate
        }
      };

      // Отправляем POST-запрос на сервер
      const response = await fetch(`${API_BASE_URL}/api/v1/registrations`, {
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
      console.error('все или некоторые данные отсутствуют');
    }
  } catch (error) {
    console.error('Ошибка сети или запроса:', error);
  }
};
//-------------------------------------------------------------------
  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1923 }, (_, i) => currentYear - i);

  useEffect(() => {
    const calculateDaysInMonth = (month: string, year: string) => {
      const monthIndex = months.indexOf(month);
      let days = 31;

      if (monthIndex === 1) { // Февраль
        days = (parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0) || parseInt(year) % 400 === 0 ? 29 : 28;
      } else if ([3, 5, 8, 10].includes(monthIndex)) {
        days = 30;
      }

      setDaysInMonth(Array.from({ length: days }, (_, i) => i + 1));
    };

    if (month && year) {
      calculateDaysInMonth(month, year);
    }
  }, [month, year]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Регистрация</Text>
      <View style={styles.border}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontSize: 14, color: '#fff', paddingLeft: 10 }}>Имя</Text>
          <TextInput
            style={styles.input}
            placeholder="Введите свое имя"
            placeholderTextColor="#A0A0A0"
            textAlign="left"
            value={name}
            onChangeText={setName}
          />
        </View>

        <Text style={{ fontSize: 14, color: '#fff', paddingLeft: 10 }}>Дата рождения</Text>
        <View style={styles.selectorContainer}>
          {/* Выбор дня */}
          <ModalSelector
            data={daysInMonth.map((d) => ({ key: d, label: d.toString() }))}
            initValue="День"
            onChange={(option) => setDay(option.label)}
            style={styles.modalSelector}
            initValueTextStyle={styles.selectorText}
            selectTextStyle={styles.selectorText}
          >
            <TextInput
              style={styles.input}
              editable={false}
              placeholder="День"
              placeholderTextColor="#A0A0A0"
              value={day}
            />
          </ModalSelector>

          {/* Выбор месяца */}
          <ModalSelector
            data={months.map((m, index) => ({ key: index, label: m }))}
            initValue="Месяц"
            onChange={(option) => setMonth(option.label)}
            style={styles.modalSelector}
            initValueTextStyle={styles.selectorText}
            selectTextStyle={styles.selectorText}
          >
            <TextInput
              style={styles.input}
              editable={false}
              placeholder="Месяц"
              placeholderTextColor="#A0A0A0"
              value={month}
            />
          </ModalSelector>

          {/* Выбор года */}
          <ModalSelector
            data={years.map((y) => ({ key: y, label: y.toString() }))}
            initValue="Год"
            onChange={(option) => setYear(option.label)}
            style={styles.modalSelector}
            initValueTextStyle={styles.selectorText}
            selectTextStyle={styles.selectorText}
          >
            <TextInput
              style={styles.input}
              editable={false}
              placeholder="Год"
              placeholderTextColor="#A0A0A0"
              value={year}
            />
          </ModalSelector>
        </View>

        {/* Кастомный чекбокс */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setIsAgreed(!isAgreed)}
          >
            {isAgreed ? <View style={styles.checkedBox} /> : null}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            Регистрируясь, вы подтверждаете, что ознакомились с Условиями использования и Политикой конфиденциальности Fitly и соглашаетесь с ним.
          </Text>
        </View>

        {/* Кнопка Далее */}
        <TouchableOpacity style={styles.continueButton} onPress={sendDataRegistration}>
          <Text style={styles.continueButtonText}>Далее</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    paddingVertical: 20,
  },
  border: {
    padding: 20,
    borderRadius: 20,
    borderColor: '#E5E8EE',
    borderWidth: 1,
    width: 311,
    backgroundColor: '#1F1F1F',
  },
  text: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 10,
    color: '#A0A0A0',
    backgroundColor: 'transparent',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E8EE',
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalSelector: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#1F1F1F',
    borderBottomWidth: 0,
    borderBottomColor: '#E5E8EE',
    elevation: 0,
  },
  selectorText: {
    color: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#E5E8EE',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: '#A0A0A0',
  },
  checkboxText: {
    color: '#A0A0A0',
    fontSize: 8,
  },
  continueButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 18,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#A0A0A0',
    fontSize: 16,
  },
  dateLabel: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 10,
  },
  dateSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});