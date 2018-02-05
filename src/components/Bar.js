import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Bar extends Component {
    render() {
    return(
         
            <View style = {styles.bar}>

                <View style={(styles.barItem, styles.barseparator)}>
                    <Text style={styles.barTop}>12k</Text>
                    <Text style={styles.barBottom}>Followers</Text>

                </View>
                <View style= {(styles.barITem)}>
                    <Text style={styles.barTop}>Rating</Text>
                    <Text style={styles.barBottom}>4/5</Text>
                </View>
            </View>

    );
}
}
const styles = StyleSheet.create({
    bar: {
        borderTopColor: '#fff',
        borderTopWidth: 4,
        backgroundColor: '#ec2e4a',
        fixedDirection: 'row'
    },
    barseparator: {
        borderRightWidth: 4
    },
    barItem: {
        flex:1,
        padding:10,
        allignItems: 'center',
    },
    barTop: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    barBottom: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold'

    }
})