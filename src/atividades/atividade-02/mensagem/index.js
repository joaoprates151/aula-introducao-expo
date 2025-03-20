import {View, Text, Image} from 'react-native'
import styles from './styles'



function Mensagem(props)
{
    return(
        <View style={styles.container}>
            <div>
            <Text style= {styles.titulo}>{props.titulo}</Text>
            <Text style={styles.texto}>{props.subtitulo}</Text>
            <Text style={styles.texto}>{props.preco}</Text>
            </div>
            <Image style={styles.imagem} source={props.camisa}></Image>
        </View>
    )
}

export default Mensagem