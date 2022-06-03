import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';

export default function PaginaInicial() {

  const [color, setColor] = useState();
  const [autSolicit, setAutSc] = useState(false);
  const [erro, setErro] = useState('');
  const [certo, setCerto] = useState('');
  const [mostrar, setMostrar] = useState('none');
  const [autorizar, setAutorizar] = useState();
  const [vazio, setVazio] = useState('');
  const [nome, setNome] = useState();

  function showAlert() {
    if (nome == null) {
      Alert.alert("Informe o nome!");
    } else {
      setAutSc(true);
    }
  }

  function clear() {
    setNome('')
    setAutSc()
    setColor()
    setMostrar('none')
    setVazio('')
  }

  function autN() {
    setAutorizar(true)
    setColor('green')
    setAutSc(false)
    setMostrar('flex')
    setCerto(nome)
  }

  function naoAutN() {
    setAutorizar(false)
    setColor('red')
    setAutSc(false)
    setMostrar('flex')
    setErro(nome)
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        hidden={false} />
      {
        !autSolicit ?
          <View 
          style={styles.areaForm}>
            <Text 
            style={styles.titulo}>Prova Semestral</Text>
            <TextInput
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Nome..."
              style={styles.input}
            />
            <View 
            style={styles.areaBotoes}>
              <TouchableOpacity 
              style={styles.btn} 
              onPress={clear}>
                <Text 
                style={styles.textBtn}>Limpar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.btn} 
              onPress={showAlert}>
                <Text 
                style={styles.textBtn}>
                  Solicitar Autorização
                </Text>
              </TouchableOpacity>
            </View>
            {
              autorizar ?
                <Text style={{ color: color, fontSize: 25, display: mostrar, fontWeight: 'bold', marginTop: 15 }}>{certo} autorizado!</Text>
                :
                <Text style={{ color: color, fontSize: 25, display: mostrar, fontWeight: 'bold', marginTop: 15 }}>{erro} não autorizado!</Text>
            }
          </View>
          :
          <View 
          style={styles.areaForm}>
            <Text 
            style={styles.nomeAutorizador}>{nome}</Text>
            <View 
            style={styles.areaBotoes}>
              <TouchableOpacity 
              style={styles.btn} 
              onPress={naoAutN}>
                <Text 
                style={styles.textBtn}>Não Autorizar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.btn} 
              onPress={autN}>
                <Text 
                style={styles.textBtn}>Autorizar</Text>
              </TouchableOpacity>
            </View>
          </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    padding: 20
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row'
  },
  titulo: {
    color: '#e91c5d',
    fontWeight: 'bold',
    fontSize: 30
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ccc'
  },
  btn: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#e91c5d',
    padding: 10,
    marginLeft: 10,
    alignItems: 'flex-end'
  },
  textBtn: {
    color: 'white'
  },
  areaBotoes: {
    flexDirection: 'row',
    marginTop: 15
  },
  nomeAutorizador: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  areaForm: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  }
});