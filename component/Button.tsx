import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, } from "react-native";

type BotaoProps = TouchableOpacityProps & {
 label: string;

}

export function Button ({ label, style, ...rest }: BotaoProps) {
    return (

        <TouchableOpacity style={[styles.botao, style]} activeOpacity={0.6} {...rest}>
        <Text style={styles.textoBotao}>{label}</Text>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    botao: {
        width: '100%',
        height:48,
        backgroundColor: '#000',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textoBotao: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 600,
        textAlign: 'center',    
    },



});
