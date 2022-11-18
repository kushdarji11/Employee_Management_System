import React, { Component } from 'react';

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
            employee: []
        }
    }


    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>

            </div>
        );
    }
}

export default ListEmployeeComponent;