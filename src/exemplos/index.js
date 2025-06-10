import {View, TouchableOpacity, Text} from 'react-native'

import styles from './styles'

export default function Exemplos()
{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplos</Text>

            <TouchableOpacity style={styles.botao}>
                <Text>Exemplo 01</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
            <Text>Exemplo 02</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
            <Text>Exemplo 03</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
            <Text>Exemplo 04</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
            <Text>Exemplo 05</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
            <Text>Exemplo 06</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
            <Text>Exemplo 07</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
            <Text>Exemplo 08</Text>
            </TouchableOpacity>
        </View>
    )
}