import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from './src/views/Splash';
import { Home } from './src/views/Home';
import { Surat } from './src/views/Surat';
import { Detail } from './src/views/Detail';

const Stack = createStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Surat" component={Surat} options={{
          headerStyle: { elevation: 0, borderBottomWidth: 0.5 },
          headerTitle: <Text style={{ fontWeight: '100' }}>Pio: Alquran dan Terjemahan Online</Text>
        }} />
        <Stack.Screen name="Detail" component={Detail} options={({ route }) => (
          {
            title: "Surat " + route.params.surat,
            headerStyle: { elevation: 0, borderBottomWidth: 0.5 }
          }
        )} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;