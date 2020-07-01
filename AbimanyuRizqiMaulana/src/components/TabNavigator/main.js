import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon, Content } from 'native-base';
import { AddButton } from '.';
import { TabNavigator } from '../../components/TabNavigator';
import { createAppContainer } from 'react-navigation';
import { Home } from '../../screens/home';
import { About } from '../../screens/about';

const Tab = createBottomTabNavigator();
class Main extends Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#7F58FF',
                    showIcon: true,
                    showLabel: false,
                    tabBarOnPress: (scene, jumpToIndex) => {
                        console.log('onPress:', scene.route);
                        jumpToIndex(scene.index);
                    },
                    style: {
                        backgroundColor: '#EEECF1'
                    }
                }} >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarIcon: ({ color }) => <Icon type='FontAwesome' style={{ color: color }} name='home' size={35} />,
                    }} />

                <Tab.Screen
                    name='add'
                    component = {Home}
                    options={{
                        tabBarIcon: ({ color }) => <AddButton navigation={this.props.navigation} />,
                    }} />

                <Tab.Screen
                    name='about'
                    component={About}
                    options={{
                        tabBarIcon: ({ color }) => <Icon type='FontAwesome' style={{ color: color }} name='user' size={35} />,
                    }} />


            </Tab.Navigator>
        );
    }
}

export default Main;

