import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import LoginContainer from '../containers/Login';

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: Detail,
    },
    Login: {
      screen: LoginContainer,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default createAppContainer(Routes);
