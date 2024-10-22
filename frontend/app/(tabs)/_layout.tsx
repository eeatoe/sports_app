import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="page1" options={{ title: 'page1' }} />
      <Tabs.Screen name="page2" options={{ title: 'page2' }} />
    </Tabs>
  );
}