import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'
import {useState} from 'react'

function Exemplo4()
{
    const [txt, setTxt] = useState("")
    const [txtExibido, setTxtExibido] = useState("")
    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>Exemplo4</Text>
            <Text style={styles.texto}>{txt}</Text>
            <TextInput style= {styles.input} onChangeText={ (valor) => setTxt(valor)}/>


            <Text style= {styles.texto}>Exemplo envio dados click botão</Text>
            <Text>{txtExibido}</Text>
            <TouchableOpacity style= {styles.botao_contar} onPress={ () => setTxtExibido(txt)}>
                <Text>Exibir texto digitado</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Exemplo4