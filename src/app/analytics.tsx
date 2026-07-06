import { StyleSheet, Text, View } from 'react-native';
import Header from '../../component/header';
import StandBar from '../../component/standbar';

export default function Analytics() {
    return(
        <View style={styles.container}>
            <Header name = 'Wallisson Elizeu'/>
            <Text>Analytics</Text>
            <StandBar/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
});
