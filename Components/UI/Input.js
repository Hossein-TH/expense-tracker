import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native'

function Input({label,textInputConfig}) {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput {...textInputConfig}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
  },
});

export default Input;



