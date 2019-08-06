import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss'

interface Props {
    num: number,
    run: boolean,

}

interface state {
    num: Array<number>
    run: boolean
    redBalls: number[]
}

export default class RedBall extends Component<Props, state> {
    static options = {
        addGlobalClass: true
    }



    componentDidUpdate() {

    }

    miao() {
        console.log('miao, miao, miao~')
    }




    render() {
        const balls = [...Array(this.props.num).keys()]
        const { run } = this.props
        // ballContent
        const ballContent = (
            <View className="df jcs aic flw">
                {balls.map((num) =>
                    <Text className="db ball brball tac fz24" key={num}>
                        {num + 1}
                    </Text>
                )}
            </View>
        )
        return (
            // code__content
            <View className="bgf8 p10 df mt20 fdc">
                {/* {ballContent} */}
                {ballContent}
            </View>
        );
    }
}

