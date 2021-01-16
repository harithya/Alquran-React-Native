import axios from 'axios'
import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ImageBackground } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import Number from '../assets/img/number.png'

export class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ayat: []
        }
    }

    componentDidMount() {
        const params = this.props.route.params
        // console.log(param)
        axios.get("https://api.npoint.io/99c279bb173a6e28359c/surat/" + params.id)
            .then(res => {
                this.setState({ ayat: res.data })
            })
    }

    keyExtractor = (item, key) => key.toString()
    renderItem = ({ item }) => {
        return (<ListItem key={item.nomor} bottomDivider >
            <ImageBackground style={styles.number} source={Number}>
                <Text style={{ fontSize: 10 }}>{item.nomor}</Text>
            </ImageBackground>
            <ListItem.Content>
                <ListItem.Title style={styles.ayat}>{item.ar}</ListItem.Title>
                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>)
    }


    render() {
        const params = this.props.route.params;
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.ayat}
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
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    ayat: {
        textAlign: "right",
        fontSize: 25,
        marginBottom: 20
    }
})

export default Detail
