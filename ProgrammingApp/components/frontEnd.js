import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function FrontEnd(){
  return( 
    <View style={estilo.container}>
        <ScrollView>
        <Text style={estilo.titulo}> Front End </Text>
        <Text style={estilo.conceito}> Front end é a parte da programação responsável pela UI e pela UX(user interface e user experience), provendo uma interface visual que dialogará com o backend.
        </Text>

        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/frontend.webp')}/>
        <View style={estilo.linguagens}>
        <Text style={estilo.subtitulo}>
        Linguagens: </Text>


        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
         <Text style={estilo.tituloLista}>HTML:</Text> é a linguagem usada para criar e estruturar o conteúdo da página da web.
        </Text>

        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
        <Text style={estilo.tituloLista}>CSS:</Text> é uma linguagem de estilo usada para definir a aparência visual e o layout da página da web.
        </Text> 

        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
        <Text style={estilo.tituloLista}>JavaScript:</Text> é uma linguagem de programação que é usada para tornar a página da web interativa e dinâmica.
        </Text> 
      
        <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
        <Text style={estilo.tituloLista}>TypeScript:</Text> é uma linguagem de programação baseada em JavaScript que fornece recursos adicionais para tornar o desenvolvimento de aplicativos da web mais seguro e escalonável. </Text> 


        <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
       <Text style={estilo.tituloLista}>CoffeeScript:</Text> é uma linguagem de programação que é compilada em JavaScript e fornece uma sintaxe mais concisa e elegante.
       </Text> 

       <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
      <Text style={estilo.tituloLista}>Dart:</Text> é uma linguagem de programação desenvolvida pela Google que é usada para criar aplicativos da web e móveis.
       </Text> 

       <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
       <Text style={estilo.tituloLista}> Kotlin:</Text> é uma linguagem de programação desenvolvida pela JetBrains que é usada para criar aplicativos da web e móveis.
       </Text> 

<Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
     <Text style={estilo.tituloLista}> Vue.js:</Text> é um framework de JavaScript usado para criar aplicativos da web com uma interface de usuário interativa e dinâmica.
       </Text> 

       <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
      <Text style={estilo.tituloLista}>React:</Text> é um framework de JavaScript usado para criar aplicativos da web escaláveis e reutilizáveis com uma interface de usuário rápida e responsiva.
       </Text> 
        </View>
        </ScrollView>
    </View>

  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor:'#fff',
  },

  conceito:{
  fontSize: 18,
  textAlign: 'justify',
  margin: 15
  },

  titulo: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30,
    color: '#00008b'
  },

  subtitulo:{
  fontSize: 25,
  marginBottom: 20,
  marginLeft: 20,
  color: '#00008b'
  },

  topicos:{
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 50,
  },

  img:{
    width: largura -20,
    height: 200,
    borderRadius: 30,
    margin: 10,
  },

  linguagens:{
    flex:1,
    justifyContent:'space-between',
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 30,
  },
  tituloLista:{
    color: '#800080',
    fontSize: 24,
  }
})