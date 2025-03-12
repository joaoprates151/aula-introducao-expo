import { View, Text, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import styles from './styles'



const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

function Atividade1() {
    return (
        <>

            <View style={styles.container}>
                
               
               
                <Text style={styles.titulo}>Atividade 1</Text>
                <Text style={styles.texto}>Primeiro texto com a atividade</Text>
                
                <Image
                    style={styles.image}
                    source="https://picsum.photos/id/237/3000/2000"
                    placeholder={{ blurhash }}
                    contentFit="cover"
                    transition={1000}
                />
            </View>


        </>



    )
}

export default Atividade1