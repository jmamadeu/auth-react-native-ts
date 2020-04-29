import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes/index.routes';

import { View, Text } from 'react-native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      {/* <View>
        <Text>Meu APP</Text>
      </View> */}
    </NavigationContainer>
  );
};

export default App;
