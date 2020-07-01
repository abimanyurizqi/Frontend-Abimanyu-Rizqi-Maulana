import {StyleSheet, Dimensions} from 'react-native';

screen = Dimensions.get("window");

const styles = StyleSheet.create({
    ContactListView: {
        paddingTop: screen.height/30,
        paddingLeft: screen.width/20,
        paddingBottom: screen.height/30
    },
    fontContactHeader:{
        fontFamily: "sans-serif-medium",
        fontSize: 25,
        color: "grey"
    },
    ContactView: {
        paddingBottom: screen.height/1.9,
        height: screen.height/1
    },
    ContactList: {
        width: screen.width/1.15,
        alignSelf: "center"
    }
});

export default styles;
