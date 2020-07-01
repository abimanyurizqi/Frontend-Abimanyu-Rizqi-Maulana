import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Animated, TouchableHighlight} from 'react-native';
import { Icon, Content } from 'native-base';

const screen = Dimensions.get('window');

export default class AddButton extends Component{

    buttonSize = new Animated.Value(1)

    handlePress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.70,
                duration: 200
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1
            })
        ]).start();

        this.props.navigation.navigate('AddContact')
        
    };


    render(){
        const sizeStyle = {
            transform: [{scale: this.buttonSize}]
        }

        return(
            <View style={{ position : "absolute", alignItems: "center" }}>
                 <Animated.View style={[styles.button, sizeStyle]}>
                     <TouchableHighlight onPress={this.handlePress} underlayColor="#7F58FF">
                         <Animated.View>
                             <Icon type="FontAwesome" name="plus" size={24} style={{ color: '#ffff' }} />
                         </Animated.View>
                     </TouchableHighlight>
                 </Animated.View>
             </View>
        );
    }
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: "#7F58FF",
        alignItems: "center",
        justifyContent: "center",
        width: screen.width/5,
        height: screen.height/10,
        borderRadius: 42,
        position: "absolute",
        top: -60,
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFF"
    }
});