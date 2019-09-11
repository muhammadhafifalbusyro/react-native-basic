import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

const SwitchStyled = ({textTitleSwitch, formikProps, formikKey, ...rest}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{textTitleSwitch}</Text>
      <Switch
        value={formikProps.values[formikKey]}
        onValueChange={value => {
          formikProps.setFieldValue(formikKey, value);
        }}
        {...rest}
      />
      <Text style={styles.alert}>{formikProps.errors[formikKey]}</Text>
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

export default SwitchStyled;
