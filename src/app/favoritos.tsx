import { StyleSheet, Text, View } from 'react-native';
import Header from '../../component/header';
import StandBar from '../../component/standbar';

export default function Favoritos() {
    return(
        <View style={styles.container}>
            <Header name = 'Wallisson Elizeu'/>
            <Text>Favoritos</Text>
            <StandBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});