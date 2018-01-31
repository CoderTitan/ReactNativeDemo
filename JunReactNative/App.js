
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
    FlatList
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

    constructor(props){
        super(props)


        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        console.log(this.state.datas)

        var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?size=20'
        JunNetRequest.Get(url, null, function (json) {
            var dataArr = json['T1348647853363']
            console.log(dataArr.length)

            this.setState({
                datas:dataArr
            })
            console.log(this.state.datas.length)
        }, function (error) {
            console.log(error)
        })

    }

    render() {
        return (
            <View style={styles.viewStyle}>


            </View>
        )
    }


}


// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'#f7f7f7',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    textStyle:{
        height:50,
        lineHeight:50,
        backgroundColor:'orange',
        fontSize:20,
        textAlign:'center'
    }
});

