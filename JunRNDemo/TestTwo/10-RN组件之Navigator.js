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
    Text
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



// 3.自定义 程序入口组件([[UIView alloc] init])
export default class App extends Component<{}> {

//Cannot read property 'shape' of undefined
    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            <Navigator initialRoute={{
                component: JunOneView,
                title:'页面一'
            }}
                       style={{flex:1}}
                       renderScene={this._renderScene.bind(this)}
                       configureScene={this._configureScene.bind(this)}
            />
        )
    }

    _renderScene(route, navigator){
        return(
            <route.component navigator={navigator} {...route}/>
        )
    }

    _configureScene(){
        return Navigator.SceneConfigs.PushFromRight
    }
}

//自定义导航栏页面
export class JunOneView extends Component {
    render(){
        return (
            <View style={styles.mainViewStyle}>
                <Text>这是第一个页面</Text>
                <Text onPress={()=>{
                    this.props.navigator.push({
                        component:JunTwoView,
                        title:'第二页面'
                    })
                }}
                >点击跳转到第二个页面</Text>
            </View>
        )
    }
}

class JunTwoView extends Component {
    render(){
        return (
            <View style={{backgroundColor:'green',justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>第二个界面</Text>
                <Text onPress={()=>{
                    this.props.navigator.pop();
                }}>返回</Text>
            </View>
        )
    }
}

// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    mainViewStyle:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
});

