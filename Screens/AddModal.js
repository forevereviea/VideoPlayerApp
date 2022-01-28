import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const AddModal = () => {

  return(
    <>
    <TouchableOpacity
    disabled={true}
    style={styles.container}
    >
        <View style={styles.modal}>
<Text>Mkibdjsfrhjksbdfkjbtdebswfjbdkbfj</Text>
        </View>
    </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal:{
        height: 75,
        width: 80,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10
    }
})

export default AddModal;
