import { Feather } from '@expo/vector-icons';
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../component/Button";
import { Input } from "../../component/input";


export default function GerenciadorDeSenha() {


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
                <Text style={styles.texto}>Coloque seu e-mail</Text>
                <Input style={styles.input} placeholder="E-mail" keyboardType="email-address" />
                <Link href='../codigo' asChild>
                <Button label="Confirma E-mail" style={styles.confirmacao} />
                </Link>
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
  input: {
    width: '100%',
    height: 44,
    borderWidth: 2,
    paddingLeft: 12,
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  confirmacao: {
    width: '80%',
    height: 50,
    borderRadius: 8,
    marginBottom: 12,
  },
  voltar: {
    width: 70,
    height: 30,
    textAlign: 'center',
    marginTop: 20,
  },
});
