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
    Dimensions
} from 'react-native';
import JunPerson from './TestTwo/5-2.JunPerson'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//全屏的宽
var kScreenWidth = Dimensions.get('window').width
//全屏的高
var kScreenHeight = Dimensions.get('window').height




// 3.自定义 程序入口组件([[UIView alloc] init])
export default class App extends Component<{}> {

    //初始化
    constructor(props){
        super(props)


    }



    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {

        var person = new JunPerson();

        console.log(person.name);
        console.log(person.age);
        person.eatFood();

        JunPerson.money = 10;
        console.log(JunPerson.money);
        JunPerson.gotoSchool()


        return (

            <View style={{backgroundColor:'red', flex:1}}>

            </View>
        )
    }


}



// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({

});

