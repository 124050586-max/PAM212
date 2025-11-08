import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Switch, Alert, StyleSheet } from 'react-native';

const ArticleCard = ({ article }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSwitch = () => {
    setShowAlert(true);
    Alert.alert(
      article.title,
      '¿Qué deseas hacer?',
      [
        { text: 'Compartir', onPress: () => console.log('Compartido') },
        { text: 'Guardar', onPress: () => console.log('Guardado') },
        { text: 'Cerrar', style: 'cancel' },
      ],
      {canselable: true}
    );
  };
  return (
    <View style={styles.container}>
    <Image source={{ uri: article.image }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.date}>{article.date}</Text>
      <Text style={styles.summary}>{article.summary}</Text>
      <Switch onValueChange={handleSwitch} value={false} />
    </View>
  );
};

const Section = ({ title, articles }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {articles.map((article, index) => (
      <ArticleCard key={index} article={article} />
    ))}
  </View>
);

export default function App() {
  const categories = {
    Deportes: [
      { title: 'Final de la Liga MX', date: '07/11/2025', summary: 'El América vence al Tigres en un partido epico.',image: "./messi adios.jpeg"},
      { title: 'Messi se retira', date: '06/11/2025', summary: 'El astro argentino anuncia su retiro definitivo.', image: "./messi adios.jpeg" },
    ],
    Entretenimiento: [
      { title: 'Crash lanza nuevo álbum', date: '07/11/2025', summary: 'El rapero mexicano sorprende con letras profundas.', image:"./crash.jpeg" },
      { title: 'Premios Ariel 2025', date: '06/11/2025', summary: '“La frontera invisible” gana mejor película.', image:"./images (1).jpeg" },
    ],
    Tecnologia: [
      { title: 'Nuevo iPhone 17', date: '07/11/2025', summary: 'Apple presenta su modelo más avanzado hasta ahora.', image:"./iphone 17.jpeg"},
      { title: 'IA revoluciona la medicina', date: '06/11/2025', summary: 'Nuevos algoritmos permiten diagnósticos más precisos.', image:"./iA.jpeg" },
    ],
  };

 return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>elaldoprogramandonolesabe</Text>
      </View>
      {Object.entries(categories).map(([category, articles], index) => (
        <Section key={index} title={category} articles={articles} />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, backgroundColor: '#001effff' },
  headerText: { color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  section: { padding: 10 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#f2f2f2', padding: 10, marginBottom: 10, borderRadius: 8 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 5 },
  date: { fontSize: 12, color: '#555' },
  summary: { fontSize: 14, marginVertical: 5 },
});
