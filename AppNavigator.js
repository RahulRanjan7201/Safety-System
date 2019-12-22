import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});
const AppNav = createAppContainer(AppNavigator);

export default AppNav;