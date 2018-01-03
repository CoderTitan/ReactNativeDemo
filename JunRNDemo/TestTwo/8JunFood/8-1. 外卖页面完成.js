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
    ListView,
    Dimensions,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import JunFoodCell from './TestTwo/8JunFood/JunFoodCell'
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
//获取像素比
var pixeRatio = PixelRatio.get()


// 3.自定义 程序入口组件([[UIView alloc] init])
export default class App extends Component<{}> {

    //初始化
    constructor(props){
        super(props)

        //1. 创建数据源对象
        var datas = new ListView.DataSource({
            rowHasChanged: (r1, r2)=>{r1 != r2},
        })

        //2. 请求数据'
        var foodArr = require('./Resource/food.json')

        //3. 设置数据
        datas = datas.cloneWithRows(foodArr)

        //5. 保存数据源
        this.state = {
            dataArr: datas
        }
    }


    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            <View style={{flex:1}}>
                <ListView style={{backgroundColor:'white', marginTop:20}}
                    //设置数据源
                          dataSource={this.state.dataArr}
                    //渲染哪一行
                          renderRow={this._renderRow.bind(this)}
                />

                {/*底部计算View*/}
                <View style={styles.bottomViewStyle}>
                    <View style={{flexDirection:'row', marginLeft:10, alignItems:'center'}}>
                        <Text style={{fontSize: 20, color:'black'}}>总计: </Text>
                        <Text style={{fontSize: 20, color:'red'}}>$234</Text>
                    </View>
                    <TouchableOpacity style={styles.rightButtonStyle}
                                      onPress={this._submitAction.bind(this)}
                    >
                        <Text style={{color:'white', fontSize:20}}>去结算</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //创建cell
    _renderRow(rowData,sectionID,rowID){
        return (
            <JunFoodCell rowData={rowData}/>
        )
    }

    //1. 结算按钮
    _submitAction(){

    }
}


// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    listViewStyle:{
        backgroundColor:'#f7f7f7',
        marginTop:20
    },
    bottomViewStyle:{
        height:40,
        borderWidth:1,
        borderColor:'#e8e8e8',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rightButtonStyle:{
        backgroundColor:'red',
        width:80,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    }
});

