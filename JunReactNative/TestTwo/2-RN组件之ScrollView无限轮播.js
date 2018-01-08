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




// 3.自定义 程序入口组件([[UIView alloc] init])
export default class App extends Component<{}> {
    //监听定时器方法, 每隔一秒更新界面
    updataTimerAction(){
        //获取当前页码
        var page = this.state.currentPage
        page += 1
        var animated = true

        //滚动到最后一张
        if (page >= this.state.listArr.length) {
            page = 0
            animated = false
        }

        //冲刺你更改当前页面
        this.setState({
            currentPage: page
        })

        var scrollView = this.refs.scrollView

        var offSetX = page * kScreenWidth

        scrollView.scrollTo({x: offSetX, y: 0, animated: animated})
    }

    //开始拖动
    _onScrollBeginDrag(){
        clearInterval(this.timer)
    }

    //停止滚动
    _onScrollEndDrag(){
        //开启定时器
        this.timer = setInterval(this.updataTimerAction.bind(this), 1000)
    }

    //构造方法
    constructor(props){
        super(props)
        this.state = {
            listArr: [],
            currentPage: 0
        }
    }
    //组件加载完成的时候调用
    componentDidMount() {
        //加载本地数据, 网络请求
        //在JS中,加载本地文件,通过require(加载相对路径)
        var listData = require('./Resource/zhubo.json')

        this.setState({
            listArr:listData,
        })

        //添加定时器
        this.timer = setInterval(this.updataTimerAction.bind(this), 1000)
    }

    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            //在ScrollView的所有监听滚动的事件中, 默认都会传入一个合成事件
            //合成事件: 原生APP中产生的一个对象, 这个合成对象有一个原生事件对象
            <View>
                <ScrollView style={{width:kScreenWidth, height:250, backgroundColor:'yellow'}}
                            scrollEventThrottle={1}
                            horizontal={true}
                            ref = 'scrollView'
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onScrollBeginDrag={this._onScrollBeginDrag.bind(this)}
                            onScrollEndDrag={this._onScrollEndDrag.bind(this)}
                            onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                >
                    {this.setupChildScrollView(this.state.listArr)}
                </ScrollView>

                <View style={styles.bottomViewStyle}>
                    {/*添加左边标题*/}
                    <Text style={{color:'white', marginLeft: 10}}> {this.getLeftTitle()} </Text>
                    {/*添加右侧指示器*/}
                    <View style={{marginRight:10, flexDirection:'row', alignItems:'center'}}>
                        {this.setRightIndicator()}
                    </View>
                </View>
            </View>
        )
    }

    //获取左边标题
    getLeftTitle(){
        // var listData = this.state.listArr
        var data = this.state.listArr[this.state.currentPage]
        if (data == undefined) return ""
        return data.title
    }

    //创建右侧小点点
    setRightIndicator(){
        var listData = this.state.listArr

        var indocArr = []
        listData.forEach((data, i)=>{
            //生成一个指示器
            indocArr.push(
                <View style={[styles.indicatorStyle, {backgroundColor: (i == this.state.currentPage ? 'red' : 'white')}]}
                      key={i}
                />
            )
        })
        return indocArr
    }

    //创建子控件
    setupChildScrollView(listData){
        // fonin遍历
        var imageArr = []
        listData.forEach((data, i)=>{
            imageArr.push(
                <Image  source={{uri: data.icon}}
                        style={{width: kScreenWidth, height: 250}}
                        key={i}
                />
            )
        })
        return imageArr
    }


    // 滚动完成的时候调用
    _onMomentumScrollEnd(e){
        // 获取原生事件
        var nativeEvent = e.nativeEvent
        //获取当前偏移量
        var contentX = nativeEvent.contentOffset.x
        //当前页
        var page = contentX / kScreenWidth

        this.setState({
            currentPage:page
        })
    }

    //当组件即将销毁的时候
    componentWillUnmount() {
        clearInterval(this.timer)
    }
}



// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    bottomViewStyle:{
        width: kScreenWidth,
        height: 40,
        backgroundColor:'rgba(1, 1, 1, 0.7)',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    indicatorStyle:{
        width:5,
        height:5,
        borderRadius:2.5,
        backgroundColor:'white',
        marginLeft:5
    }
});

