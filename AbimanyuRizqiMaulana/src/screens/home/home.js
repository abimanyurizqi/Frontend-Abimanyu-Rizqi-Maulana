import React, { Component } from 'react';
import { View, Text, FlatList, RefreshControl, Dimensions, StatusBar, Image } from 'react-native';
import { connect } from 'react-redux';
import { getContact } from '../../actions/contact';
import { Card, CardItem, ListItem, Button, Content, Container, Body, Left, Thumbnail, Icon } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import {
    SCLAlert,
    SCLAlertButton
} from 'react-native-scl-alert'


function CardDataList({ contactList, onPress }) {

    return (
        <Card style={{ borderRadius: 8 }}>
            <ListItem onPress={() => onPress(contactList)} >
                <Left>
                    <Thumbnail circular source={{ uri: contactList.photo !== 'N/A' ? contactList.photo : 'https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg' }} />
                    <View style={{ paddingLeft: 15, paddingVertical: 15 }}>
                        <Text style={{ fontFamily: "sans-serif-medium", fontSize: 15, color: "grey" }}>{contactList.firstName} {contactList.lastName}</Text>
                    </View>
                </Left>
            </ListItem>
        </Card>
    );
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            message: '',
            show: false
        }
    }

    componentDidMount() {
        this.reload();
    }


    componentDidUpdate(prevProps, prevState) {
        const { data, error, saveData } = this.props;
        if (prevProps.data !== data) {
            this.setState({ data: data?.data });
            this.setState({ message: data?.message });


        } else if (error && prevProps.error !== error) {
            console.log(error);
        } else if (prevProps.saveData != saveData) {
            this.handleOpen();
        }
    }


    renderItem = ({ item }) => {
        return (
            <CardDataList contactList={item} onPress={this.onShowDetail} />
        );
    }

    handleOpen = () => {
        this.setState({ show: true })
    }

    handleClose = () => {
        this.setState({ show: false })
    }


    reload = () => {
        this.props.getContact();
    }

    onShowDetail = (item) => {
        this.props.navigation.navigate('ContactDetail', item ? { id: item.id } : null);
    }

    render() {
        const { data } = this.state;
        const { loading } = this.props;
        return (

            <Container>
                <View style={{ backgroundColor: "#7F58FF", width: screen.width / 1, height: screen.height / 5 }} >
                    <View style={{ justifyContent: "center", alignItems: "center", paddingTop: screen.height / 45 }}>
                        <Image source={require('../../../assets/images/header.png')} style={{
                            width: 210,
                            height: 140
                        }} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: screen.width / 1.3, alignSelf: "center", height: screen.height / 6, paddingTop: screen.height / 30 }}>
                    <View style={{ padding: 10, width: 150, height: 120 }}>

                        <Card style={{ flex: 1, padding: 10, borderRadius: 10 }}>
                            <Icon type="FontAwesome" name="phone" />
                            <Text style={{ fontSize: 20 }}>
                                Recent Call
                        </Text>
                        </Card>
                    </View>
                    <View style={{padding: 10, width: 150, height: 120 }}>

                        <Card style={{ flex: 1, padding: 10, borderRadius: 10 }}>
                            <Icon type="FontAwesome" name="heart" style={{ color: '#FF5145' }} />
                            <Text style={{ fontSize: 20 }}>
                                Favorite
                        </Text>
                        </Card>
                    </View>



                </View>
                <View style={styles.ContactListView}>
                    <Text style={styles.fontContactHeader}>
                        Contacts List
                    </Text>
                </View>
                <View style={styles.ContactView}>
                    <SwipeListView style={styles.ContactList} showsVerticalScrollIndicator={false} refreshControl={
                        <RefreshControl refreshing={loading} onRefresh={this.reload} />
                    }
                        data={data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index} />
                </View>
                <View>
                    <SCLAlert
                        theme="info"
                        show={this.state.show}
                        title="Success"
                        subtitle="Your data has been added"
                    >
                        <SCLAlertButton theme="info" onPress={this.handleClose}>Done</SCLAlertButton>
                    </SCLAlert>
                </View>

            </Container>


        );
    }
}

const mapStateToProps = state => ({
    data: state.gotContact.data,
    loading: state.gotContact.loading,
    error: state.gotContact.error,

    saveData: state.savedContact.data,
    error: state.savedContact.error


});

const mapDispatchToProps = {
    getContact
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);