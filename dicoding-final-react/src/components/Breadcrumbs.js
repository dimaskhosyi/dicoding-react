import React from "react";

class Breadcrumbs extends React.Component {
    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">{this.props.title}</li>
                </ol>
            </nav>
        )
    }
}

export default Breadcrumbs