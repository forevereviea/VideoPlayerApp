import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = async () => {
        // console.log("Hello");
        await fetch("http://192.168.86.36:5047/Auth/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Username": username,
                "Password": password
        })})
                .then(resp => resp.json())
                .then(data => {
                    if (data.token != null) {
                        navigation.navigate("Categories");
                    } else {
                         Alert.alert("Invalid Username or Password, Try Again");
                        // navigation.navigate("Categories");
                    }
                    console.log(data.token)
        console.log(username);
        console.log(password);

                })
    }

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headTxt}>CodeStack Academy</Text>
                <Text style={styles.headTxt2}>Sign in to Continue</Text>
            </View>
            <SafeAreaView style={styles.container}>
                <Text style={styles.txtStyle}>Username</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Enter Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Text style={styles.txtStyle}>Password</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable style={({ pressed }) => [styles.btn, {
                    opacity: pressed ? .5 : 1
                }]}
                    onPress={handleLogin}
                >
                    <Text style={{ color: "white", fontWeight: 'bold' }}>Login</Text>
                </Pressable>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 50
    },
    inputs: {
        borderBottomWidth: .5,
        padding: 15,
        margin: 20
    },
    txtStyle: {
        marginLeft: 20
    },
    btn: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
    },
    header: {
        flex: .5
    },
    headTxt: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'black',
        marginTop: 100
    },
    headTxt2: {
        alignSelf: 'center',
        color: 'grey',
        fontSize: 20
    }
})

export default LoginScreen;