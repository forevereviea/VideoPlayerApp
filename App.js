import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AllVideos from './Screens/AllVideos';
import Categories from './Screens/HomeScreen';
import Login from './Screens/LoginScreen';
import ReactNative from './Screens/ReactNativeVids';
import Backend from './Screens/BackendVids';
import AddModal from './Screens/AddModal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login} />
        <Stack.Screen
          name='Categories'
          component={Categories} />
          <Stack.Screen
          name='React Native'
          component={ReactNative} />
          <Stack.Screen
          name='Backend'
          component={Backend} />
           <Stack.Screen
          name='Modal'
          component={AddModal} />
        {/* <Stack.Screen
          name='Videos'
          component={AllVideos} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
