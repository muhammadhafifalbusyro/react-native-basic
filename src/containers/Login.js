import React, {Component} from 'react';
import {View, Button, Alert} from 'react-native';
import {Input, SwitchStyled} from '../components';
import {Formik} from 'formik';
import {validationSchema} from '../validations/authValidation';

export default class LoginContainer extends Component {
  render() {
    const signUp = ({email}) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'a@a.com') {
            reject(new Error('Email telah digunakan'));
          }
          resolve(true);
        }, 1000);
      });
    };
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          agreeToTerms: false,
        }}
        onSubmit={(values, actions) => {
          signUp({email: values.email})
            .then(() => {
              Alert.alert(JSON.stringify(values));
            })
            .catch(error => console.log(error))
            .finally(() => {
              actions.setSubmitting(false);
            });
        }}
        validationSchema={validationSchema}>
        {formikProps => (
          <View>
            <Input
              placeholder="yusufadinata@example.com"
              textTitle="Email"
              formikProps={formikProps}
              formikKey="email"
            />
            <Input
              placeholder="password"
              textTitle="Password"
              secureTextEntry
              formikProps={formikProps}
              formikKey="password"
            />
            <Input
              placeholder="confirm password"
              textTitle="Confirm Password"
              secureTextEntry
              formikProps={formikProps}
              formikKey="confirmPassword"
            />
            <SwitchStyled
              textTitleSwitch="Agree to Terms"
              formikProps={formikProps}
              formikKey="agreeToTerms"
            />
            <Button title="Submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    );
  }
}
