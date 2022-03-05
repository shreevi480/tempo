import * as React from 'react';
import DrawerNavigator from './Navigation/DrawerNavigation';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const SwitchNavigation = createSwitchNavigator({
  Dashboard:DrawerNavigator,
});

const AppContainer = createAppContainer(SwitchNavigation);

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}
