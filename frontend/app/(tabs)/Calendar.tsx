import { View, Text } from "react-native";
import Colors from '../../constants/Colors';

export default function Calendar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }}>
      <Text>Calendar</Text>
    </View>
  );
}