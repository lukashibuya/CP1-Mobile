import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Resultado({ resultado }) {
    return (
        <View style={styles.resultado}>
            <Text>Valor original: R$ {resultado.valorOriginal}</Text>
            <Text>Percentual de aumento: {resultado.percentualAumento}%</Text>
            <Text>Valor do aumento: R$ {resultado.aumento}</Text>
            <Text>Novo valor: R$ {resultado.novoValor}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    resultado: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '150%',
        alignItems: 'center',
    },
});