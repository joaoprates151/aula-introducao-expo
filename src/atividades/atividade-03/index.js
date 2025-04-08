import {View, Text, Button, Alert, TouchableOpacity} from 'react-native';
import styles from './styles';

import {useState} from 'react'


function Atividade3()
{

    const [num, setNum] = useState(0)

    function handleIncrementar()
    {
        setNum(num + 1)
    }

    function handleSubtrair()
    {
        setNum(num - 1)
    }

    function handleZerar()
    {
        setNum(0)
    }
    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>Atividade 03</Text>
            <View style= {styles.grupo}>
            <TouchableOpacity style= {styles.botao} onPress={handleSubtrair}>
                <Text style= {styles.titulo_btn}>-</Text>
            </TouchableOpacity>
             <Text style= {styles.valor}>{num}</Text>
             <TouchableOpacity style= {styles.botao} onPress={handleIncrementar}>
                <Text style= {styles.titulo_btn}>+</Text>
            </TouchableOpacity>
            </View>

            

            <TouchableOpacity style= {styles.botao_contar} onPress={handleZerar}>
                <Text style= {styles.titulo_btn}>Zerar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Atividade3