import {View, Text, Image} from 'react-native'
import styles from './styles'



function Mensagem(props)
{
    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>{props.titulo}  {props.subtitulo}  <Text style= {styles.preco}>{props.preco}</Text></Text>
            <Image style={styles.imagem} source={props.camisa}></Image>
        </View>
    )
}

export default Mensagem