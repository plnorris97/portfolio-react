import React from 'react';
import { Card, CardText, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

class Blog extends React.Component {
    render () {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-9">
                        <h2>Featured Article</h2>
                        <Card id="article">
                            <CardImg id="image"></CardImg>
                            <CardTitle id="title">Feature Article Title Here</CardTitle>
                            <CardSubtitle id="subtitle">Feature Article Subtitle</CardSubtitle>
                            <CardText id="text">Article Intro text here...</CardText>
                        </Card>
                        {/* image left - article intro right */}
                    </div>
                    <div class="col-sm-3" id="more">
                        <h3>More Articles</h3>
                        <p id="more">Article title here</p> 
                        {/* link to blog article page */}
                        <p id="more">Article title here</p>
                        {/* link to blog article page */}
                        <p id="more">  Article title here</p>
                        {/* link to blog article page */}
                        <p id="more">Article title here</p>
                        {/* link to blog article page */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Blog;