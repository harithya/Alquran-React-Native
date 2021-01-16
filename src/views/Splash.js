import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Logo from '../assets/img/logo.png'

export class Splash extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogin: false
        }

        setTimeout(() => {
            this.setState({ isLogin: true })
            this.props.navigation.navigate("Home")
        }, 2500)
    }


    render() {
        return (
            <View style={styles.container}>
                <Image source={Logo} style={styles.logo} />
                <Text style={{ fontSize: 18 }}>Pio: Alquran dan Terjemahan Online</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white"
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    }
})

export default Splash
