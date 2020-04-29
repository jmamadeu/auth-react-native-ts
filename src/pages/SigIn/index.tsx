import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Faça seu Login</Text>
      <Button onPress={() => signIn()} title='Sign In' />
    </View>
  );
};

export default SignIn;
