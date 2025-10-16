//1. imports: zona de imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react'

//2. Main: zona de componentes
export default function App() {

  const [contador,setContador]=useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Contador: </Text>
      <Text style={styles.texto2}>{contador}</Text>
      <View style={styles.contenedorbotones}>
      <Button color="green"title="Incrementar" onPress={()=>setContador(contador+1)}/>
      <Button color="orange"title="Quitar" onPress={()=>setContador(contador-1)}/>
      <Button color="brown"title="Reiniciar" onPress={()=>setContador(0)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//3. zona de styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b0e3eff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#13e34eff',
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
    texto2:{
    color:'#00c3ffff',
    fontSize:40,
    fontFamily:'Courier',
    fontWeight:'400',
    textDecorationLine:'underline',
  },
  contenedorbotones:{
    marginTop:105,
    flexDirection:'row',
    gap:20,

  },
});