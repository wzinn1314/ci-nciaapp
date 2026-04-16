import { StyleSheet, Text, View, } from 'react-native';
import Header from '../../component/header';
import StandBar from '../../component/standbar';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name = 'Wallisson Elizeu'/>
      <Text style={styles.title}></Text>
     

      <StandBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  title: {
  
  },
  button: {
    
  },
  
});
