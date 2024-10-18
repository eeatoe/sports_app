import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'index', headerShown: false }} />
      <Stack.Screen name="Login" options={{ title: 'Login', headerShown: false }} />
    </Stack>
  );
}