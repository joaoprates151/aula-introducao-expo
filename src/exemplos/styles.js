import {StyleSheet} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titulo: 
    {
        fontSize: RFValue(20),
        fontWeight: 'bold',
        color: 'deepskyblue',
        marginTop: RFValue(10),
        marginBottom: RFValue(20)
    },
    botao:
    {
        alignItems: 'center',
        borderWidth: RFValue(1),
        borderColor: 'deepskyblue',
        borderRadius: RFValue(2),
        borderRadius: RFValue(10),
        padding: RFValue(5),
        width: '80%',
        marginBlock: RFValue(10)
    }
})

export default styles