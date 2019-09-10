import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../containers/Home';
import Detail from '../containers/Detail';

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: Detail,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default createAppContainer(Routes);
