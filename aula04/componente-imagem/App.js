import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Pokemon = () => {
  return (
    <ScrollView>
    <View>
    <Text 
      style={{
        fontSize:45,
        alignSelf: "center",
        color: "green",
       }}
       >
        Snorlax Berrie
        </Text>
        <Image
        source={{
          uri: 'https://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png'
        }}
        style={{width:200, height: 210, alignSelf: "center" }}
        />

        </View>

        <TextInput
        style={{
          height:40,
          borderColor: 'gay',
          borderWidth: 1,
          pading: 5,
          margin:15
        }}
        defaultValue="Digite aqui macaco!: "

        /> 
    
    </ScrollView>
  )
}

export default Pokemon;