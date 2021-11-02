import React from 'react'
import { StyleSheet, Button, Text, View, Touchable, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Feather';

interface Props {
    icon?: string | any,
    text?: string,
    onClick: () => void,
}

const Buttons: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity style={[styles.container, styles.shadowProp]} onPress={props.onClick} >
            {
                props.icon ?
                    <Icon name={props.icon} style={styles.icon}></Icon> :
                    <Text style={styles.text}>{props.text}</Text>
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
        marginRight: 10
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
    }
});

export default Buttons
