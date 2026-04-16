import { StyleSheet, Text, View } from 'react-native';
import Header from '../../component/header';
import StandBar from '../../component/standbar';
export default function Criar() {
    return(
        <View style={styles.container}>
            <Header name='Wallisson Elizeu'/>
            <Text style={styles.title}>Criar Tarefa</Text>

            <StandBar/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },

});