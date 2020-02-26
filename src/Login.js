import React,{Component} from 'react';
import {View, StyleSheet, Alert,Button, TextInput} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './Principal'


function Login({navigation}) {

  const [postUser, setPostUser] = React.useState('');
  const [postPass, getPostPass] = React.useState('');
  return (
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Iniciar  sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'
                             value={postUser}
                             onChangeText={setPostUser}/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                  type='text'
                   value={postPass}
                   onChangeText={getPostPass}/>
                </Item>
              </Body>
            </CardItem>
            <CardItem>
            <Button
              onPress={() => navigation.navigate('Principal',{pass:postUser,user:postPass})}
              style={misEstilos.boton}
              title="Ingresar"
            />
            </CardItem>
            <CardItem footer bordered style = {misEstilos.container}>
            <Button 
            
            onPress={() => navigation.navigate('Registro')}  
            title="Registrarse"
              /> 
            </CardItem>
          </Card>

        </Content>
      </Container>
  );
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  body: {
    paddingVertical: 30,
  },
  container: {
        
        backgroundColor: 'blue',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    boton: {
    marginRight: '35%',
  },
});

export default Login;