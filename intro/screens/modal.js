import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

export default function modal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const abrirModal = () => {
    setModalVisible(true);
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // 2 segundos de carga
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setLoading(true); // reinicia la carga para la próxima apertura
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejemplo del componente Modal</Text>
      <Button title="Mostrar Modal" onPress={abrirModal} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cerrarModal}
        presentationStyle="pageSheet"
        statusBarTranslucent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <Text style={styles.modalText}>¡Hola! Este es un Modal.</Text>
            )}
            <Button title="Cerrar" onPress={cerrarModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEAEA',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
  },
});
   