import React, { Component } from 'react';
import Breadcrumb  from 'react-bootstrap';

class BreadcrumbComponent extends Component {
    render() {
        return (
            <div class="container">
            <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Registration</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Login</Breadcrumb.Item>
            </Breadcrumb></div>
        );
    }
}

export default BreadcrumbComponent;