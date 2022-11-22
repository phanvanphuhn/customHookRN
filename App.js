/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useFetch } from './src/hooks/useFetch';

const App = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch('');

  return (
    <View>
      <Text>
        Custom Hook App
      </Text>
    </View>
  );
};

export default App;
