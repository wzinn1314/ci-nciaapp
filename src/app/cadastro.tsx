import { Feather } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createUser, getUserByEmail, initializeDatabase } from "../../backend/src/database";
import { Button } from "../../component/Button";
import { Input } from "../../component/input";

export default function Cadastro() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!name.trim() || !email.trim() || !password || !confirmPassword) {
            Alert.alert("Atenção", "Preencha todos os campos.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Erro", "As senhas não conferem.");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        setLoading(true);

        try {
            await initializeDatabase();
            const existingUser = await getUserByEmail(email);
            if (existingUser) {
                Alert.alert("Erro", "Este e-mail já está cadastrado.");
                setLoading(false);
                return;
            }

            await createUser({ name, email, password });
            Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
            router.replace("/home");
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o usuário.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            <Link href='../' asChild>
                <TouchableOpacity style={styles.label}>
                    <Feather name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
            </Link>
            <Image source={require('../../assets/image.png')} style={styles.imagem2} />
            <Text style={styles.texto}>Tela de Cadastro</Text>
            <Input placeholder="Nome Completo" value={name} onChangeText={setName} />
            <Input placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail} autoCapitalize="none" />
            <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
            <Input placeholder="Confirmar Senha" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
            <Button label={loading ? "Cadastrando..." : "Cadastrar"} style={styles.confirmaçao} onPress={handleRegister} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 32,
        paddingTop: 24,
        paddingBottom: 48,
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 24,
    },
    imagem2: {
        width: '90%',
        height: 220,
        resizeMode: 'contain',
        marginTop: 16,
        alignSelf: 'center',
    },
    label: {
        width: 40,
        height: 30,
        marginTop: 8,
        textAlign: 'center',
    },
    confirmaçao: {
        width: '100%',
        height: 50,
        marginTop: 24,
    }

})
