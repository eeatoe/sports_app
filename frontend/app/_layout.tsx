import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sports_app"
        options={{
          headerStyle: {
            backgroundColor: '#1F1F1F', // Задал задний фон
          },
          headerTintColor: '#fff', // Цвет текста и иконок на верхней панели
        }}
      />
    </Stack>
  );
}