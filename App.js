import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationRef, isMountedRef } from './src/navigation/RootNavigation';
import AnnouncementView from './src/views/AnnouncementView'
import AnnouncementListView from './src/views/AnnouncementListView'

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode='none'
          initialRouteName="AnnouncementView" //FIXME
        >
          <Stack.Screen name='AnnouncementView' component={AnnouncementView} />
          <Stack.Screen name='AnnouncementListView' component={AnnouncementListView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
