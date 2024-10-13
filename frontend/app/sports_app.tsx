import { Text, View, StyleSheet, } from 'react-native';
import {StatusBar} from "expo-status-bar" //попытался поменять статус бар (верхнее табло с зарядом и т.д),
<<<<<<< HEAD
// но не получилось, возможно потому что приложение не скопилировано, но настройку оставил, может заработает после компиляции
=======
// но не получилось, возможно потому что приложение не скопилировано, но настройку оставлю.
>>>>>>> e65f6d3ba22c503ef8308d52cac6a07ea06c2799

export default function sports_app() {
  return (
    <View style={styles.container}>
    <StatusBar style="light"/>
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
  text: {
    color: '#fff',
  },
});