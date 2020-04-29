import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';


export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: ''
        }
    }

    userRegister = () => {
        const {userName} = this.state;
        const {userEmail} = this.state;
        const {userPassword} = this.state;
        //alert('ok');
    }
    
    render () {
        return (
            <View>
                <TextInput style={styles.TextInputStyle}
                    placeholder='Enter username'
                    onChangeText = {userName => this.setState({userName})}
                />
                <TextInput style={styles.TextInputStyle}
                    placeholder='Enter email'
                    onChangeText = {userEmail => this.setState({userEmail})}
                />
                <TextInput style={styles.TextInputStyle}
                    placeholder='Enter password'
                    onChangeText = {userPassword => this.setState({userPassword})}
                />
                <Button 
                    title='signup'
                    color='magenta'
                    onPress = {this.userRegister}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    TextInputStyle: {
        borderWidth: 1,
        height: 40,
        marginVertical: 10,
        marginHorizontal: 10,
        borderBottomColor: 'black',
    }
})

