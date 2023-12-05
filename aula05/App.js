import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // é importante ter isso em todas as conexões que fizer

const firebaseConfig = {
  apiKey: "AIzaSyBBwLgFh27il7D7ISY5AOCsnJ3pW-dafRY",
  authDomain: "meuprimeirofirestore-162de.firebaseapp.com",
  projectId: "meuprimeirofirestore-162de",
  storageBucket: "meuprimeirofirestore-162de.appspot.com",
  messagingSenderId: "461983843775",
  appId: "1:461983843775:web:a2287343e67650845d8d0a" // são dados de acessos pessoais.
};


firebase.initializeApp(firebaseConfig); //todas as constantes para iniciar o apk


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => { 
    const fetchData = async () => { 
      const pessoasCollection = firebase.firestore().collection('pessoas'); // solicitação
      const snapshot = await pessoasCollection.get(); // resposta do servidor

      const data = [];
      snapshot.forEach((doc) => { // arrew
        data.push({ id: doc.id, ...doc.data() }); //doc data = dados de dentro de cada documento
      });

      setNomes(data); // guardando informações
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome} {item.sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}

