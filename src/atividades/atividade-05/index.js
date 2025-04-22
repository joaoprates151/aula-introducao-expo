import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import styles from './styles';

import {useState} from 'react'


function Atividade5()
{

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [total, setTotal] = useState(0)

    function Soma()
    {
        setTotal(parseInt(n1) + parseInt(n2))
    }

    function Subtracao()
    {
        setTotal(parseInt(n1) - parseInt(n2))
    }

    function Multiplicacao()
    {
        setTotal(parseInt(n1) * parseInt(n2))
    }

    function Zerar()
    {
        setTotal(0)
        setN1(0)
        setN2(0)
    }

    function Divisao()
    {
        if(n1 == 0 || n2 == 0)
        {
            Alert.alert('Título', 'Divisão por 0', [
                {text: 'OK'}
              ]);
            Zerar()
            return
        }
        setTotal(parseInt(n1) / parseInt(n2))
    }
    return(
        <View style={styles.container}>
            <Text style= {styles.txtSaida}>Atividade 05</Text>
           
            <Text style= {styles.txtSaida}>Calculadora Básica</Text>

            <Text style= {styles.textLabel}>1° número</Text>
            <TextInput  style= {styles.txtEntrada}  
            value={n1} onChangeText={(entrada) => {
                const apenasNumeros = entrada.replace(/[^0-9]/g, '');
                setN1(apenasNumeros)} 
            }></TextInput>

            <Text style= {styles.txtSaida}>+</Text>

            <Text style= {styles.textLabel}>2° número</Text>
            <TextInput style= {styles.txtEntrada}
            value={n2} onChangeText={(entrada) => {
                const apenasNumeros = entrada.replace(/[^0-9]/g, '');
                setN2(apenasNumeros)}
            }></TextInput>

            <Text style= {[styles.txtSaida, {margin: 0}]}>=</Text>
            <Text>Total</Text>
            <TextInput style= {styles.txtEntrada}
            value={total.toString()} editable={false}></TextInput>

            <View style= {styles.containerButton}>
                <TouchableOpacity style= {styles.Button} onPress={
                    () => Soma()}>
                <Text style= {styles.textButton}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.Button} onPress={
                    () => Subtracao()}>
                <Text style= {styles.textButton}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.Button} onPress={
                    () => Divisao()}>
                <Text style= {styles.textButton}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.Button} onPress={
                    () => Multiplicacao()}>
                <Text style= {styles.textButton}>*</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style= {styles.ButtonZerar} onPress={
                    () => Zerar()}>
                <Text style= {styles.textButton}>Zerar</Text>
                </TouchableOpacity>
            
        </View>
    )
}

export default Atividade5