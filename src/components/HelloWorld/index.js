import React from 'react';
import styles from './index.css';

const HelloWorld = (props) => {
    return (
        <div className={styles.parent}>
            <h1 className={styles.child}>Hello World Component</h1>
        </div>
    )
}
 
export default HelloWorld;