import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Pressable style={({ pressed }) => [styles.btn, {
          opacity: pressed ? .5 : 1
        }]}
        >
          <Text style={{ color: "white", fontWeight: 'bold' }}>React</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.btn, {
          opacity: pressed ? .5 : 1
        }]}
        onPress={() => navigation.navigate('React Native')}
        >
          <Text style={{ color: "white", fontWeight: 'bold' }}>React Native</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.btn, {
          opacity: pressed ? .5 : 1
        }]}
        onPress={() => navigation.navigate('Backend')}
        >
          <Text style={{ color: "white", fontWeight: 'bold' }}>Backend</Text>
        </Pressable>
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 8
}

})

export default HomeScreen;
