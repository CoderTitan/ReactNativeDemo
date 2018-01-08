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
    Text,
    View,
    DeviceEventEmitter
} from 'react-native';


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
            //Flex主轴和侧轴
            <View style={styles.mainStyle}>
                <FirstView/>
            </View>
        )
    }
}

//第一个控件
class FirstView extends Component {

    //运行阶段修改state的时候会刷新组件
    //接受一个新的props的时候会刷新组件
    //1. 构造方法
    constructor(props){
        super(props)

        console.log('1-constructor')
    }

    //2. 即将加载组件
    componentWillMount() {

        console.log('2-componentWillMount')
    }


    //3. 渲染组件
    render() {
        console.log('3-render')
        return (
            <View style={styles.firstStyle}>
                <Text>
                    我是第一个控件(点我传值)
                </Text>
            </View>
        )
    }

    //4. 加载组建完成
    componentDidMount() {
        console.log('4-componentDidMount')
    }

    //5.是否刷新界面, 返回值Bool
    shouldComponentUpdate(nextProps, nextState) {
        console.log('5-houldComponentUpdate')
        return true
    }

    //6. 即将刷新组件
    componentWillUpdate() {
        console.log('6-componentWillUpdate')
    }

    //7.完成刷新
    componentDidUpdate() {
        console.log("7-componentDidUpdate")
    }

    //8.组件销毁
    componentWillUnmount() {
        console.log('8-componentWillUnmount')
    }
}





// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        backgroundColor: 'green'
    },
    firstStyle:{//第一个控件
        marginHorizontal:20,
        height:100,
        marginTop:50,
        backgroundColor:'red'
    },
    senderStyle:{//第二个控件
        marginHorizontal:20,
        height:100,
        marginTop:20,
        backgroundColor:"yellow"
    },
    junViewStyle:{
        width:100,
        height:100,
        marginTop:50,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }


});

