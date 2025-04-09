import {View, Text, TextInput} from 'react-native'
import styles from './styles'
import {useState} from 'react'

function Exemplo4()
{
    const [txtInserido, setTxtInserido] = useState("")
    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>Exemplo4</Text>
            <Text style={styles.texto}>Aula de React-Native com Expo</Text>
            <TextInput style= {styles.input}/>
        </View>
    )
}

export default Exemplo4