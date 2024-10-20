import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'index', headerShown: false }} />
      <Stack.Screen name="WelcomePage" options={{ title: 'WelcomePage', headerShown: false }} />
      <Stack.Screen name="Login" options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="Login2" options={{ title: 'Login2', headerShown: false }} />
      <Stack.Screen name="SignUp" options={{ title: 'SignUp', headerShown: false }} />
      <Stack.Screen name="SignUp2" options={{ title: 'SignUp2', headerShown: false }} />
      <Stack.Screen name="SignUp3" options={{ title: 'SignUp3', headerShown: false }} />
      <Stack.Screen name="test" options={{ title: 'test', headerShown: false }} />
    </Stack>
  );
}