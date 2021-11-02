import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import Buttons from '../components/button/Buttons';

function Home() {

    const test = () => {
        console.log('valorr')
    }

    const values: string[] = ['C', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '<=', '='];

    const renderBotoes = () => {
        return (
            values.map((v, key) => {
                return (
                    <Buttons key={key} text={v} onClick={test} />
                )
            })
        )

    }


    return (
        <View style={styles.container} >
            <View style={styles.result}>
                <Text>
                    = RESULTS
                </Text>
            </View>
            <View style={styles.operation}>
                <Text>
                    OPERACAO
                </Text>
            </View>
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
    },
    numbers: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: "center",
        paddingBottom: 30,
        paddingTop: 20
    },
    operation: {
        flex: 1,
        backgroundColor: '#f19',
        justifyContent: 'flex-end',
        alignItems: "flex-end"
    },
    result: {
        flex: 1,
        backgroundColor: '#f1f',
        justifyContent: 'flex-end',
        alignItems: "flex-end"
    }
});

export default Home


