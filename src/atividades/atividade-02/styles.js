import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    container: 
    {
        backgroundColor: "#fff",
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    titulo:
    {
        fontSize: RFPercentage(2),
        color: '#000',
        fontWeight: 'bold',

        width: '100%',
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
        // height: RFPercentage(10),
       width: RFPercentage(15),
       height: RFPercentage(15),
       resizeMode: 'contain'
    }
})

export default styles