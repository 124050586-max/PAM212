import React, {useRef, useMemo } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function BottonSheet() {
  const bottomSheetRef = useRef(null);
  const snap = useMemo(() => [1, '25%', '50%']);

  const openSheet = () =>{
    bottomSheetRef.current?.expand();
  };

  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <Button title='Abrir' onPress={abrir}/>
    </View>
    <BottomSheet
      ref = {bottomSheetRef}
      snapPoints = {snap}
      enablePanDownToClose = {true}
      backgroundStyle = {styles.BSheet}
      >
        <BottomSheetView>
          <Text style = {styles.BText}>BottomSheet</Text>
          <Image
            style={style.IMG}
            source={require('../assets/iphone 17.jpeg')} 
            />
        </BottomSheetView>
    </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BSheet:{
    backgroundColor:'#840081ff'
  },
  BText:{
    fontSize: 50
  }
});