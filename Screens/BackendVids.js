import { setStatusBarTranslucent } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Modal, TextInput, Dimensions, ScrollView } from 'react-native';
import plusImg from '../Images/plusImg.png';


const BackendVids = (props) => {
    const [isModelVisible, setIsModelVisible] = useState(false);
    const [chooseCategory, setChooseCategory] = useState('Select a Category...')
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [chooseData, setChooseData] = useState();
    const OPTIONS = ['React', 'React Native', 'Backend']
    const WIDTH = Dimensions.get('window').height;
    const HEIGHT = Dimensions.get('window').height;
    // const plusImg = "https://img.icons8.com/pastel-glyph/30/000000/plus--v1.png";
    const changeModalVisible = (bool) => {
        setIsModelVisible(bool);
    }
    const addCategoryHandle = (bool) => {
        setCategoryVisible(bool);
    }
    closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }
    const setData = (data) => {
        setChooseData(data);
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>{chooseData}</View>
                <View style={styles.addVideo}>
                    <TouchableOpacity
                        onPress={() => changeModalVisible(true)}
                        style={styles.TouchableOpacity}
                    >
                        {isModelVisible === true ? (
                            <>
                                <TouchableOpacity
                                    changeModalVisible={changeModalVisible}
                                    setData={setData}
                                    disabled={true}
                                    style={styles.touchCon}
                                >
                                    <View style={styles.modal}>
                                        <View style={styles.textView}>
                                            <Text
                                                style={[styles.text, { fontSize: 20 }]}
                                            >Add Video
                                            </Text>
                                            <View style={styles.flexSubTitle}>
                                                <Text
                                                    style={styles.subTitles}
                                                >Video Title
                                                </Text>
                                                <Text
                                                    style={styles.subTitles2}
                                                >Video Link
                                                </Text>
                                            </View>
                                            <View style={styles.twoInputs}>
                                                <TextInput
                                                    style={styles.linkInput}
                                                    placeholder='Enter Title'
                                                />
                                                <TextInput
                                                    style={styles.linkInput2}
                                                    placeholder='Enter Video Link'
                                                />
                                            </View>
                                            <View style={styles.modalRow2}>
                                                <TouchableOpacity
                                                    onPress={() => addCategoryHandle(false)}
                                                    style={styles.touchModal2}
                                                >
                                                    <Text style={styles.chooseCategoryTxt}>{chooseCategory}</Text>
                                                </TouchableOpacity>
                                                {categoryVisible === true ? (
                                                    <>
                                                        <Modal
                                                            transparent={true}
                                                            animationType='fade'
                                                            visible={categoryVisible}
                                                            onRequestClose={() => addCategoryHandle(false)}
                                                        >

                                                        </Modal>
                                                    </>
                                                ) : (


                                                    <View style={styles.buttonsView}>
                                                        <TouchableOpacity style={styles.touchOp}
                                                            onPress={() => setIsModelVisible(false)}
                                                        >
                                                            <Text style={[styles.text, { color: 'black' }]}>
                                                                Cancel
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={styles.touchOp}>
                                                            <Text style={[styles.text, { color: 'black' }]}>
                                                                Add Video
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                                }
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </>
                        ) : (

                            <Image
                                style={styles.addImg}
                                source={{ uri: 'https://img.icons8.com/pastel-glyph/30/000000/plus--v1.png' }}
                                style={{ alignSelf: 'flex-end', marginRight: 3, marginTop: 3, padding: 15, width: 10, height: 10 }} />
                        )
                        }
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    addImg: {

        alignSelf: 'flex-end'
    },
    touchCon: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: 200,
        width: 350,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    textView: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        margin: 5,
        marginBottom: 7,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row'
    },
    touchOp: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    },
    linkInput: {
        marginTop: 4,
        borderWidth: 1,
        borderColor: 'grey',
        width: 150
    },
    linkInput2: {
        marginTop: 4,
        marginLeft: 8,
        borderWidth: 1,
        borderColor: 'grey',
        width: 150
    },
    twoInputs: {
        flexDirection: 'row'
    },
    flexSubTitle: {
        flexDirection: 'row'
    },
    subTitles: {
        alignSelf: 'flex-start',
        marginRight: 80
    },
    chooseCategoryTxt: {
        color: 'grey',
        marginTop: 4,
        borderWidth: 1,
        borderColor: 'grey',
        marginLeft: 20,
        width: 151
    }
    // subTitles2:{
    //     marginLeft: 10r
    // }
})
export default BackendVids;
