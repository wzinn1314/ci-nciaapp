import { Feather } from '@expo/vector-icons';
import { Link } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../component/Button";
import { Input } from "../../component/input";

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    return (
        <View style={styles.container}>
            <Link href='../' asChild>
               <TouchableOpacity style={styles.label}>
                                <Feather name="arrow-left" size={24} color="#000" />
                            </TouchableOpacity>
            </Link>
            <Image source={require('../../assets/image.png')} style={styles.imagem2} />
            <Text style={styles.texto}>Tela de Cadastro</Text>
            <Input placeholder="Nome Completo" value={name} onChangeText={setName} />
            <Input placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
            <Input placeholder="Confirmar Senha" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
             <Link href='../' asChild>
            <Button label="Cadastrar" style={styles.confirmaçao} />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 32,
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 32,
        marginBottom: 32,
    },
    imagem2: {
         width: '90%',
        height: 330,
        resizeMode: 'contain',
        marginTop: 63,
    },
    label: {
        width: '25%',
        height: 30,
        top:20,
        textAlign: 'center',
       
    },
    confirmaçao: {
        width: '100%',
        height: 50,
        marginTop: 32,
    }

})