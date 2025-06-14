import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

// Sobre
import Sobre from './src/sobre';

// Exemplos
import Exemplos from './src/exemplos';
import Exemplo1 from './src/exemplos/ex-01';
import Exemplo2 from './src/exemplos/ex-02';
import Exemplo3 from './src/exemplos/ex-03';
import Exemplo4 from './src/exemplos/ex-04';
import Exemplo5 from './src/exemplos/ex-05';
import Exemplo6 from './src/exemplos/ex-06';
import Exemplo8 from './src/exemplos/ex-08';


// Atividades
import Atividades from './src/atividades';
import Atividade1 from './src/atividades/atividade-01';
import Atividade02 from './src/atividades/atividade-02';
import Atividade3 from './src/atividades/atividade-03';
import Atividade04 from './src/exemplos/ex-04';
import Atividade5 from './src/atividades/atividade-05';
import Atividade6 from './src/atividades/atividade-06';
import Container from './src/rotas/container_navegacao';


export default function App() {
  return (
    <View style={styles.container}>
      <Container />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight || 8,
  },

});
