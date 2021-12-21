import React from 'react'
import { StyleSheet, Button, Text, View, Touchable, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Feather';

interface Props {
    icon?: string | any,
    text?: string,
    disable?: boolean,
    onClick: () => void,
}

const Buttons: React.FC<Props> = (props) => {

    const numbers: string[] = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var hasNumber = numbers.filter(e => e == props.text);
    return (
        <TouchableOpacity style={[styles.container, styles.shadowProp]} onPress={props.onClick} disabled={props.disable}>
            {
                <Text style={hasNumber.length > 0 ? styles.textNumber : styles.text}>{props.text}</Text>
            }
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 77,
        width: 77,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        marginRight: 5,
        marginLeft: 5
    },
    shadowProp: {
        shadowColor: '#0087F3',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 9,

        elevation: 20,
    },
    icon: {
        fontSize: 34,
        color: '#0087F3',
    },
    text: {
        fontSize: 23,
        color: '#0087F3'
    },
    textNumber: {
        fontSize: 23,
        color: '#000'
    },
});

export default Buttons
