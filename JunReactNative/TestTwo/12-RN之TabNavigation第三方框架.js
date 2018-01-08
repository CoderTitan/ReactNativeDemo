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
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'

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
            <TabNavigator>
                <TabNavigator.Item title='首页'
                                   selected={this.state.selectedIndex == 0}
                                   titleStyle={{color:'#9d9d9d'}}
                                   selectedTitleStyle={{color:'#ed7f30'}}
                                   badgeText='首页'
                                   allowFontScaling={false}
                                   renderIcon={()=>
                                       <Image source={{uri:'btn_home_normal'}} style={styles.iconStyle}/>
                                   }
                                   renderSelectedIcon={()=>
                                       <Image source={{uri:'btn_home_selected'}} style={styles.iconStyle}/>
                                   }
                                   onPress={()=>
                                       this.setState({
                                           selectedIndex:0
                                       })
                                   }
                >
                    <View style={[styles.viewStyle, {backgroundColor:'red'}]}>
                        <Text>首页</Text>
                    </View>
                </TabNavigator.Item>

                <TabNavigator.Item title='我的'
                                   selected={this.state.selectedIndex == 1}
                                   titleStyle={{color:'#9d9d9d'}}
                                   selectedTitleStyle={{color:'#ed7f30'}}
                                   badgeText={10}
                                   renderIcon={()=>
                                       <Image source={{uri:'btn_user_normal'}} style={styles.iconStyle}/>
                                   }
                                   renderSelectedIcon={()=>
                                       <Image source={{uri:'btn_user_selected'}} style={styles.iconStyle}/>
                                   }
                                   onPress={()=>
                                       this.setState({
                                           selectedIndex:1
                                       })
                                   }
                >
                    <View style={[styles.viewStyle, {backgroundColor:'green'}]}>
                        <Text>我的</Text>
                    </View>

                </TabNavigator.Item>
            </TabNavigator>
        )
    }

}


// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    iconStyle:{
        width:24,
        height:24
    }
});

