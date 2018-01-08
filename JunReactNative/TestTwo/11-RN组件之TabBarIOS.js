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
    TabBarIOS
} from 'react-native';

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
        this.state = {
            selectedIndex:0
        }
    }

    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            <TabBarIOS tintColor='#ed7f30'
                // barTintColor='yellow'

            >
                <TabBarIOS.Item title='首页'
                                icon={{uri:'btn_home_normal'}}
                                selectedIcon={{uri:'btn_home_selected'}}
                                onPress={()=>{
                                    this.setState({
                                        selectedIndex:0
                                    })
                                }}
                                selected={this.state.selectedIndex == 0}
                >
                    <View style={{backgroundColor:'red', flex:1}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item title='直播'
                                icon={{uri:'btn_column_normal'}}
                                selectedIcon={{uri:'btn_column_selected'}}
                                onPress={()=>{
                                    this.setState({
                                        selectedIndex:1
                                    })
                                }}
                                selected={this.state.selectedIndex == 1}
                >
                    <View style={{backgroundColor:'yellow', flex:1}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item title='关注'
                                icon={{uri:'btn_live_normal'}}
                                selectedIcon={{uri:'btn_live_selected'}}
                                onPress={()=>{
                                    this.setState({
                                        selectedIndex:2
                                    })
                                }}
                                selected={this.state.selectedIndex == 2}
                >
                    <View style={{backgroundColor:'green', flex:1}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item title='我的'
                                icon={{uri:'btn_user_normal'}}
                                selectedIcon={{uri:'btn_user_selected'}}
                                onPress={()=>{
                                    this.setState({
                                        selectedIndex:3
                                    })
                                }}
                                selected={this.state.selectedIndex == 3}
                >
                    <View style={{backgroundColor:'blue', flex:1}}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }

    /*
    _setTabbarItems(){
        var normalImages = ['btn_home_normal', 'btn_column_normal', 'btn_live_normal', 'btn_user_normal']
        var selectImages = ['btn_home_selected', 'btn_column_selected', 'btn_live_selected', 'btn_user_selected']
        var titles = ['首页', '直播', '关注', '我的']

        var items = []
        for (var i = 0; i < titles.length; i++) {
            items.push(
                <TabBarIOS.Item title={titles[i]}
                                icon={{uri:normalImages[i]}}
                                selectedIcon={{uri:selectImages[i]}}
                                onPress={()=>{
                                    this.setState({
                                        selectedIndex:i
                                    })
                                }}
                                selected={this.state.selectedIndex == i}
                                key={i}
                >
                    <View style={{backgroundColor:'red', flex:1}}/>
                </TabBarIOS.Item>
            )
        }

        return items
    }
*/
}


// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    mainViewStyle:{
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
});

