import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
 
export default function Perfil (){
    return (
        <View style={styles.container}>
            <Link href="../home" asChild>
                            <TouchableOpacity style={styles.buttonUser}>
                                <Feather name="arrow-left" size={24} color="#000" />
                            </TouchableOpacity>
                            </Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    buttonUser:{
     marginTop:60,
     marginLeft: 20,
     height: 44,
     width:44,
     borderRadius: 22,
     backgroundColor: 'rgba(255, 255, 255, 0.4)',
     alignItems:'center',
     justifyContent:'center',
    },
});