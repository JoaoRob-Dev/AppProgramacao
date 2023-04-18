import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function Database(){
  return( 
    <View style={estilo.container}>
        <ScrollView>
        <Text style={estilo.titulo}> Database </Text>
        <Text style={estilo.conceito}> Database é a parte da programação responsável pela UI e pela UX(user interface e user experience), provendo uma interface visual que dialogará com o backend.
        </Text>

        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/database.jpg')}/>
        <View style={estilo.linguagens}>
        <Text style={estilo.subtitulo}>
        Linguagens: </Text>


        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
         <Text style={estilo.tituloLista}>SQL:</Text> Uma linguagem de consulta usada para gerenciar bancos de dados relacionais. Permite criar, modificar e consultar dados em um banco de dados.
        </Text>

        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
        <Text style={estilo.tituloLista}>PL/SQL:</Text> Uma extensão do SQL usada em bancos de dados Oracle. Permite escrever procedimentos, funções e blocos de código no banco de dados.
        </Text> 

        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
        <Text style={estilo.tituloLista}>T-SQL:</Text> Uma extensão do SQL usada em bancos de dados Microsoft SQL Server. Permite escrever procedimentos armazenados, funções e blocos de código no banco de dados.
        </Text> 
      
        <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
        <Text style={estilo.tituloLista}>Oracle SQL:</Text> Uma versão do SQL usada em bancos de dados Oracle. Oferece recursos adicionais em comparação com o SQL padrão, como tipos de dados avançados e funções analíticas. </Text> 


        <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
       <Text style={estilo.tituloLista}>MySQL:</Text> Um sistema de gerenciamento de banco de dados relacional que usa SQL como linguagem de consulta. É amplamente utilizado em aplicativos da web.
       </Text> 

       <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
      <Text style={estilo.tituloLista}>PostgreSQL:</Text>Um sistema de gerenciamento de banco de dados relacional de código aberto que usa SQL como linguagem de consulta. É conhecido por sua confiabilidade, escalabilidade e recursos avançados.
       </Text> 

       <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
       <Text style={estilo.tituloLista}> MongoDB:</Text> Uma linguagem de consulta usada para bancos de dados NoSQL do MongoDB. É baseada em documentos e usa uma sintaxe de consulta declarativa.
       </Text> 

<Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
     <Text style={estilo.tituloLista}> Cassandra Query Language:</Text> Uma linguagem de consulta usada para bancos de dados NoSQL do Apache Cassandra. É baseada em tabelas e usa uma sintaxe semelhante ao SQL.
       </Text> 

       <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
      <Text style={estilo.tituloLista}>Redis:</Text> Um banco de dados em memória de código aberto que armazena dados na RAM em vez do disco rígido. É frequentemente usado para armazenar dados em cache e sessões em aplicativos da web.
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

