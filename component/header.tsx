import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }: { name: string }) {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>
                    <Link href="../perfil" asChild>
                <TouchableOpacity style={styles.buttonUser}>
                    <Feather name="user" size={24} color="#fff" />
                </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        paddingTop: statusBarHeight,
        flexDirection:'row',
        paddingBottom: 44,
        paddingEnd:16,
        paddingStart:16,
    },
    username: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        
    },
    content: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    },
    buttonUser: {
        width:44,
        height:44,
        borderRadius: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        alignItems:'center',
        justifyContent:'center',
    },
});
