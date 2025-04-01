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
                <Mensagem titulo="Camiseta Branca" subtitulo="Camiseta Branca " preco="R$39,90" camisa = {camisabranca}/>
                <Mensagem titulo="Camiseta Preta" subtitulo="Camiseta Preta " preco="R$40,90" camisa = {camisapreta}/>
                <Mensagem titulo="Camiseta Azul" subtitulo="Camiseta Azul " preco="R$29,90" camisa = {camisaazul}/>
                <Mensagem titulo="Camiseta Vermelha" subtitulo="Camiseta Vermelha " preco="R$19,90" camisa = {camisavermelha}/>
            </View>
        </>
        
    )
}

export default Atividade02