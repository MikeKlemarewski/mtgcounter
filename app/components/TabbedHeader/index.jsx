import {PropTypes} from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

let boundClassNames = classNames.bind(styles);

class TabbedHeader extends React.Component {

    constructor(props) {
        super(props)
        this.touchX = 0
        this.dragEnd = 0
        this.momentum = 0
        this.width = 50 * this.props.items.length
        this.maxDrag = -(100 - (100 / this.props.items.length))

        this.state = {
            offset: 0
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
        this.touchX = event.changedTouches[0].clientX
    }

    doDrag(event) {
        // Dividing by 10 makes the dragging feel decent
        let newOffset = this.state.offset + (event.changedTouches[0].clientX - this.touchX) / 10
        this.setState({
            offset: Math.max(this.maxDrag, Math.min(newOffset, 0)),
        })
        this.momentum = event.changedTouches[0].clientX - this.touchX
        this.touchX = event.changedTouches[0].clientX
    }

    render() {
        let {items, activeIndex} = this.props
        let {offset} = this.state
        let itemClasses = ''

        return (
            <div className={styles['tabbed-header']}>
                <div
                    className={styles.tabs}
                    style={{
                        width: `${this.width}%`,
                        transform: `translateX(${offset}%)`
                    }}
                    onTouchStart={this.startDrag}
                    onTouchEnd={this.endDrag}
                    onTouchMove={this.doDrag}>

                    {items.map((item, index) => {
                    itemClasses = boundClassNames({
                        tab: true,
                        active: index === activeIndex
                    });
                            return <div className={itemClasses}>{item}</div>
                    })}
                </div>
            </div>
        )
    }
}

TabbedHeader.propTypes = {
    text: PropTypes.string
}

TabbedHeader.defaultProps = {
    activeIndex: 0
}

export default TabbedHeader
