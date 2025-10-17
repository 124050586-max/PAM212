import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import TextImput from './TextImput';
import ScrollView from './ScrollView';
import ImageBackgroung from './ImageBackgroung';
import ActivityIndicator from './ActivityIndicator';
import FlatList from './FlatList';
import modal from './Modal';
import BottonSheet from './BottonSheet';
import BotonesScreen from './Botones/BotonesScreen';

export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');
    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'EntradaTexto':
            return <TextImput/>;
        case 'ScrollView':
            return <ScrollView/>;
        case 'ImageBackgroung':
            return <ImageBackgroung/>;
        case 'ActivityIndicator':
            return <ActivityIndicator/>;
        case 'FlatList':
            return <FlatList/>;
        case 'Modal':
            return <Modal/>;
        case 'BottonSheet':
            return <BottonSheet/>;
        case 'menu':
            default:
                 return (
                     <View>
                     <Text>Menu de Practicas</Text>
                     <Button onPress={()=>setScreen('contador')} title='Pract: Contador'/>
                     <Button onPress={()=>setScreen('botones')} title='Pract: Botones'/>
                     <Button onPress={()=>setScreen('EntradaTexto')} title='Pract: Entrada de Texto'/>
                     <Button onPress={()=>setScreen('ScrollView')} title='Pract: ScrollView'/>
                     <Button onPress={()=>setScreen('ImageBackgroung')} title='Pract: Backgroung'/>
                     <Button onPress={()=>setScreen('ActivityIndicator')} title='Pract: Indicador de actividad'/>
                     <Button onPress={()=>setScreen('FlatList')} title='Pract: Lista Plana'/>
                     <Button onPress={()=>setScreen('Modal')} title='Pract: Modal'/>
                     <Button onPress={()=>setScreen('BottonSheet')} title='Pract: BottonSheet'/>                    
                     
                     </View>
    )

    }

}

const styles = StyleSheet.create({})