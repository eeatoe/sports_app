import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native'; // для маршрутизации
import { Redirect } from "expo-router"

const { width, height } = Dimensions.get('window');

export default function Index() {
  //далее идёт логика редиректа в логин
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [redirectlogin, setRedirectlogin] = useState(false);
  const handleRedirectLogin = () => {
    setRedirectlogin(true);
  };
  if (redirectlogin) {
    return <Redirect href="/Login" />; 
  }

  const images = [
    {
      src: require("@/assets/images/welcome_image1.png"),
      title: 'Тренируйтесь правильно',
      paragraph: 'Покажем, как выполнять упражнения эффективно и без вреда для вашего здоровья',
    },
    {
      src: require("@/assets/images/welcomeimage2.png"),
      title: 'Отслеживайте прогресс',
      paragraph: 'Смотрите статистику ваших тренировок и то, насколько вы близки к своей цели',
    }
  ];

  const onScroll = (event: any) => {
    const pageIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentPage(pageIndex);
  };

  const handleContinuePress = () => {
    if (currentPage < images.length - 1) {
      // Если первый слайд, то двигает на следующий
      setCurrentPage(currentPage + 1);
    } else {
      // Если последний слайд, то ведет на регистрацию, НЕ ЗАБЫТЬ ВСТАВИТЬ СТРАНИЦУ
      handleRedirectLogin; // вставь сюда название страницы
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity style={styles.button_skip} onPress={handleRedirectLogin}>
        <Text style={styles.buttonText}>Пропустить</Text>
      </TouchableOpacity>

      <ScrollView // Свайп с картинками и текстом
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentOffset={{ x: currentPage * width, y: 0 }} // для управления текущей страницей
      >
        {images.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={item.src} style={styles.image} />
            <View style={styles.paginationContainer}>
              {images.map((_, idx) => (
                <View key={idx} style={[styles.dot, currentPage === idx && styles.activeDot]} />
              ))}
            </View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.paragraph}>{item.paragraph}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.imageContainer2}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
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
    backgroundColor: '#2b2b2b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    top: 40,
    right: 16,
    zIndex: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: width - (width * 0.1),
    maxWidth: 360,
    height: height - (height * 0.7),
    borderRadius: 18,
    marginTop: 50,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20, // добавляем отступ между точками и текстом
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
    textAlign: 'center',
    marginBottom: 10,
  },
  paragraph: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  imageContainer2: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  continueButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    width: width - 20,
    maxWidth: 360,
    borderRadius: 25,
    marginVertical: 10,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
