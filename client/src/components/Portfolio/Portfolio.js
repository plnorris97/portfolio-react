import React from 'react';
import { Button, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap';


function Portfolio() {
    return (
        <Card>
        <CardBody >
            <CardImg src="" alt="Tricia Norris"></CardImg>
            <CardText>Category</CardText>
            <CardTitle>Project Title</CardTitle>
            <CardSubtitle>Technologies Used: </CardSubtitle>
            <CardText>Ribeye excepteur chicken, pork chop velit ea enim magna prosciutto esse kielbasa shank ipsum short loin elit. Culpa shank laborum short loin. Sint veniam boudin pig excepteur fatback turkey ullamco ribeye. Occaecat shankle cillum, boudin ut venison ipsum exercitation picanha biltong ball tip ea turducken eu beef. Spare ribs deserunt velit porchetta ham hock ad eiusmod pariatur tail aute ipsum occaecat.</CardText>    
            <Button href="">Live App Link</Button>
            <Button href="">Github Link</Button>
        </CardBody>
        </Card>
    )    
}


export default Portfolio;