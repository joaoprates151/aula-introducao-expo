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
        borderWidth: 2,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: '20%',
        textAlign: 'center',
        textAlignVertical: 'center',
        
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
        marginTop: '10%'
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
        fontSize: RFPercentage(2),
        color: '#fff'
    }
})

export default styles