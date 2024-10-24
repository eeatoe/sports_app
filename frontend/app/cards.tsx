import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';

export default function cards() {

  const exercise = {
    container1: {
      index: 1,
      name: 'Силовая/ноги',
      difficulty: 'Средняя',
      color: "#fff"
    }
  };
//-----------статичные данные для проверки, потому что пока что без сервера----
  const [containers, setContainers] = useState([
    {
      id: 1,
      title: "Йога",
      color: "#A8D5BA",
      colorSecondary: "#6E8F7A",
      duration: '30 минут',
      difficulty: 'Средняя',
      caloriesBurned: "200 ккал",
      location: "Дома",
    },
    {
      id: 2,
      title: "Кроссфит",
      color: "#9B59B6",
      colorSecondary: "#6A3E79",
      duration: '30 минут',
      difficulty: 'Средняя',
      caloriesBurned: "200 ккал",
      location: "Дома",
    },
    {
      id: 3,
      title: "Функциональная тренировка",
      color: "#59A5D8",
      colorSecondary: "#2F7095",
      duration: '30 минут',
      difficulty: 'Средняя',
      caloriesBurned: "200 ккал",
      location: "Дома",
    }
  ]);
//--------------------------------------------------------------
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {containers.map((container, index) => (
        <View key={index} style={{ backgroundColor: container.color, padding: 20, marginBottom: 10, borderRadius: 30, width: 336, height: 200, }}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap',}}>
          <Text style={{fontSize: 26, color: "#FFFFFF"}}>{container.title}</Text>
            <View style={{...styles.propertyBox,backgroundColor: container.colorSecondary}}>
              <Text style={styles.propertyText}>{container.difficulty}</Text>
            </View>
            <View style={{...styles.propertyBox,backgroundColor: container.colorSecondary}}>
              <Text style={styles.propertyText}>{container.duration}</Text>
            </View>
            <View style={{...styles.propertyBox,backgroundColor: container.colorSecondary}}>
              <Text style={styles.propertyText}>{container.caloriesBurned}</Text>
            </View>
            <View style={{...styles.propertyBox,backgroundColor: container.colorSecondary}}>
              <Text style={styles.propertyText}>{container.location}</Text>
            </View>
          <TouchableOpacity style={{width: 117, height: 40,}} onPress={undefined}>
            <Text style={styles.continueButtonText}>Далее</Text>
          </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1F1F1F",
    alignItems: 'center',
    paddingTop: 200,
  },
  propertyBox: {
    width: '45%',
    borderRadius: 29,
    alignItems: 'center',
    maxWidth: 80,
    margin: 5,
  },
  propertyText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: 'center',
  },
});