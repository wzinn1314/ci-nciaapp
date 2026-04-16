import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Config() {

    return(
        <View style={styles.container}>
           
            <Text style={styles.text}>Configurações</Text>
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

     marginTop: 20,
     marginLeft: 20,
     height: 44,
     width:44,
     borderRadius: 22,
     backgroundColor: 'rgba(255, 255, 255, 0.4)',
     alignItems:'center',
     justifyContent:'center',
    },
    text:{
    
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20,
        alignContent:'center',
        textAlign:'center',
    },
});