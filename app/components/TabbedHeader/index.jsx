import {PropTypes} from 'react'
import classNames from 'classnames/bind'
import styles from './styles.css'

let boundClassNames = classNames.bind(styles);

class TabbedHeader extends React.Component {


    constructor(props) {
        super(props)
        this.touchX = 0
        this.dragEnd = 0
        this.momentum = 0
        this.maxDrag = 0
        this.widthPixels = 0
        this.widthPercent = 50 * this.props.items.length

        this.state = {
            offset: 0,
            dragging: false
        }

        this.startDrag = this.startDrag.bind(this)
        this.endDrag = this.endDrag.bind(this)
        this.doDrag = this.doDrag.bind(this)
    }

    componentWillReceiveNewProps(props) {
        this.width = 50 * this.props.items.length
    }
    componentDidUpdate() {
    }

    startDrag(event) {
        let el = event.target
        while ((el = el.parentElement) && !el.classList.contains(styles.tabs));
        this.widthPixels = el.clientWidth
        this.maxDrag = -(el.clientWidth - (el.clientWidth / this.props.items.length))

        this.setState({
            dragging: true,
        })
        this.touchX = event.changedTouches[0].clientX
    }

    doDrag(event) {
        let newOffset = this.state.offset + (event.changedTouches[0].clientX - this.touchX)
        this.setState({
            offset: Math.max(this.maxDrag, Math.min(newOffset, 0)),
        })
        this.momentum = event.changedTouches[0].clientX - this.touchX
        this.touchX = event.changedTouches[0].clientX
    }

    endDrag() {
        this.setState({
            dragging: false,
        })

        let targetOffset = this.state.offset + this.momentum
        let tabWidth = this.widthPixels / this.props.items.length
        let nextActiveIndex = Math.round(targetOffset / tabWidth)
        let clampedOffset = nextActiveIndex * tabWidth


        this.setState({
            offset: Math.max(Math.min(0, clampedOffset), this.maxDrag)
        })
        this.props.onUpdateActiveIndex(Math.abs(nextActiveIndex))
    }

    render() {
        let {items, activeIndex} = this.props
        let {offset} = this.state
        let textClass = ''

        let containerStyles = {
            width: `${this.widthPercent}%`,
            transform: `translateX(${offset}px)`
        }

        if (!this.state.dragging) {
            containerStyles = {
                ...containerStyles,
                transition: `transform 0.25s`,
                'transitionTimingFunction': 'ease-out'
            }
        }

        return (
            <div className={styles.tabbedHeader}>
                <div
                    className={styles.tabs}
                    style={containerStyles}
                    onTouchStart={this.startDrag}
                    onTouchEnd={this.endDrag}
                    onTouchMove={this.doDrag}>

                    {items.map((item, index) => {
                        textClass = boundClassNames({
                            tabText: true, 
                            active: index === activeIndex
                        });
                        return (
                            <div className={styles.tab}>
                                <div className={textClass}>
                                    {item}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

TabbedHeader.propTypes = {
    items: PropTypes.array.isRequired,
    onUpdateActiveIndex: PropTypes.func.isRequired
}

TabbedHeader.defaultProps = {
    activeIndex: 0,
    items: []
}

export default TabbedHeader
