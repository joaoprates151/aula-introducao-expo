import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

import {useState} from 'react'


function Exemplo5()
{

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [total, setTotal] = useState(0)

    function Soma()
    {
        setTotal(parseInt(n1) + parseInt(n2))
    }
    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>Exemplo 05</Text>
           
            <Text style= {styles.txtSaida}>Calculadora Básica</Text>

            <Text style= {styles.textLabel}>1° número</Text>
            <TextInput style= {styles.txtEntrada}
            onChangeText={(entrada) => setN1(entrada)}></TextInput>

            <Text style= {styles.txtSaida}>+</Text>

            <Text style= {styles.textLabel}>2° número</Text>
            <TextInput style= {styles.txtEntrada}
            onChangeText={(entrada) => setN2(entrada)}></TextInput>

            <Text style= {[styles.txtSaida, {margin: 0}]}>=</Text>
            <Text>Total</Text>
            <TextInput style= {styles.txtEntrada}
            value={total.toString()} editable={false}></TextInput>

            <TouchableOpacity style= {styles.Button} onPress={
                () => Soma()}>
            <Text style= {styles.textButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Exemplo5