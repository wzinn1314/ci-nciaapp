import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function StandBar() {
   

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Link href="../home" asChild>
                    <TouchableOpacity style={styles.buttonUser}>
                        <Feather name="home" size={24} color="#fff" />
                    </TouchableOpacity>
                </Link>

                <Link href="../analytics" asChild>
                    <TouchableOpacity style={styles.buttonUser}>
                        <Feather name="bar-chart" size={24} color="#fff" />
                    </TouchableOpacity>
                </Link>

                <Link href="../criar" asChild>
                 <TouchableOpacity style={styles.buttonUser}>
                    <Feather name="plus" size={24} color="#fff" />
                </TouchableOpacity>
                </Link>
                  
                  <Link href= "../favoritos"asChild>
                 <TouchableOpacity style={styles.buttonUser}>
                    <Feather name="star" size={24} color="#fff" />
                </TouchableOpacity>
                </Link>
   
                <Link href="../config" asChild>
                 <TouchableOpacity style={styles.buttonUser}>
                    <Feather name="settings" size={24} color="#fff" />
                </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        paddingTop:22,
        flexDirection: 'row',
        paddingBottom: 40,
        paddingEnd: 16,
        paddingStart: 16,
        width: '100%',
        height: 100,
        zIndex: 99,
        bottom:0,
        position: 'absolute',   
        borderRadius: 8,
    },
  
    buttonUser:{
        width:44,
        height:44,
        borderRadius: 22,
        color: '#fff',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(255, 255, 255, 0.2)',
        
    },
    content: { 
    flex:1,
       flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
    },
 
});