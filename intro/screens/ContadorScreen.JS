// 1. Import: zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

// 2. Main: zona de ejecucion o componentes
export default function App() {

  const [contador, setContador] = useState(0);
  return (

    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="green" title='Incrementar' onPress={()=>setContador(contador + 1)}/>
      <Button color="orange" title='Desincrementar' onPress={()=>setContador(contador - 1)}/>
      <Button color="brown" title='Reiniciar' onPress={()=>setContador(0)}/>
      <StatusBar style="auto" />
      </View>

    </View>

  );
}

// 3. Styles: zona de estilos
const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#de0a0aff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    color: '#2927b9ff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',// negrita
    fontStyle: 'italic',// letras acostadas
    textDecorationLine: 'line-through',// subrayado
  },

  texto2:{
    color: '#15e41cff',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: '400',// negrita
    textDecorationLine: 'underline',// subrayado
  },

  contenedorBotones:{
    marginTop: 15,
    flexDirection: 'row',
    gap: 20,
  }
});