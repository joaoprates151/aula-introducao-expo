import {View, Text, ImageBackground} from 'react-native'
import styles from './styles'
import imagem from '../../assets/002-1-react-native.png'

function Sobre()
{
    return(
        <View style={styles.container}>
            <ImageBackground 
            style={styles.imagem} 
            source={imagem} 
            imageStyle={{opacity: 0.5}}
            resizeMode='contain'>
                <Text style= {styles.titulo}>Sobre</Text>
                <Text style={styles.texto}>Aula de React-Native com Expo</Text>
                <Text style={styles.texto}>Exemplos com Node</Text>
            </ImageBackground>
        </View>
    )
}

export default Sobre