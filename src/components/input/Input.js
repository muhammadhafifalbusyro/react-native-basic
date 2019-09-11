import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({
  formikProps,
  formikKey,
  placeholder,
  textAlert,
  textTitle,
  ...res
}) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{textTitle}</Text>
      <TextInput
        style={inputStyles}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        placeholder={placeholder}
        {...res}
      />
      <Text style={styles.alert}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  alert: {
    color: 'red',
  },
  textTitle: {
    marginBottom: 3,
  },
});

export default Input;
