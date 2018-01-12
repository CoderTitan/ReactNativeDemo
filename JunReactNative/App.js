/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 1.导入组件(面向组件),React(JSX)
// React:默认组件,不需要添加{}
// Compoent:非默认组件,需要添加{}
import React, { Component } from 'react';

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import JunNetRequest from 'JunNetRequest'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



// 3.自定义 程序入口组件([[UIView alloc] init])
export default class App extends Component<{}> {

    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle} onPress={this._saveData.bind(this)}>存储 </Text>
                <Text style={styles.textStyle} onPress={this._readData.bind(this)}>读取 </Text>
                <Text style={styles.textStyle} onPress={this._deleteData.bind(this)}>删除 </Text>
            </View>
        )
    }
    


}


// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    textStyle:{
        width:100,
        height:30,
        lineHeight:30
    }
});

