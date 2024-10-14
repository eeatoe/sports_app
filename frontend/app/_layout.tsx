import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // headerShown: false, раскоментируй если нужно убрать название маршрутизации
          headerStyle: {
            backgroundColor: '#fff', // Задал задний фон
          },
          headerTintColor: '#1F1F1F', // Цвет текста и иконок на верхней панели
        }}
      />
    </Stack>
  );
}