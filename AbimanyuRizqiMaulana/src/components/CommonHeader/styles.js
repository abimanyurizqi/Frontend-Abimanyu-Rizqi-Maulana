import {StyleSheet, Dimensions} from 'react-native';

screen = Dimensions.get("window");

const styles = StyleSheet.create({
    Header : {
        backgroundColor: '#7F58FF',
        height: screen.height / 15.5,
    },
    title :{
        alignSelf : 'center'
    }
});

export default styles;
