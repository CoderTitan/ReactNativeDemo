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
    ListView,
    Dimensions
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

    //初始化
    constructor(props){
        super(props)

        //1. 创建数据源对象
        var datas = new ListView.DataSource({
            //在数据改变的时候刷新列表
            rowHasChanged: (r1, r2)=>{r1 != r2}
        })

        //设置数据
        this.state = {
            datArr: datas.cloneWithRows(['row1', 'row2'])
        }
    }



    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {

        return (

            <View style={{flex:1, backgroundColor:'#f7f7f7'}}>
                <ListView style={styles.listViewStyle}
                    //设置数据源
                          dataSource={this.state.datArr}
                    //渲染哪一行
                          renderRow={this._renderRow.bind(this)}
                    //设置头部视图
                          renderHeader={this._renderHeader.bind(this)}
                    //设置footer视图
                          renderFooter={this._renderFooter.bind(this)}
                />
            </View>
        )
    }

    //设置头部视图
    _renderHeader(){
        return (
            <View style={{height:30, backgroundColor:'red'}}>
            </View>
        )
    }
    //设置footer视图
    _renderFooter(){
        return (
            <View style={{height:30, backgroundColor:'green'}}>
            </View>
        )
    }

    //渲染的每一行cell的外观
    //rowData: 每一行数据
    //sectionID: 组数据
    //rowID: 每一行的角标
    //highlightRow: 高粱函数, 告诉它哪一行需要高亮,(点击的时候), 需要传入组ID合行ID
    _renderRow(rowData,sectionID,rowID,highlightRow){
        return (
            <View style={styles.cellStyle}>
                <Text>{rowData}</Text>
            </View>
        )

    }

}



// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    listViewStyle:{
        backgroundColor:'#f7f7f7',
        marginTop:20
    },
    cellStyle:{
        height:44,
        backgroundColor:'white',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#f7f7f7'
    }

});

