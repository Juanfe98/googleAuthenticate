/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import {Login} from './src/screens/Login';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login />
    </SafeAreaView>
  );
};

export default App;
