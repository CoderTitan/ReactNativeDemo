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
    Image,
    Button,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';

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




//在JS中,加载本地文件,通过require(加载相对路径)
var listData = require('./Resource/zhubo.json')


// 3.自定义 程序入口组件([[UIView alloc] init])
export default class App extends Component<{}> {

    //构造方法
    constructor(props){
        super(props)
        this.state = {
            listArr: []
        }
    }
    //组件加载完成的时候调用
    componentDidMount() {
        //加载本地数据, 网络请求
        this.setState({
            listArr:listData
        })
    }

    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            //在ScrollView的所有监听滚动的事件中, 默认都会传入一个合成事件
            //合成事件: 原生APP中产生的一个对象, 这个合成对象有一个原生事件对象
            <ScrollView style={{flex:1}}
                        scrollEventThrottle={1}
                // contentOffset={{x: 0, y: 150}}
                        onMomentumScrollBegin={this._onMomentumScrollBegin.bind(this)}
                        onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                        onScrollBeginDrag={this._onScrollBeginDrag.bind(this)}
                        onScrollEndDrag={this._onScrollEndDrag.bind(this)}
                        onScroll={this._onScroll.bind(this)}
            >
                {this.setupChildScrollView(this.state.listArr)}
            </ScrollView>
        )
    }

    //创建子控件
    setupChildScrollView(listData){
        // fonin遍历
        var imageArr = []
        listData.forEach((data, i)=>{
            imageArr.push(
                <Image  source={{uri: data.icon}}
                        style={{width: kScreenWidth, height: 200}}
                        key={i}
                />
            )
        })
        return imageArr
    }

    //监听scrollView的滚动
    //1. 监听滚动开始
    _onMomentumScrollBegin(){
        console.log('滚动开始')
    }

    //2. 监听滚动结束
    _onMomentumScrollEnd(){
        console.log("滚动结束")
    }

    //3. 监听开始拖拽
    _onScrollBeginDrag(){
        console.log('开始拖拽')
    }

    //4. 监听结束拖拽
    _onScrollEndDrag(){
        console.log('结束拖拽')
    }

    //5. 监听滚动动画完成
    _onScrollAnimationEnd(){
        console.log('滚动动画完成')
    }

    //6. 监听滚动的时候
    _onScroll(e){
        // 获取原生事件
        var nativeEvent = e.nativeEvent
        console.log(nativeEvent.contentOffset)
    }
}



// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        backgroundColor:'#f7f7f7',
        alignItems:'center'
    }
});

