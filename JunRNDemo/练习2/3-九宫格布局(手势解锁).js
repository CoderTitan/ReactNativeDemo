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
    Image,
    ImageBackground,
    Dimensions //可以获取全屏的尺寸
} from 'react-native';
//注: 在RN0.46版本以后添加了ImageBackground组件, 用于替换Image组件的嵌套, 用法和Image组件一样
//即0.46以后Image组件上不可添加其他组件, ImageBackground组件上面可以添加其他组件

//全屏的宽
var kScreenWidth = Dimensions.get('window').width
//全屏的高
var kScreenHeight = Dimensions.get('window').height
//每一个手势圆的宽高
var imageWH = kScreenWidth / 4
//每一个圆之间的间距
var marginWH = kScreenWidth / 4 / 4



const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 3.自定义 程序入口组件([[UIView alloc] init])
export default class App extends Component<{}> {

    //创建9个手势圆
    setupIconImage(){
        var imageArr = []

        for (var i = 0; i < 9; i++) {
            imageArr.push(
                <Image source={{uri: '手势控件'}}
                       style={styles.iconImageStyle}
                       key = {i}
                />
            )
        }

        return imageArr
    }


    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            <ImageBackground source={{uri:"手势背景"}}
                             style={styles.bgImageStyle}
            >
                <View style={styles.centerViewStyle}>
                    {this.setupIconImage()}
                </View>
            </ImageBackground>
        )
    }
}



// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    bgImageStyle:{
        width: kScreenWidth,
        height: kScreenHeight,
        justifyContent:'center',
        alignItems:'center'
    },
    centerViewStyle:{
        width:kScreenWidth,
        height:kScreenWidth,
        // backgroundColor:'red',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    iconImageStyle:{
        width: imageWH,
        height: imageWH,
        marginLeft:marginWH,
        marginTop:marginWH
    }
});

