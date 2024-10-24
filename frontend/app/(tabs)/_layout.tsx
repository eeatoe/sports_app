import { Tabs } from 'expo-router';
import { TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import statistics from '../../assets/images/statistics.png';
import calendar from '../../assets/images/calendar.png';
import workout from '../../assets/images/workout.png';
import profile from '../../assets/images/profile.png';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Statistics"
        options={{
          tabBarStyle: { backgroundColor: Colors.background, borderTopWidth: 0, },  // Задаем черный цвет фона панели
          tabBarActiveTintColor: Colors.primaryColor,  // Цвет активной иконки
          tabBarInactiveTintColor: Colors.secondaryColor, // Цвет неактивной иконки
          tabBarIcon: ({ color}) => (
            <Image
              source={statistics}
              style={{ width: 45, height: 45, tintColor: color }}
            />
          ),
          title: 'Статистика',
          headerStyle: {
            backgroundColor: Colors.background,  // Черный фон заголовка
          },
          headerTitleStyle: {
            color: Colors.primaryColor,           // Белый цвет текста заголовка
            fontSize: 32,             // Размер текста 32
            fontWeight: 'bold',       // Жирный шрифт
          },
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          tabBarStyle: { backgroundColor: Colors.background, borderTopWidth: 0, },  // Задаем черный цвет фона панели
          tabBarActiveTintColor: Colors.primaryColor,  // Цвет активной иконки
          tabBarInactiveTintColor: Colors.secondaryColor, // Цвет неактивной иконки
          tabBarIcon: ({ color}) => (
            <Image
              source={calendar}
              style={{ width: 45, height: 45, tintColor: color }}
            />
          ),
          title: 'Календарь',
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitleStyle: {
            color: Colors.primaryColor,
            fontSize: 32,
            fontWeight: 'bold',
          },
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="Workout"
        options={{
          tabBarStyle: { backgroundColor: Colors.background, borderTopWidth: 0, },  // Задаем черный цвет фона панели
          tabBarActiveTintColor: "#F5F5F5",  // Цвет активной иконки
          tabBarInactiveTintColor: Colors.secondaryColor, // Цвет неактивной иконки
          tabBarIcon: ({ color}) => (
            <Image
              source={workout}
              style={{ width: 45, height: 45, tintColor: color }}
            />
          ),
          title: 'Мои тренировки',
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
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarStyle: { backgroundColor: Colors.background,  borderTopWidth: 0, },  // Задаем черный цвет фона панели
          tabBarActiveTintColor: Colors.primaryColor,  // Цвет активной иконки
          tabBarInactiveTintColor: Colors.secondaryColor, // Цвет неактивной иконки
          tabBarIcon: ({ color}) => (
            <Image
              source={profile}
              style={{ width: 45, height: 45, tintColor: color }}
            />
          ),
          title: 'Профиль',
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitleStyle: {
            color: Colors.primaryColor,
            fontSize: 32,
            fontWeight: 'bold',
          },
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}