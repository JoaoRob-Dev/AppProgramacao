import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function BackEnd(){
  return( 
    <View style={estilo.container}>
        <ScrollView>
        <Text style={estilo.titulo}> Back End </Text>
        <Text style={estilo.conceito}> Back end é a parte de um sistema de software que é responsável por processar e armazenar dados, além de gerenciar a lógica de negócios e a comunicação com outros sistemas. Ele é responsável por lidar com a parte do sistema que não é visível para o usuário final, como o armazenamento de dados em um banco de dados, a comunicação com outros sistemas via APIs, a execução de operações de negócios e a lógica de autenticação e segurança. Em resumo, o backend é o cérebro do sistema que permite que o front-end e outros componentes do sistema interajam com os dados e a lógica subjacentes.
        </Text>

        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/backend.jpg')}/>
        <View style={estilo.linguagens}>
        <Text style={estilo.subtitulo}>
        Linguagens: </Text>


        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
         <Text style={estilo.tituloLista}>Java: </Text>Uma das linguagens mais populares para o desenvolvimento de aplicativos empresariais e de grande escala, o Java é uma linguagem de programação orientada a objetos que é amplamente utilizada para desenvolvimento web.
        </Text>

        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
        <Text style={estilo.tituloLista}>Python: </Text> Uma linguagem de programação de alto nível com sintaxe clara e concisa, o Python é amplamente utilizado para desenvolvimento web, ciência de dados e automação de tarefas.
        </Text> 

        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
        <Text style={estilo.tituloLista}>Ruby: </Text> Conhecido por sua sintaxe elegante e fácil de ler, o Ruby é usado principalmente para desenvolvimento web com o framework Ruby on Rails.
        </Text> 
      
        <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
        <Text style={estilo.tituloLista}>PHP:</Text> Uma das linguagens de programação mais populares para desenvolvimento web, o PHP é usado para desenvolver sites dinâmicos e aplicativos da web. </Text> 


        <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
       <Text style={estilo.tituloLista}>Node.js:</Text> Um ambiente de tempo de execução do JavaScript construído no motor V8 do Google, o Node.js permite que os desenvolvedores escrevam código em JavaScript tanto para o frontend quanto para o backend.
       </Text> 

       <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
      <Text style={estilo.tituloLista}>C#:</Text> é uma linguagem de programação desenvolvida pela Google que é usada para criar aplicativos da web e móveis.
       </Text> 

       <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
       <Text style={estilo.tituloLista}> Kotlin:</Text> Uma linguagem de programação orientada a objetos desenvolvida pela Microsoft, o C# é usado principalmente para desenvolvimento de aplicativos de desktop e jogos, mas também é amplamente utilizado para desenvolvimento web.
       </Text> 

<Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
     <Text style={estilo.tituloLista}>Go:</Text>Uma linguagem de programação criada pelo Google, o Go é uma linguagem compilada que é projetada para ser rápida e eficiente, tornando-a uma boa escolha para desenvolvimento de aplicativos escaláveis e de alto desempenho.
       </Text> 
        </View>
        </ScrollView>
    </View>

  );
}

const largura = Dimensions.get('screen').width ;

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



