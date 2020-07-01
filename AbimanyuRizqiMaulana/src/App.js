import * as React from 'react';
import { Text, View } from 'react-native';

import store from './config/store';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { routes } from './config/routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

console.disableYellowBox = true;

const Stack = createStackNavigator();
export default function App() {
    
    return (

        <Provider store={store}>
            <Root>
                <NavigationContainer>
                    <Stack.Navigator headerMode="none">
                        {routes.map((route, index) =>
                            <Stack.Screen
                                key={index}
                                name={route.name}
                                component={route.component} />
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </Root>

        </Provider >
    );
}