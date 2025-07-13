import { Colors } from '@/constants/Colors';
import { Stack } from "expo-router";
import { Appearance } from "react-native";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  
  return (
    <ThemeProvider>
      <Stack screenOptions={{headerShadowVisible: true, headerTintColor: theme.text}}>
        <Stack.Screen name="index" options={{headerShown: false, title: 'ToDo List', headerTitle: 'TODO LIST'}}/>
      </Stack>
    </ThemeProvider>
  )
}
