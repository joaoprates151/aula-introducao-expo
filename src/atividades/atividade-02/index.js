import {View, Text, Image} from 'react-native';
import styles from './styles';
import { useState } from 'react';

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
                <Mensagem titulo="Camisa Branca" subtitulo="Camisa Branca Normal" preco="R$39,90" camisa = {camisabranca}/>
                <Mensagem titulo="Camisa Preta" subtitulo="Camisa Preta Normal" preco="R$39,90" camisa = {camisapreta}/>
                <Mensagem titulo="Camisa Azul" subtitulo="Camisa Azul Normal" preco="R$39,90" camisa = {camisaazul}/>
                <Mensagem titulo="Camisa Vermelha" subtitulo="Camisa Vermelha Normal" preco="R$39,90" camisa = {camisavermelha}/>
            </View>
        </>
        
    )
}

export default Atividade02