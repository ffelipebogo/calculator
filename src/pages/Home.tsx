import React, { useCallback, useEffect, useState } from 'react'
import { Text, TextInput, View, StyleSheet, PlatformColor } from 'react-native'
import Buttons from '../components/button/Buttons';

function Home() {

    const [value, setValue] = useState<string>('0');
    const [operation, setOperation] = useState();
    const [result, setResult] = useState<number>(0);
    const forceUpdate = useCallback((val) => setResult(val), []);

    const BUTTONS: string[] = ['C', '+ / -', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '<=', '='];
    const NUMBERS: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const OPERATIONS: string[] = ['C', '+ / -', '%', '/', 'x', '-', '+', '<=', '='];

    useEffect(() => {
        //calcule();
    }, [value]);

    const isNumeric = (num: string) => {
        const numbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        let hasNumber = numbers.filter(e => e == num);
        return hasNumber.length > 0;
    }

    const calcule = () => {

        let valor = value;
        let countOperation: number = getCountOperation();

        for (var j = 0; j < countOperation; j++) {
            let num = '';
            let opr = '';
            for (let k = 0; k < valor.length; k++) {

                if (isNumeric(valor[k])) {
                    num = valor[k];
                } else {
                    opr = valor[k];
                }
                if (opr != '') {
                    gerarResult(opr, num);
                }
            }
        }

    }

    const gerarResult = (opr: string, num: string) => {
        let res = Number.parseInt(num);
        switch (opr) {
            case '+':
                somar(res);

                break;
            case '-':

                break;
            case 'x':

                break;
            case '/':

                break;
        }

    }

    const somar = (val: number) => {
        let res = result;
        let newRes = res + val;

        setResult(newRes);
    }

    const getCountOperation = () => {
        let valor: string = value;
        let countOperation: number = 0;

        for (let i = 0; i < valor.length; i++) {
            if (!isNumeric(valor[i])) {
                countOperation++;
            }
        }
        return countOperation;
    }

    const mountOperation = (operation: string) => {
        //devo crriar um array para os values e operations
        //quando setar qual a operação sera feita devo adicionar no array de values e fazerr o calculo com base no array de values

        switch (operation) {
            case '=':
                calcule();
                break;
            case 'C':
                setValue('0');
                setResult(0);
                break;
            case '+':
                setValue(value.concat(operation));
                break;
            default:
                break;
        }

    }

    const click = (clickValue: string) => {
        //preciso pegar o valor que esta vindo do click
        //nao posso deixa mostrar a operação antes de ter algum valor para calcular
        //para cada botao vou ter um set do valor na parte de operaçao
        //assim que tiver e for possivel fazer o calculo eu mostro o resultado
        let number: string;
        if (isNumeric(clickValue)) {

            number = NUMBERS.filter(e => e == clickValue)[0];

            if (value == '0' || number == '0') {
                setValue(number);
            } else {
                setValue(value.concat(number));
            }
            return;
        }

        let operation = OPERATIONS.filter(e => e == clickValue)[0];
        mountOperation(operation);

    }

    const renderBotoes = () => {
        return (
            BUTTONS.map((v, key) => {
                var operationDisables = ['+ / -', '%', '/', 'x', '-', '<=', ','].filter(e => e == v);
                var desabilatar = operationDisables.length > 0;
                return (
                    <Buttons
                        key={key}
                        text={v}
                        onClick={() => click(v)}
                        disable={desabilatar}
                    />
                )
            })
        )

    }


    return (
        <View style={styles.container} >
            <View style={styles.operation}>
                <Text style={{ fontSize: 32 }}>
                    {value}
                </Text>
            </View>
            {
                Number.parseInt(value) > 0 &&
                <View style={styles.result}>
                    <Text style={{ fontSize: 42, color: "#0087F3" }}>
                        = {result}
                    </Text>
                </View>
            }
            <View style={styles.numbers}>
                {
                    renderBotoes()
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    numbers: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
    result: {
        minHeight: 50,
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        shadowColor: '#0087F3',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.51,
        shadowRadius: 9,

        elevation: 1,

        paddingRight: 20,
        paddingLeft: 20
    },
    operation: {
        fontSize: 32,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        paddingRight: 20,
        paddingLeft: 20
    }
});

export default Home


