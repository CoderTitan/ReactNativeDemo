
import React, { Component, PropTypes } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    Dimensions,
    TouchableOpacity,
    PixelRatio,
    DeviceEventEmitter
} from 'react-native';

//全屏的宽
var kScreenWidth = Dimensions.get('window').width
//全屏的高
var kScreenHeight = Dimensions.get('window').height
//获取像素比
var pixeRatio = PixelRatio.get()


export default class JunFoodCell extends Component {
    //定义对外暴露属性
    // static propTypes = {
    //
    // }

    //初始化
    constructor(props){
        super(props)
        this.state = {
            count: this.props.rowData.count,
            disable: true
        }
    }

    //render初始化界面
    render(){
        return (
            <View style={styles.cellStyle}>
                {/*图片*/}
                <Image source={{uri:this.props.rowData.image}} style={{height:80, width: 80}}/>

                {/*菜名和价格*/}
                <View style={{marginLeft: 10, justifyContent:'space-around'}}>
                    <Text style={{fontSize:18, color:'black'}}>{this.props.rowData.name}</Text>
                    <Text style={{fontSize:18, color:'red'}}>{'$' + this.props.rowData.money}</Text>
                </View>
                {/*选择数量*/}
                <View style={styles.countRightStyle}>
                    <TouchableOpacity onPress={this.removeFoodCount.bind(this)}
                                      disabled={this.state.disable}
                    >
                        <Text style={[styles.numberStyle]}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.numberStyle}>{ this.state.count }</Text>

                    <TouchableOpacity onPress={this.addFoodCount.bind(this)}
                    >
                        <Text style={styles.numberStyle}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //添加食物
    addFoodCount(){
        var count = this.state.count

        count += 1

        this.props.rowData.count = count

        this.setState({
            count: count,
            disable:false
        })

        //添加通知
        DeviceEventEmitter.emit('addFood', this.props.rowData)
    }

    //删减食物
    removeFoodCount(){
        var count = this.state.count

        count -= 1
        if (count <= 0) {
            count = 0
            this.setState({
                count: count,
                disable:true
            })
        }else{
            this.setState({
                count: count,
                disable:false
            })
        }

        this.props.rowData.count = count

        //添加通知
        DeviceEventEmitter.emit('removeFood', this.props.rowData)
    }
}


// 4.样式表 组件外观 尺寸,颜色
const styles = StyleSheet.create({
    cellStyle:{
        height:100,
        padding:10,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'#f7f7f7',
        flexDirection:'row'
    },
    countRightStyle:{
        position:'absolute',
        right:0,
        alignSelf:'center',
        flexDirection:'row'
        // justifyContent:'space-around'
    },
    numberStyle:{
        fontSize:20,
        width:30,
        height:30,
        borderColor:'#e8e8e8',
        borderWidth:1/pixeRatio,
        textAlign:'center',
        lineHeight:30
    }
});

