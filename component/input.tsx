import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input(props: TextInputProps) {
    const { style, ...rest } = props;
    return <TextInput style={[styles.input, style]} {...rest} />;
    
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        width: "100%",
        height: 44,
        borderColor: "#CDCDCD",
        paddingLeft: 10,
        fontSize: 15,
        marginBottom: 12,
        backgroundColor: "#fff",
    
    },
});