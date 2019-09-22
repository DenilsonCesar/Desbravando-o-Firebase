import React, { Component } from 'react';

import { Container, TextInputCad, ButtonLogin, TextButton } from '../styleds/mainStyles';

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
    
    Cadastrar = () =>{
        
        const { name, email, senha } = this.state;
    
        try{
            const user = firebase.auth();
    
            user.createUserWithEmailAndPassword( email, senha );
        }catch(err) {
            console.log(err)
        } 
    }
    render(){
        return(
            <Container>
                <TextInputCad
                    autoCapitalize='none'
                    value={ this.state.nome }
                    onChangeText={ (nome) => this.setState({nome}) }
                    placeholder={'Nome'}
                />
                <TextInputCad
                    autoCapitalize='none'
                    value={ this.state.email }
                    onChangeText={ (email) => this.setState({email}) }
                    placeholder={'Email'}
                />
                <TextInputCad
                    autoCapitalize='none'
                    secureTextEntry={true}
                    value={ this.state.senha }
                    onChangeText={ (senha) => this.setState({senha}) }
                    placeholder={'Senha'}
                />
                <ButtonLogin
                    onPress={ this.Cadastrar }>
                    <TextButton>
                        Cadastra-se
                    </TextButton>
                </ButtonLogin>
            </Container>
        )
    }
}
