import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    

    titulo:
    {
        fontSize: RFPercentage(2),
        color: '#000',
        fontWeight: 'bold',
        width: '100%',
        marginBottom: 2,
        textAlignVertical: 'center',
        paddingLeft: 20
        
    },

    texto:
    {
        color: "#000",
        fontSize: RFPercentage(2.2),
        marginBottom: 2,
        paddingLeft: 20
    }
})

export default styles