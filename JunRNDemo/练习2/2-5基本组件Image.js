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
            wid: 100,
            hei: 100
        }
    }

    componentDidMount() {
        Image.getSize('http://upload-images.jianshu.io/upload_images/4122543-ae133247aa24204e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620', (width, height)=>{
            this.setState({
                wid:width,
                hei:height
            })
        }, (error)=>{
            alert(error)
        })
    }

    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            //Flex主轴和侧轴
            <View style={styles.mainStyle}>
                <Text>2. 加载iOS项目中的资源</Text>
                <Image
                    style={[styles.imageStyle, {width: this.state.wid, height: this.state.hei}]}
                    source={{uri: 'http://upload-images.jianshu.io/upload_images/4122543-ae133247aa24204e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620'}}
                    blurRadius={0}
                    resizeMode='contain'
                    // defaultSource={{uri: 'Benz-GLA2', scale: 1.0}}
                    onLoad={()=>{
                        console.log("图片加载完成")
                    }}
                    onLoadStart={()=>{
                        console.log('图片开始加载')
                    }}
                    onLoadEnd={()=>{
                        console.log('图片加载结束')
                    }}
                    onProgress={(progress)=>{
                        console.log(progress.nativeEvent.total)
                        console.log(progress.nativeEvent.loaded)
                    }}
                    onError={()=>{
                        alert('图片加载错误')
                    }}
                />
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
    imageStyle:{
        width:150,
        height:150,
        backgroundColor:'yellow'
    }
});

