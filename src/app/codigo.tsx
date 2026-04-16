import { Feather } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function EsperaCodigoGmail() {
  const [codigo, setCodigo] = useState('');

  const handleVerificar = () => {
    if (codigo.length === 6) {
      Alert.alert('Sucesso', 'Código verificado com sucesso!', [
        { text: 'OK', onPress: () => router.push('/nova-senha') }
      ]);
      
    } else {
      Alert.alert('Erro', 'Por favor, insira um código válido de 6 dígitos.');
    }
  };

  return (
    <View style={styles.container}>
       <View style={styles.backContainer}>
                      <Link href='../' asChild>
                          <TouchableOpacity style={styles.voltar}>
                                <Feather name="arrow-left" size={24} color="#000" />
                            </TouchableOpacity>
                      </Link>
                      </View>
      <Text style={styles.title}>Aguardando Código do Gmail</Text>
      <Text style={styles.instruction}>
        Verifique seu email do Gmail e insira o código de verificação enviado.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o código de 6 dígitos"
        value={codigo}
        onChangeText={setCodigo}
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerificar}>
        <Text style={styles.buttonText}>Verificar Código</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
   backContainer: {
    position: 'absolute',
    top: 32,
    left: 32,
   },
   voltar: {
    width: 70,
    height: 30,
    textAlign: 'center',
    marginTop: 20,
   },

});