/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
// Client ID
// 496695355777-kuaqbrjsbpiuf077mvkjjme0n2vj8k6s.apps.googleusercontent.com
import {GoogleSignin, statusCodes} from 'react-native-google-signin';

GoogleSignin.configure({
  androidClientId:
    '496695355777-kuaqbrjsbpiuf077mvkjjme0n2vj8k6s.apps.googleusercontent.com',
  // iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
});

export const Login = () => {
  const authenticateWithGoogle = async () => {
    console.log('yeeep');
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //If login is successful you'll get user info object in userInfo below I'm just printing it to console. You can store this object in a usestate or use it as you like user is logged in.
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('You cancelled the sign in.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google sign In operation is in process');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services not available');
      } else {
        console.log(
          'Something unknown went wrong with Google sign in. ' + error.message,
        );
      }
    }
  };
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hola soy Login</Text>
      <Button
        onPress={() => authenticateWithGoogle()}
        title="Login With Google"
      />
    </View>
  );
};
