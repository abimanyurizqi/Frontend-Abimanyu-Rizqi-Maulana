import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { findContact } from '../../actions/contact';
import { Button, Container } from 'native-base';
import CommonHeader from '../../components/CommonHeader/CommonHeader';


const screen = Dimensions.get('window');
class ContactDetails extends Component {

    constructor(props) {
        super(props);
        const { route } = this.props;
        this.state = {
            id: route.params?.id,
            firstName: '',
            lastName: '',
            age: '',
            photo: ''
        }
    }

    componentDidMount() {
        const { id } = this.state;
        this.props.findContact(id);
    }

    componentDidUpdate(prevProps, prevState) {
        const { data, error } = this.props;
        if (prevProps.data != data) {
            this.setState({ ...data?.data });
        }
    }

    render() {
        const { id, firstName, lastName, age, photo } = this.state
        return (
            <Container style={{ backgroundColor: '#f3f3f0' }}>
                <CommonHeader navigation={this.props.navigation} />
                <View style={{ paddingTop: screen.height / 10, paddingBottom: screen.height / 10 }}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={{ uri: photo !== 'N/A' ? photo : 'https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg' }} style={{
                            width: 150, height: 150, borderRadius: 100, borderWidth: 9,
                            borderColor: "#FFF", shadowColor: "#0000",
                            shadowRadius: 5,
                            shadowOffset: { height: 10 },
                            shadowOpacity: 0.3,

                        }} />
                        <View style={{ paddingTop: screen.height / 25 }}>
                            <Text style={{ fontFamily: 'sans-serif-medium', fontSize: 30, color: '#3a2157' }}>
                                {firstName} {lastName}
                            </Text>
                            <Text style={{ fontFamily: 'sans-serif-condensed', fontSize: 25, color: '#3a2157', alignSelf: "center"}}>
                                Friend
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingLeft: screen.width/10 ,paddingBottom: screen.height / 20, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flex: 1, padding: 10 }}>
                        <Text style={{fontSize: 20, color: '#3a2157'}}>
                            Age
                        </Text>
                        <Text style={{fontSize: 15, paddingTop: 10, color: '#3a2157'}}>
                            {age}
                        </Text>
                    </View>
                    <View style={{ flex: 1, padding: 10 }}>
                        <Text style={{fontSize: 20, color: '#3a2157'}}>
                        Phone Number
                        </Text>
                        <Text style={{fontSize: 15, paddingTop: 10, color: '#3a2157'}}>
                            +62 82-2150-29500
                        </Text>
                    </View>
                    
                </View>
            <View style={{alignItems: "center"}}>
                <Button style={{height: screen.height/10, width: screen.width/1.5, justifyContent: "center", borderRadius: 20, backgroundColor: "#7F58FF"}} onPress={() => this.props.navigation.navigate('Contact', { id: id })}>
                    <Text style={{alignSelf: "center", fontSize: 25, color:"#fff", fontFamily:"sans-serif-medium"}}> EDIT </Text>
                </Button>
            </View>
            </Container >
        );
    }
}

const mapStateToProps = state => ({
    data: state.foundContact.data,
    loading: state.foundContact.loading,
    error: state.foundContact.error

});

const mapDispatchToProps = {
    findContact
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);