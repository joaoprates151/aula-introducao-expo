import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    container: 
    {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderWidth: 5,
        borderColor: '#000',
        marginBottom: 20,
        borderRadius: 20,
        padding: 20,
        backgroundColor: '#f2f3f4'

    },

    titulo:
    {
        fontSize: RFPercentage(2.5),
        width: '60%',

        display: 'flex',
        textAlignVertical: 'center',
        textAlign: 'left'
        
    },

   

    imagem:
    {
        height: RFPercentage(10),
       width: RFPercentage(15),
       height: RFPercentage(15),
       resizeMode: 'contain',
    },
    preco:
    {
        color: 'red',
        fontWeight: 'bold',
        textDecorationLine: "underline",
    }
})

export default styles