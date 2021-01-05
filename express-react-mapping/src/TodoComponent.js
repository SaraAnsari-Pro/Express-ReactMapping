import React, { Component } from 'react';
import './TodoComponent.css';

export default class TodoComponent extends Component {

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>User ID </th>
                        <th>ID </th>
                        <th> Title</th>
                        <th> Completed</th>
                    </tr>
                    <tr>
                        <th> {this.props.userId}</th>
                        <th> {this.props.id}</th>
                        <th> {this.props.title}</th>
                        <th> {this.props.completed}</th>
                    </tr>
                </table>

            </div>
        )
    }

}