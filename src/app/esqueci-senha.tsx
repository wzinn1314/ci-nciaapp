import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../component/Button";

export default function EsqueciSenha() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu sua senha?</Text>
      <Text style={styles.texto}>Não se preocupe! Vamos ajudar você a recuperar o acesso à sua conta.</Text>
      <Link href="../gerenciadordesenha" asChild>
        <Button label="Continuar" style={styles.button} />
      </Link>
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
    marginBottom: 16,
    textAlign: "center",
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    width: '100%',
    height: 44,
  },
});