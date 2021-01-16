import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Alquran from '../assets/img/alquran.png'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={Alquran} />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Surat")}>
                    <Text style={styles.textButton}>Semua Surah</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Terakhir Baca</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Tentang</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Keluar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    image: {
        width: 170,
        height: 170,
        resizeMode: "contain",
        marginBottom: 40,
    },
    button: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: "70%",
        marginBottom: 10
    },
    textButton: {
        textAlign: "center"
    }
})

export default Home
