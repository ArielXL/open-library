import React, { Component } from 'react';
import Heading from './Heading';

class Headings extends Component {
    render() {
        return (
            <thead className="table-success">
                <tr>
                    {
                        this.props.headings.map((heading, id) => {
                        return <Heading key={id} heading={heading} />
                        })
                    }
                </tr>
            </thead>
        );
    }
}

export default Headings;