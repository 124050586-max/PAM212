import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import TextInputScreen from './TextInputScreen';
import ScrollView from './ScrollView';
import ImageBackgroung from './ImageBackgroung';
import ActivityIndicator from './ActivityIndicator';
import FlatList from './FlatList';
import Modal from './Modal';
import BottonSheet from './BottonSheet';
import BotonesScreen from './Botones/BotonesScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'textInput':
      return <TextInputScreen />;
    case 'ImageBackgroung':
      return <ImageBackgroung />;
    case 'ScrollView':
      return <ScrollView />;
    case 'activityIndicator':
      return <ActivityIndicator />;
    case 'flatList':
      return <FlatList />;
    case 'Modal':
      return <Modal />;
    case 'bottomSheet':
      return <BottomSheetScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.texto}>Menú de Prácticas</Text>
          <View style={styles.contenedorBotones}>
            <Button color="blue" onPress={() => setScreen('contador')} title="Contador" />
            <Button color="blue" onPress={() => setScreen('botones')} title="Botones" />
            <Button color="blue" onPress={() => setScreen('textInput')} title="TextInput" />
            <Button color="blue" onPress={() => setScreen('ImageBackgroung')} title="ImageBackgroung" />
            <Button color="blue" onPress={() => setScreen('ScrollView')} title="ScrollView" />
            <Button color="blue" onPress={() => setScreen('activityIndicator')} title="ActivityIndicator" />
            <Button color="blue" onPress={() => setScreen('flatList')} title="FlatList" />
            <Button color="blue" onPress={() => setScreen('Modal')} title="Modal" />
            <Button color="blue" onPress={() => setScreen('bottonSheet')} title="BottonSheet" />
            <Button color="blue" onPress={() => setScreen('botones')} title="BotonesScreen" />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1139ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contenedorBotones: {
    marginTop: 15,
    flexDirection: 'column',
    gap: 10,
    width: '100%',
  },
  texto: {
    color: '#00ffeeff',
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
});