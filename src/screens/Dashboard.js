import React from 'react';
import {Text, StyleSheet, View, Button, TouchableHighlight} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons,} from '@expo/vector-icons'

const Dashboard = ({navigation}) => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.topBar}>
                <View>
                    <AntDesign name='bars' size={30}></AntDesign>
                </View>
                <TouchableHighlight onPress={() => navigation.navigate('ProfileS') } underlayColor='white'>
                <View>
                    <MaterialCommunityIcons name='face-profile' size={30}></MaterialCommunityIcons>
                </View>
                </TouchableHighlight>
            </View>
            <View style={styles.contentBar}>
                <Text style={styles.contentBarTextStyle}>Dashboard</Text>
            </View>
            <View style={styles.bottomBar}>
                <TouchableHighlight onPress={() => navigation.navigate('') } underlayColor='white'>
                <View>
                    <Entypo name='home' size={30} color='red'></Entypo>
                    
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('UploadS')} underlayColor='white'>
                <View>
                        <Entypo name='upload' size={30}></Entypo>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('DetailsS')} underlayColor='white'>
                <View>
                    <Feather name='info' size={30}></Feather>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('HistoryS')} underlayColor='white'>
                <View>
                    <FontAwesome name='history' size={30}></FontAwesome>
                </View>
                </TouchableHighlight>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10
    },
    contentBar: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    contentBarTextStyle: {
        fontSize: 40,

    },
    bottomBar: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 5
    }
})

export default Dashboard;