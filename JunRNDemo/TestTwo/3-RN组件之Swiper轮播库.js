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
import Swiper from './src/index.js'


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

        this.state = {
            listData: []
        }
    }

    //组件加载完成的时候: 加载数据
    componentDidMount() {
        //加载本地和网络数据
        var listData = require('./Resource/zhubo.json')

        this.setState({
            listData:listData
        })
    }

    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render() {
        return (
            <Swiper style={styles.wrapper}
                    height={250}
                // onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 2.5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                        bottom: -23, left: null, right: 10
                    }}
                    autoplay={true}
                    autoplayTimeout={1}
            >

                {this.setupChildScrollView(this.state.listData)}
            </Swiper>
        )
    }

    //创建每一个子视图
    setupChildScrollView(lisrArr){
        var imaArr = []

        //遍历, 常用foeEach遍历
        lisrArr.forEach((data, i)=>{
            imaArr.push(
                <View style={styles.slide}
                      title={<Text numberOfLines={1}>{data.title}</Text>}
                      key={i}
                >
                    <Image resizeMode='stretch' style={styles.image} source={{uri: data.icon}} />
                </View>
            )
        })

        return imaArr
    }
}



// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: kScreenWidth,
        height: 250
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

