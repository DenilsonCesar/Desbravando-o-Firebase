import React, { Component } from 'react';

import { View, Text, Button, TextInput, TouchableOpacity, Alert } from 'react-native';

import { Container, TextInputCad, ButtonLogin, TextButton } from '../styleds/mainStyles'

import firebase from 'firebase';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            contato: ''
        }
    }

    //Para tira aviso q o firebase realtime ainda vai corrigir
    componentDidMount() { console.disableYellowBox = true;}

    deslogarUsuario = () => {
        const usuario = firebase.auth();
        usuario.signOut();
        
        this.props.navigation.navigate('Login', { email: '', senha: '' });
    }

    cadastrarUsuario = async () => {
        const { nome, sobrenome, contato } = this.state;

        try{
            const funcionario = await firebase.database().ref('Funcionarios');

            funcionario.push().set({ nome, sobrenome, contato });

            this.setState({
                nome: '',
                sobrenome: '',
                contato: ''
            })

            Alert.alert('Cadatro realizado com sucesso!')

        }catch(err){
            console.log(err);
        }
    }

  render() {
    return (
        <Container>
            <TouchableOpacity 
                onPress={ this.deslogarUsuario }>
                <Text style={{color: 'red'}}>Sair</Text>
            </TouchableOpacity>
            <TextButton 
                style={{
                    marginTop: 20, 
                    marginBottom: 30
                }}>Cadastro de Funcionarios
            </TextButton>
                <TextInputCad
                    autoCapitalize='none'
                    placeholder="Nome"
                    value={this.state.nome}
                    onChangeText={(nome) => this.setState({nome})}
                />
                <TextInputCad
                    autoCapitalize='none'
                    placeholder="Sobrenome"
                    value={this.state.sobrenome}
                    onChangeText={(sobrenome) => this.setState({sobrenome})}
                />
                <TextInputCad
                    autoCapitalize='none'
                    placeholder="Contato"
                    value={this.state.contato}
                    onChangeText={(contato) => this.setState({contato})}
                />
                <ButtonLogin
                    onPress={ this.cadastrarUsuario }>
                    <TextButton>Cadastrar</TextButton>
                </ButtonLogin>
        </Container>
    )
  }
}
