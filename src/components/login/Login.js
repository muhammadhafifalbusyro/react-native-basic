import React from 'react';
import {View, Button} from 'react-native';
import {Input} from '../index';

const Login = ({
  onChangeEmail,
  onChangePassword,
  onSubmit,
  textAlertEmail,
  textAlertPassword,
}) => {
  return (
    <View>
      <Input
        placeholder="yusufadinata@example.com"
        textTitle="Emails"
        onChangeText={onChangeEmail}
        textAlert={textAlertEmail}
        autoFocus
      />
      <Input
        placeholder="password"
        textTitle="Password"
        onChangeText={onChangePassword}
        secureTextEntry
        textAlert={textAlertPassword}
      />
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};

export default Login;
