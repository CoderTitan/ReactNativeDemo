
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
// import JunNetRequest from 'JunNetRequest'

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
        var datas = []
        for (var i = 0; i < 10; i++){
            datas.push({
                key: i,
                title: i
            })
        }

        this.state = {
            datas: datas
        }
    }
    componentDidMount() {

    }

    render() {
        var datas = []
        for (var i = 0; i < 10; i++){
            datas.push({
                key: i,
                title: i
            })
        }

        return (
            <View style={styles.viewStyle}>
                <FlatList style={{backgroundColor:'white', marginTop:30, width:414}}
                          ListHeaderComponent={this._listHeader.bind(this)}
                          ListFooterComponent={this._listFooter.bind(this)}
                          ItemSeparatorComponent={this._listSeparator.bind(this)}
                          renderItem={this._renderItem}
                          date={datas}
                >

                </FlatList>

            </View>
        )
    }

    //cell
    _renderItem = ({item, index}) => {
        var text = '第' + item.index + '行'
        return (
            <Text style={[styles.textStyle, {height:30}]}> {'这是FlastList的尾部'} </Text>
        )
    }

    //头部
    _listHeader(){
        return (
            <Text style={styles.textStyle}> {'这是FlastList的头部'} </Text>
        )
    }

    //尾部
    _listFooter(){
        return (
            <Text style={styles.textStyle}> {'这是FlastList的尾部'} </Text>
        )
    }

    //分割线
    _listSeparator(){
        return (
            <View style={{backgroundColor:'black', height:1}}/>
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

