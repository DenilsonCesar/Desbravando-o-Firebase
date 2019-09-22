import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../pages/Login';
import Register from '../pages/cadastro'
import Main from '../pages/main'

const AppNavigator = createStackNavigator({
    Login: {
      screen: Login, 
      navigationOptions : {
        header: null
      }
    },
    Register: {
        screen: Register,
        navigationOptions : {
          headerTintColor: '#fff' ,
          headerStyle: {
            backgroundColor: '#333',
          }
        }
    },
    Main: {
      screen: Main, 
      
    },
  });
  
  export default createAppContainer(AppNavigator);

