import {View, Text} from 'react-native'
import styles from './styles'

function Exemplo1()
{
    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>Exemplo1</Text>
            <Text style={styles.texto}>Aula de React-Native com Expo</Text>
        </View>
    )
}

export default Exemplo1