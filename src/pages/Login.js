import React, { Component } from 'react';
import { Text, TouchableOpacity, StatusBar, Alert } from 'react-native'

import { Container, TextInputCad, ButtonLogin, TextButton } from '../styleds/mainStyles'

import firebase from 'firebase';

export default class pages extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }
    }

    Cadastrar =  () => {
       
        const { email, senha } = this.state;
            try{
                const user = firebase.auth();

                user.signInWithEmailAndPassword( email, senha );

                this.props.navigation.navigate('Main')
            }catch(err){
                switch(err.code){
                    case "auth/weak-password":
                        {Alert.alert('A senha precisa ter no minimo 6 caracteres')}
                    case "auth/password is invalid":
                        {Alert.alert('A senha está incorreta')}
                }
            }
        }
    render(){    
        return (
            <Container>
            <StatusBar backgroundColor="#333"  barStyle="light-content"/>
                <TextButton style={{marginBottom: 20}}>Bem-Vindo(a)</TextButton>
                <TextInputCad 
                    autoCapitalize='none'
                    value={ this.state.email }
                    onChangeText={ (email) => this.setState({email}) }
                    placeholder={'Digite seu e-mail'}/>
                <TextInputCad 
                    autoCapitalize='none'
                    secureTextEntry={true}
                    value={ this.state.senha }
                    onChangeText={ (senha) => this.setState({senha}) }
                    placeholder={'Digite sua senha'}/>
                <ButtonLogin 
                    onPress={this.Cadastrar}>
                    <TextButton>
                        Login
                    </TextButton>
                </ButtonLogin>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register') }
                >
                    <Text style={{ color: '#fff'}}>Ainda não tem cadastro? cadastre-se</Text>
                </TouchableOpacity>
            </Container>
        ) 
    }
}

