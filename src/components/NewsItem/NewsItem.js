import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        const { title, description } = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0908%2Fr906330_1296x729_16%2D9.jpg" alt="Card image cap"/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title}</h5>
                    <p className ="card-text">{description}</p>
                    <a href="/" className ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
