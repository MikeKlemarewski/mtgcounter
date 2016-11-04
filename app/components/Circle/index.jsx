import {PropTypes} from 'react'

import styles from './styles.css'

const MAIN_COLOR = '#00AA44'
const WARN_COLOR = '#EFEF1E'
const CRITICAL_COLOR = '#FF1D1D'

const TWO_PI = 2 * Math.PI
const CIRCLE_START = 1.5 * Math.PI

class Circle extends React.Component {
    constructor(props) {
        super(props)
        this.updateCanvas = this.updateCanvas.bind(this)
    }

    componentDidMount() {
        let context = this.refs.canvas.getContext('2d')
        context.lineWidth = 10
        context.strokeStyle = MAIN_COLOR 
        this.updateCanvas()
    }

    componentWillUpdate() {
        this.updateCanvas()
    }

    updateCanvas() {
        let context = this.refs.canvas.getContext('2d')
        let canvas = context.canvas

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.beginPath()

        let x = canvas.width / 2
        let y = canvas.height / 2
       

        let fillRatio = (this.props.filled / this.props.total)
        let circleEnd = CIRCLE_START - fillRatio * TWO_PI

        if (fillRatio > 0.5) {
            context.strokeStyle = MAIN_COLOR 
        } else if (fillRatio > 0.25) {
            context.strokeStyle = WARN_COLOR 
        } else {
            context.strokeStyle = CRITICAL_COLOR
        }


        context.arc(x, y, x - 10, CIRCLE_START, circleEnd, true)
        context.stroke()
    }

    render() {
        return (
            <canvas ref="canvas" width={this.props.width} height={this.props.height}>
            </canvas>
        )
    }
}

export default Circle
