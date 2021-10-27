import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="my-3">LinkinNews - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="Card Title" description="Card Description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Card Title" description="Card Description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Card Title" description="Card Description" />
                    </div>
                </div>
            </div>
        )
    }
}
