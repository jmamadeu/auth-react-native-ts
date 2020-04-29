import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SigIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='SignIn' key='Tela1' component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
