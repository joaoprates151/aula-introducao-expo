import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    container: 
    {
        backgroundColor: "#c0c0c0",
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
        borderWidth: 5,
        borderColor: 'red',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: '40%',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#000',
        borderRadius: 20,
        color: 'red',
    },

    texto:
    {
        fontSize: RFPercentage(2.2),
        color: 'red',
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
      },
})

export default styles