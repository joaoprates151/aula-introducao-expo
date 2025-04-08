import { Children } from 'react';
import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    container: 
    {
        backgroundColor: "#fff",
        padding: 8,
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 20,
    },

    titulo:
    {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: '10%',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'deepskyblue',
    },

    texto:
    {
        fontSize: RFPercentage(2.2),
        color: 'deepskyblue',
    },

    botao_alert:
    {
        margin: RFPercentage(1.5), 
        width: '100%',
    },

    valor:{
        fontSize: RFPercentage(3),
        marginBottom: RFPercentage(1.5),
        color: '#ff8c00',
        marginTop: '10%',
        margin: '20',
        marginBottom: '40'
    },

    botao_contar:
    {
        backgroundColor: 'red',
        width: '50%',
        height: RFPercentage(4),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo_btn:
    {
        fontSize: RFPercentage(2.5),
        color: '#fff'
    },

    grupo: 
    {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },

    botao:
    {
        backgroundColor: 'black',
        width: '50%',
        height: RFPercentage(4),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',

    }
})

export default styles