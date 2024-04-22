import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import PortfolioScreen from './screens/PortfolioScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact Us' }} />
        <Stack.Screen name="Portfolio" component={PortfolioScreen} options={{ title: 'My Portfolio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
