import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';

export default function index () {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null); // Состояние для первого запуска

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        await AsyncStorage.removeItem('password');
        await AsyncStorage.removeItem('hasLaunched'); // Очищаем AsyncStorage
        const alreadyLaunched = await AsyncStorage.getItem('hasLaunched');
        if (alreadyLaunched === null) {
          // Если приложение запускается впервые
          setIsFirstLaunch(true);
          await AsyncStorage.setItem('hasLaunched', 'true');
        } else {
          // Если приложение уже запускалось
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Ошибка при проверке первого запуска', error);
      }
    };

    checkFirstLaunch();
  }, []);

  // Если состояние ещё не определено, показываем ничего (можно добавить индикатор загрузки)
  if (isFirstLaunch === null) {
    return null; // или <ActivityIndicator />
  }

  // Редирект на нужную страницу
  return (
    <Redirect
      href={isFirstLaunch ? '/WelcomePage' : '/SignUp'}
    />
  );
};
