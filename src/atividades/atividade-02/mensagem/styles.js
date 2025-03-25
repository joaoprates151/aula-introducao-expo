import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    container: 
    {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: '#000',
        marginBottom: 20,
        borderRadius: 20,
        padding: 20
    },

    titulo:
    {
        fontSize: RFPercentage(2),
        width: '65%',


        
    },

    imagem:
    {
        height: RFPercentage(10),
       width: RFPercentage(15),
       height: RFPercentage(15),
       resizeMode: 'contain',
    }
})

export default styles