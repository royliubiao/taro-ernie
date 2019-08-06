import Taro, { Component, Config, showActionSheet } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import RedBall from '@/components/red-ball'
import { AtButton } from 'taro-ui'

import './index.scss'
interface state {
  num: number
  run: boolean
  chooseRedBall: object
}

export default class Index extends Component<state> {
  static options = {
    addGlobalClass: true
  }
  constructor() {
    super()

  }
  state: state = {
    num: 35,
    run: false,
    chooseRedBall: {}
  }
  /**
   * 指定config的类型声明为: Taro.Config
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '大乐透摇奖'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  //开始摇奖
  start =  () => {
    let redMax = 35
    let blueMax = 12
    let min = 1
    this.createRedBalss(redMax, min)
    this.createRedBalss(blueMax, min)
  }

  //创建红球
  createRedBalss(redMax, min) {
    let redBall = {}
    //重置红球重置
    for (let i = 0; i < 5; i++) {
      let redCode = Math.floor(Math.random() * (redMax - min) + min)
      //如果已经有了相同的球
      if (redBall[redCode]) {
        return this.start()
      }
      if (Object.values(redBall).length === 5) {
        return
      }
      redBall[redCode] = redCode
    }
    console.log("红球🌶2", redBall)
  }

  // 创建篮球
  createBlueBalss(blyeMax, min) {
    let redBall = {}
    //重置红球重置
    for (let i = 0; i < 5; i++) {
      let redCode = Math.floor(Math.random() * (blyeMax - min) + min)
      //如果已经有了相同的球
      if (redBall[redCode]) {
        return this.start()
      }
      if (Object.values(redBall).length === 5) {
        return
      }
      redBall[redCode] = redCode
    }
    console.log("红球🌶2", redBall)
  }

  render() {
    const { num, run } = this.state
    return (

      <View className="p20">
        {/* title */}
        <Text className="fcred fz32 w100">
          红球
        </Text>

        {/* ReadBall */}
        <RedBall num={num} run={run}></RedBall>
        {/* 按钮 */}
        <AtButton onClick={this.start} className="startbtn" type='primary' size='normal'>开始</AtButton>
      </View>
    )
  }
}
