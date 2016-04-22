import React from 'react';
import styles from './styles.css';

export default class ExampleComponent extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div className={styles.example}>
                    Test content. Props are: {JSON.stringify(this.props.initialData)}
                </div>
            </div>
        );
    }
};

ExampleComponent.propTypes = {
    initialData: React.PropTypes.any
};
