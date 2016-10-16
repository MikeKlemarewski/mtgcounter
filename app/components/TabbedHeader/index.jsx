import {PropTypes} from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

let boundClassNames = classNames.bind(styles);

const TabbedHeader = ({items, activeIndex}) => {
    var itemClasses = '';

    return (
        <div className={styles['tabbed-header']}>
            <div className={styles.tabs} style={{width: `${50 * items.length}%`}}>
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

TabbedHeader.propTypes = {
    text: PropTypes.string
};

TabbedHeader.defaultProps = {
    activeIndex: 0
}

export default TabbedHeader;
