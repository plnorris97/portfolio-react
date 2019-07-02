// create a UI component to welcome the visitor to the site.
import React from 'react';
import { Media } from 'reactstrap'; 
import About1 from '../About1/About1';
import Callout from '../Callout/Callout';
import Portfolio1 from '../Portfolio1/Portfolio1';
import Blog from '../Blog/Blog';
import './Welcome.css';


class Welcome extends React.Component {
    render () {
        return (
            <div class="welcome">
                <h3>My friends call me Trish</h3>
                <p class="intro">
                Spicy jalapeno bacon ipsum dolor amet elit labore aliqua, swine eu aliquip rump velit t-bone in. Enim sunt aliqua kielbasa aute ham hock venison ea, turducken quis tongue beef ribs excepteur. Salami id ea doner enim beef est shank commodo chuck ad aute corned beef porchetta ham hock. Swine corned beef culpa, ground round ex beef ribs pancetta turkey aliqua. Est qui ex, nostrud ball tip aliqua aliquip.
                </p>
                <Media eft href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                </Media>
                <About1 />
                <Callout />
                <Portfolio1 />
                <Blog />
            </div>
        )
    }; 
}

export default Welcome;