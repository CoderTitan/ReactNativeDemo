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
    TextInput
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
                {/*输入框组件*/}
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='请输入账号'
                    placeholderTextColor='#e1e1e1'
                    selectionColor='green'
                    autoFocus={true}
                    // secureTextEntry={false}
                    blurOnSubmit={true}
                    editable={true}
                    maxLength={15}
                    clearTextOnFocus={true}
                    clearButtonMode='while-editing'
                    onBlur={()=>{
                        alert('失去焦点')
                    }}
                    onChange={()=>{//无参数
                        console.log('内容改变了')
                    }}
                    onChangeText={(text)=>{//有参数
                        console.log(text)
                    }}
                    onEndEditing={()=>{
                        console.log('输入结束了')
                    }}
                >

                </TextInput>
            </View>
        )
    }
}



// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center'
    },
    junViewStyle:{
        width:100,
        height:100,
        marginTop:50,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    textInputStyle:{
        width:300,
        height:44,
        borderColor:'#333333',
        borderWidth:1
    }



});

