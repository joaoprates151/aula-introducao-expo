import {View, Text, Button, Alert, TouchableOpacity} from 'react-native';
import styles from './styles';

import {useState} from 'react'


function Exemplo3()
{

    const [num, setNum] = useState(0)

    function handleIncrementar()
    {
        setNum(num + 1)
    }
    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>Exemplo3</Text>
            <Text style= {styles.texto}>Variáveis vs State</Text>
            <View style= {styles.botao_alert}>
                <Button
                
                    onPress={() => {Alert.alert('Mensagem', 'Conteúdo',[
                        {
                            text: 'Cancel',
                            onPress: () => alert('Cancel Pressed'),
                            style: 'cancel',
                        },
                    ])}}
                    title="Alerta"
                    color="#14870c"
                    accessibilityLabel="Mensagem de alerta"
                    
                />
            </View>

            <Text style= {styles.valor}>{num}</Text>

            <TouchableOpacity style= {styles.botao_contar} onPress={handleIncrementar}>
                <Text style= {styles.titulo_btn}>Adicionar +1</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Exemplo3