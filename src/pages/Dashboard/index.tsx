import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{user?.name}</Text>
      <Button
        title='Log Off'
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default Dashboard;
