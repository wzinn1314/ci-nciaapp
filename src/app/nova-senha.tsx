import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../component/Button';
import { Input } from '../../component/input';

export default function NovaSenha() {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <Link href='../' asChild>
         <TouchableOpacity style={styles.voltar}>
           <Feather name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Nova Senha</Text>
        <Input
          style={styles.input}
          placeholder="Digite a nova senha"
          secureTextEntry
          value={novaSenha}
          onChangeText={setNovaSenha}
        />
        <Input
          style={styles.input}
          placeholder="Confirme a nova senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
        
        <Button label="Salvar Senha" style={styles.button} />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  backContainer: {
    position: 'absolute',
    top: 32,
    left: 32,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 8,
  },
  voltar: {
    width: 70,
    height: 30,
    marginTop: 20,
  },
});