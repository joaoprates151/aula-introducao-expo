import { Children } from 'react';
import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    txtSaida:
    {
        margin: 6,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e91e63'
    },
    txtEntrada:
    {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#e91e63',
        height: 60,
        color: '#e53935',
        borderRadius: 10,
        marginTop: 10
    },
    Button:
    {
        backgroundColor: '#e91e63',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
        width: '21%',
        marginTop: 20
    },
    textButton:
    {
        fontSize: 22,
        color: '#ff80ab',
        textAlign: 'center'
    },

    ButtonZerar:
    {
        width: '95%',
        backgroundColor: '#e91e63',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
    },
    textLabel:
    {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c51162'
    },
    containerButton:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})

export default styles