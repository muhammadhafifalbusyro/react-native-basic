import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Password terlalu sedikit')
    .max(10, 'Lebih baik kurang dari 10 karakter'),
  confirmPassword: yup
    .string()
    .label('Confirm Password')
    .required()
    .test('passwords-match', 'password tidak cocok', function(value) {
      return this.parent.password === value;
    }),
  agreeToTerms: yup
    .boolean()
    .label('Terms')
    .test('is-true', 'Perjanjian harus disetujui', value => value === true),
});
