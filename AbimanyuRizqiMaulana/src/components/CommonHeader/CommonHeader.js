import React, {Component} from 'react';
import {Header, Title, Button, Left, Body, Right, Content, View, Text} from 'native-base';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


class CommonHeader extends Component {

    onBackPress = () => {
        this.props.navigation.goBack();
    };

    render() {
        const {navigation} = this.props;
        return (
            <Header style={styles.Header}
                    androidStatusBarColor="#7F58FF">
                <StatusBar backgroundColor="#7F58FF" />
                
                <Left style={{flex: 1}}>
                    <Button transparent onPress={this.onBackPress}>
                        <Icon name="chevron-left" size={20} color="#fff"/>
                    </Button>
                </Left>
                
            </Header>
        );
    }
}

CommonHeader.propTypes = {
  
    navigation: PropTypes.object.isRequired,
    
};

export default CommonHeader;
