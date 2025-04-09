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
        textAlign: 'center',
        textAlignVertical: 'center',
        
    },

    texto:
    {
        fontSize: RFPercentage(2.2),
        color: 'deepskyblue',
    },
    input:
    {
        borderWidth: RFPercentage(0.1),
        width: '100%',
        fontSize: RFPercentage(2),
        margin: RFPercentage(2),
        borderRadius: RFPercentage(2)
    }
})

export default styles