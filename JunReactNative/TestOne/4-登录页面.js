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
    TouchableOpacity
} from 'react-native';


//全屏的宽
var kScreenWidth = Dimensions.get('window').width
//全屏的高
var kScreenHeight = Dimensions.get('window').height



const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 3.自定义 程序入口组件([[UIView alloc] init])
export default class App extends Component<{}> {

    //创建3个登录方式
    setupIconImage(){
        var imageArr = []
        const titleArr = ["Wechat", "QQ", "Sina"]
        for (var i = 0; i < 3; i++) {
            imageArr.push(
                <TouchableOpacity
                    key = {i}
                    onPress={()=>{
                        alert('登录')
                    }}
                >
                    <Image source={{uri: titleArr[i]}}
                           style={{width:50, height:50}}
                    />
                </TouchableOpacity>
            )
        }

        return imageArr
    }
    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            <View style={styles.mainStyle}>
                {/*头像*/}
                <Image source={{uri: 'Benz-GLA1'}}
                       style={styles.headerImageStyle}
                />

                {/*账号输入框*/}
                <TextInput style={[styles.textInputStyle, {marginTop:30}]}
                           placeholder='请输入账号'
                           clearButtonMode='while-editing'
                />

                {/*密码输入框*/}
                <TextInput style={[styles.textInputStyle, {marginTop:1}]}
                           placeholder='请输入密码'
                           clearButtonMode='while-editing'
                           secureTextEntry={true}
                />

                {/*登录按钮*/}
                <Text style={styles.loginStyle}
                      onPress={()=>{
                          alert('登录')
                      }}
                >
                    登录
                </Text>

                {/*登陆问题和新用户*/}
                <View style={{width:kScreenWidth-60, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:15, color:'#888888'}}
                          onPress={()=>{
                              alert('点击了登录遇到问题')
                          }}
                    >
                        登录遇到问题?
                    </Text>
                    <Text style={{fontSize:15, color:'#888888'}}
                          onPress={()=>{
                              alert('点击了新用户')
                          }}
                    >
                        新用户
                    </Text>
                </View>

                {/*其他登录方式*/}
                <Text style={{fontSize:14, color:'#999999', marginTop:70}}>
                    ------其他登录方式------
                </Text>
                <View style={{width:kScreenWidth-150, height:50, marginTop:20, flexDirection:'row', justifyContent:'space-around'}}>
                    {this.setupIconImage()}
                </View>
            </View>
        )
    }
}



// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        backgroundColor:'#f7f7f7',
        alignItems:'center'
    },
    headerImageStyle:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 80
    },
    textInputStyle:{
        backgroundColor:'white',
        width:kScreenWidth,
        height:44,
        textAlign:'center'
    },
    loginStyle:{
        marginTop:30,
        backgroundColor:'#ff4040',
        width: kScreenWidth - 60,
        height:44,
        color:'white',
        lineHeight:44,
        textAlign:'center',
        fontSize:20
    }

});

