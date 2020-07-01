import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { saveContact } from '../../actions/contact';
import { Form, Label, Item, Input, Button, Card, Container, Content } from 'native-base';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import { showError } from '../../utils/toast';




class AddContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            photo: '',
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { navigation, data, error } = this.props
        if (prevProps.data !== data) {
            navigation.navigate('Main');
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
    }

    onChange = (name, value) => {
        this.setState({ [name]: value });
    };


    onSubmit = () => {
        this.props.saveContact(this.state);
    }

    render() {
        const { firstName, lastName, age, photo } = this.state;
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
                            Add Contact
                    </Text>
                        <Card style={{ width: screen.width / 1.1, borderRadius: 15 }}>

                            <Form>
                                <View style={{ margin: 15, paddingBottom: 50 }}>
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
                                        <Label >Photo URL</Label>
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
                    
                </Content>

            </Container>
        );
    }
}

const mapStateToProps = state => ({
    data: state.savedContact.data,
    loading: state.savedContact.loading,
    error: state.savedContact.error

});

const mapDispatchToProps = {
    saveContact
};


export default connect(mapStateToProps, mapDispatchToProps)(AddContact);