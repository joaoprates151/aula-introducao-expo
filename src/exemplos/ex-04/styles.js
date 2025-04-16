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
        color: '#054f77',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        
    },

    texto:
    {
        fontSize: RFPercentage(2.2),
        color: '#fff',
        
    },

    h1: 
    {
        fontSize: RFPercentage(2.2),
        textAlign: 'left',
        margin: RFPercentage(1.5),
        marginLeft: RFPercentage(6),
        width: '100%',
        fontWeight: 'bold'
    },

    h2: 
    {
        fontSize: RFPercentage(2.2),
        marginTop: RFPercentage(2.2),
        fontWeight: 'bold'
    },

    quadrado:
    {
        backgroundColor: 'red',
        height: '40%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "8%",
        backgroundColor: '#d2b48c',
    },

    input:
    {
        borderWidth: RFPercentage(0.1),
        width: '90%',
        fontSize: RFPercentage(2),
        backgroundColor: '#fffaf0',
        borderRadius: RFPercentage(2),
        fontWeight: 'bold',
        padding: "7"
        
    },
    botao_contar:
    {
        marginTop: RFPercentage(2), 
        backgroundColor: '#054f77',
        width: '50%',
        height: RFPercentage(4),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles