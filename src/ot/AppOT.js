import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './OTHome';
import Details from './OTDetails';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Details: { screen: Details },
});

const App = createAppContainer(MainNavigator);

export default App;
