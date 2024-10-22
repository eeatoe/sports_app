import { Tabs } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Statistics"
        options={{
          title: 'Статистика',
          headerStyle: {
            backgroundColor: Colors.background,  // Черный фон заголовка
          },
          headerTitleStyle: {
            color: Colors.primaryColor,           // Белый цвет текста заголовка
            fontSize: 32,             // Размер текста 32
            fontWeight: 'bold',       // Жирный шрифт
          },
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          title: 'Календарь',
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitleStyle: {
            color: Colors.primaryColor,
            fontSize: 32,
            fontWeight: 'bold',
          },
        }}
      />
      <Tabs.Screen
        name="Workout"
        options={{
          title: 'Выбор тренировок',
          headerStyle: {
            backgroundColor: Colors.background,  // Черный фон заголовка
          },
          headerTitleStyle: {
            color: Colors.primaryColor,           // Белый цвет текста заголовка
            fontSize: 32,             // Размер текста 32
            fontWeight: 'bold',       // Жирный шрифт
          },
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity
              style={{
                padding: 5,            // Отступы для удобства нажатия
                backgroundColor: Colors.primaryColor,
                borderRadius: 25,
                marginLeft: 9,
              }}
              onPress={() => {
                // Логика возврата назад
              }}
            >
              <Ionicons
                name="arrow-back"       // Имя иконки (обычная стрелка "назад")
                size={35}               // Размер иконки
                color={Colors.background}           // Цвет иконки (черный)
                style={{ borderRadius: 20 }}  // Округление иконки
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Профиль',
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitleStyle: {
            color: Colors.primaryColor,
            fontSize: 32,
            fontWeight: 'bold',
          },
        }}
      />
    </Tabs>
  );
}