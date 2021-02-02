import React, { Component } from "react";
import Row from './Row';

class Rows extends Component {
    render() {
        return (
            <tbody>
                {
                    this.props.data.map((row, id) => {
                        return <Row key={id} change={row} />
                    })
                }
            </tbody>
        );
    }
}

export default Rows;