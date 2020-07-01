import React from 'react';
import { View, Image, Dimensions, StatusBar } from 'react-native';
import { StyleSheet } from "react-native";
import { Content } from 'native-base';

const screen = Dimensions.get("window");

class SplashScreen extends React.Component {
    performTimeConsumingTask = async () => {
        return new Promise(resolve =>
            setTimeout(() => {
                resolve('result');
            }, 2000),
        );
    };

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate('Main');
        }
    }

    render() {

        return (
            
            <View style={styles.viewStyles} >
                <StatusBar backgroundColor="#7F58FF" />
                <Image
                    source={require('../../../assets/images/noimage.jpg')}
                    style={styles.image} >
                </Image>
                {/* <Text style={{ textAlign: "center", fontSize: 18, paddingBottom: 30 }}>@Copyright</Text> */}
            </View>

        );
    }
}

const styles = StyleSheet.create({

    viewStyles: {
        flex: 1,
        backgroundColor: '#7F58FF'
    },
    image: {

        width: screen.width / 1.2,
        height: screen.height / 2.2,
        marginTop: screen.height / 4,
        alignSelf: "center"

    }
});

export default SplashScreen;