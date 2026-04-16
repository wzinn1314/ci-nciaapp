import { Link } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../../component/Button";

export default function Index() {
  const [email, setEmail] = useState('wallisson@gmail.com');
  const [password, setPassword] = useState('000');
 


  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.imagem1} />
      <Text style={styles.title}>Seja Bem-vindo</Text>
      <Text style={styles.texto}>Entre com e-mail e senha</Text>
      <Text style= {styles.ww}>E-mail</Text>
      <TextInput placeholder="E-mail" style={styles.conta} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Text style= {styles.ww}>Senha</Text>
      <TextInput placeholder="Senha" secureTextEntry style={styles.conta} value={password} onChangeText={setPassword} />
      <Link href="../home" asChild>
      <Button label="Entrar" style={styles.ent} />
      </Link>
       <Text style={styles.ent}> Já se cadastrou? <Link href="../cadastro" style={styles.link}>Cadastrar-se</Link></Text>
       <Text style={styles.ent}>Esqueceu a senha? <Link href="../gerenciadordesenha" style={styles.link}>Restaura a Senha</Link></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  imagem1: {
    width: 270,
    height: 270,
    resizeMode: 'contain',
    marginBottom: 16,
    marginTop: 32,
  },

  ent:{
    marginTop: 19,
    width: '100%',
    height: 44,
    fontSize: 16,
      fontWeight:600,
    
  },
  link:{
    color: '#007AFF',
    marginBottom: 24,
     fontSize: 16,
      
  },

  
  conta:{
    
     borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        height: 44,
         marginBottom: 12,
         paddingLeft:10,

  },
    texto: {
    marginTop: 16,
    width: '100%',
    height: 44,
    fontWeight:'bold',
    textAlign: 'center',
    },
    ww:{
    width: '100%',
    height: 21,
    fontWeight:'bold',
    textAlign: 'left',
    },
   

});
