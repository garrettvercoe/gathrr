import React, { Component } from 'react';
import './styles/ArticleDisplay.css';
import Card from '@material-ui/core/Card';
import empty from './images/empty.png';

class ArticleDisplay extends Component {
    render() {
        return (
            <div className="container">
                <Card>
                    <div class="card-container">
                        <div class="image">
                            <img src={empty} />
                        </div>
                        <div class="text">
                            world
                        </div>
                    </div>
                </Card>
                ArticleDisplay
            </div>
        );
    }
}

export default ArticleDisplay;
