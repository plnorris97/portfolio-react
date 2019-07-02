import React from 'react';
// import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Blog extends React.Component {
    render () {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-9">
                        <h2>Featured Article</h2>
                        {/* image left - article intro right */}
                    </div>
                    <div class="col-sm-3">
                        <h3>More Articles</h3>
                        <p>Article title here</p> 
                        {/* link to blog article page */}
                        <p>Article title here</p>
                        {/* link to blog article page */}
                        <p>Article title here</p>
                        {/* link to blog article page */}
                        <p>Article title here</p>
                        {/* link to blog article page */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Blog;