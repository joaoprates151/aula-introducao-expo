import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    container: 
    {
        width: "100%",

    },

    titulo_principal:
    {
        fontSize: RFPercentage(5),
        textAlign: 'center',
        marginBottom: 10
    },

    titulo:
    {
        fontSize: RFPercentage(2),
        color: '#000',
        fontWeight: 'bold',
        height: '20%',
        textAlign: 'center',
        textAlignVertical: 'center',
        
    },

    texto:
    {
        fontSize: RFPercentage(1.5),
        color: '#000',
    },

    imagem:
    {
        height: RFPercentage(10),
       width: RFPercentage(15),
       height: RFPercentage(15),
       resizeMode: 'contain'
    }
})

export default styles