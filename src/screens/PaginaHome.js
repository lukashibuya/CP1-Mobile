import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Resultado from '../components/Resultado';
export default function HomeScreen() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [valorOriginal, setValorOriginal] = useState('');
    const [percentualAumento, setPercentualAumento] = useState('');
    const [resultado, setResultado] = useState(null);
    const calcularAumento = () => {
        if (!nomeProduto || !valorOriginal || !percentualAumento) {
            alert('Preencha todos os campos');
            return;
        }
        const valor = parseFloat(valorOriginal);
        const percentual = parseFloat(percentualAumento);
        if (isNaN(valor) || isNaN(percentual)) {
            alert('Digite valores válidos');
            return;
        }
        const aumento = (valor * percentual) / 100;
        const novoValor = valor + aumento;
        setResultado({
            valorOriginal: valor.toFixed(2),
            percentualAumento: percentual.toFixed(2),
            aumento: aumento.toFixed(2),
            novoValor: novoValor.toFixed(2),
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>CALCULADORA DE AUMENTO</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do produto"
                value={nomeProduto}
                onChangeText={setNomeProduto}

            />
            <TextInput
                style={styles.input}
                placeholder="Valor do produto"
                keyboardType="numeric"
                value={valorOriginal}
                onChangeText={setValorOriginal}
            />
            <TextInput
                style={styles.input}
                placeholder="Percentual de Aumento (%)"
                keyboardType="numeric"
                value={percentualAumento}
                onChangeText={setPercentualAumento}
            />
            <TouchableOpacity style={styles.botao} onPress={calcularAumento}>
                <Text style={styles.botaoTexto}>CALCULAR</Text>
            </TouchableOpacity>
            {resultado && <Resultado resultado={resultado} />}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0015FFFF',
        padding: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    botao: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
