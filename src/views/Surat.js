import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import axios from 'axios'
import { ListItem, Avatar } from 'react-native-elements'
import Number from '../assets/img/number.png'

export class Surat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            surat: []
        }
    }

    componentDidMount() {
        axios.get("https://api.npoint.io/99c279bb173a6e28359c/data")
            .then(res => {
                this.setState({ surat: res.data })
            })
    }

    keyExtractor = (item, key) => key.toString()
    renderItem = ({ item }) => {
        return (<ListItem key={item.nomor} bottomDivider onPress={() => this.props.navigation.navigate('Detail', {
            id: item.nomor,
            surat: item.nama
        })}>
            <ImageBackground style={styles.number} source={Number}>
                <Text>{item.nomor}</Text>
            </ImageBackground>
            <ListItem.Content>
                <View style={styles.flex}>
                    <ListItem.Title>{item.nama}</ListItem.Title>
                    <ListItem.Title>{item.asma}</ListItem.Title>
                </View>
                <ListItem.Subtitle>{item.ayat} Ayat  Arti: {item.arti}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>)
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.surat}
                    renderItem={this.renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    number: {
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
    },
    flex: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default Surat
