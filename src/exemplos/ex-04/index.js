import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'
import {useState} from 'react'

function Atividade04()
{
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [nomeC, setNomeC] = useState("")

    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>Atividade 04</Text>

            <View style= {styles.quadrado}>
            <Text style= {styles.h1}>Nome</Text>
            <TextInput style= {styles.input} value={nome} onChangeText={ (valor) => setNome(valor)}/>

            <Text style= {styles.h1}>Sobrenome</Text>
            <TextInput style= {styles.input} value={sobrenome} onChangeText={ (valor) => setSobrenome(valor)}/>
          
            <Text style= {styles.h2}>Nome completo: {nomeC}</Text>
            <TouchableOpacity style= {styles.botao_contar} onPress={ function() {
                setNomeC(nome + " " + sobrenome)
                setNome('')
                setSobrenome('')
            }}>
                <Text style= {styles.texto}>Exibir texto </Text> 
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Atividade04