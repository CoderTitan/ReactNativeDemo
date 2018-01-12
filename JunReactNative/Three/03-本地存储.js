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

    //存储
    _saveData(){
        console.log('存储')

        //key值
        var key = 'per'
        var person = {
            name:'jun',
            age:20
        }

        //json转成字符串
        var jsonStr = JSON.stringify(person)

        //存储
        AsyncStorage.setItem('person', jsonStr, function (error) {
            if (error) {
                alert('存储失败')
            }else {
                alert('存储完成')
            }
        })
        AsyncStorage.setItem('per', jsonStr, function (error) {
            if (error) {
                alert('存储失败')
            }else {
                alert('存储完成')
            }
        })
        AsyncStorage.setItem('p', jsonStr, function (error) {
            if (error) {
                alert('存储失败')
            }else {
                alert('存储完成')
            }
        })
    }

    //读取
    _readData(){
        console.log('读取')
        AsyncStorage.getItem('per', function (error, result) {
            if (error) {
                alert('读取失败')
            }else {
                console.log(result)
                alert('读取完成')
            }
        })
    }

    //删除
    _deleteData(){
        console.log('删除')

        //删除一条数据
        AsyncStorage.removeItem('per', function (error) {
            if (error) {
                alert('删除失败')
            }else {
                alert('删除完成')
            }
        })

        //删除json文件
        AsyncStorage.clear(function (error) {
            if (error) {
                alert('文件删除失败')
            }else {
                alert('文件删除完成')
            }
        })
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

