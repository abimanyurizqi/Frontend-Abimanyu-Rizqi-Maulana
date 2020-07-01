import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { findContact, saveContact, deleteContact } from '../../actions/contact';
import { Button, Form, Label, Item, Input, Card, CardItem, Body, Container, Content } from 'native-base';

import {
    SCLAlert,
    SCLAlertButton
} from 'react-native-scl-alert'
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import { showError } from '../../utils/toast';

const screen = Dimensions.get("window");

class Contact extends Component {

    constructor(props) {
        super(props);
        const { route } = this.props;
        this.state = {
            id: route.params?.id,
            firstName: '',
            lastName: '',
            age: '',
            photo: '',
            show: false
        }
    }

    componentDidMount() {
        const { id } = this.state;
        this.props.findContact(id);
    }

    componentDidUpdate(prevProps, prevState) {
        const { data, error, saveData, errorDelete, errorSave } = this.props;
        if (prevProps.data !== data) {
            this.setState({ ...data?.data });
        }else if(prevProps.saveData !== saveData){
            this.handleOpen();
        }else if(errorDelete && prevProps.errorDelete !== errorDelete){
            showError(errorDelete);   
        } else if( errorSave && prevProps.errorSave !== errorSave){
            showError(errorSave);  
        }
    }



    handleOpen = () => {
        this.setState({ show: true })
    }

    handleClose = () => {
        this.setState({ show: false })
        this.props.navigation.navigate('ContactDetail', {id: this.state.id});    
    }

    onChange = (name, value) => {
        this.setState({ [name]: value });
    };

    onSubmit = () => {
        this.props.saveContact(this.state);
    }

    onDelete = () => {
        this.props.deleteContact(this.state.id);
    }

    render() {
        const { firstName, lastName, age, photo } = this.state
        const { loading } = this.props
        return (
            <Container>
                <Content>
                <CommonHeader navigation={this.props.navigation} />
                    <View style={{ alignItems: "center", paddingTop: screen.height / 5, paddingBottom: screen.height / 15 }}>
                        <Text style={{
                            fontFamily: "sans-serif-medium",
                            fontSize: 25,
                            color: "grey"
                        }}>
                            Edit Contact
                        </Text>
                        <Card style={{ width: screen.width / 1.1, borderRadius: 15 }}>

                            <Form style={{ padding: 25 }}>
                                <View>
                                    <Item floatingLabel>
                                        <Label >First Name</Label>
                                        <Input value={firstName} onChangeText={value => this.onChange('firstName', value)} />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label >Last Name</Label>
                                        <Input value={lastName} onChangeText={value => this.onChange('lastName', value)} />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label >Age</Label>
                                        <Input value={age.toString()} keyboardType="number-pad" onChangeText={value => this.onChange('age', value)} />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label >Photo</Label>
                                        <Input value={photo} onChangeText={value => this.onChange('photo', value)} />
                                    </Item>
                                </View>
                            </Form>

                        </Card>
                    </View>
                    <View style={{ alignItems: "center" }}>

                        <Button onPress={this.onSubmit} disabled={loading} style={{ height: screen.height / 10, width: screen.width / 1.5, justifyContent: "center", borderRadius: 20, backgroundColor: "#7F58FF" }}>
                            <Text style={{ alignSelf: "center", fontSize: 25, color: "#fff", fontFamily: "sans-serif-medium" }}>Save</Text>
                        </Button>
                    </View>
                    <View style={{ alignItems: "center", paddingTop: 10 }}>
                        <Button onPress={this.onDelete} disabled={loading} style={{ height: screen.height / 10, width: screen.width / 1.5, justifyContent: "center", borderRadius: 20, backgroundColor: "#7F58FF" }}>
                            <Text style={{ alignSelf: "center", fontSize: 25, color: "#fff", fontFamily: "sans-serif-medium" }}>Delete</Text>
                        </Button>
                    </View>
                    <View>
                        <SCLAlert
                            theme="info"
                            show={this.state.show}
                            title="Success"
                            subtitle="Your data has been saved"
                        >
                            <SCLAlertButton theme="info" onPress={this.handleClose}>Done</SCLAlertButton>
                        </SCLAlert>
                    </View>
                </Content>

            </Container>
        );
    }
}

const mapStateToProps = state => ({
    data: state.foundContact.data,
    loading: state.foundContact.loading || state.savedContact.loading,
    error: state.foundContact.error,

    saveData: state.savedContact.data,
    errorSave: state.savedContact.error,

    deleteData: state.deletedContact.data,
    errorDelete: state.deletedContact.error,

});

const mapDispatchToProps = {
    findContact, saveContact, deleteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);