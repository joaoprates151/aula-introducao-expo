import {View, Text, Image} from 'react-native';
import styles from './styles';

import React from 'react';

import Mensagem from './mensagem';
import camisabranca from '../../../assets/camisa_branca.png'
import camisapreta from '../../../assets/camisa_preta.png'
import camisaazul from '../../../assets/camiseta_azul.png'
import camisavermelha from '../../../assets/camiseta_vermelha.png'



function Atividade02()
{
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.titulo_principal}> Atividade 02 </Text>
                <Mensagem titulo="Camisa Branca" subtitulo="Camisa Branca " preco="R$39,90" camisa = {camisabranca}/>
                <Mensagem titulo="Camisa Preta" subtitulo="Camisa Preta " preco="R$39,90" camisa = {camisapreta}/>
                <Mensagem titulo="Camisa Azul" subtitulo="Camisa Azul " preco="R$39,90" camisa = {camisaazul}/>
                <Mensagem titulo="Camisa Vermelha" subtitulo="Camisa Vermelha " preco="R$39,90" camisa = {camisavermelha}/>
            </View>
        </>
        
    )
}

export default Atividade02