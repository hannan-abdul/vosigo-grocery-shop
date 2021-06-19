import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const LatestNewsCard = (props) => {
    const { image, title, date, comments, like } = props.detail;
    return (
        <div className="latest-news-card col-md-6">
            <div className="container">
                <div className="row">
                    <div className="col card">
                        <img src={image} alt="image" />
                        <div className="row">
                            <div className="col">
                            <p><FontAwesomeIcon icon={faCalendarAlt} /> {date}</p>
                            </div>
                            <div className="col">
                                <p><FontAwesomeIcon icon={faComment} /> {comments}</p>
                            </div>
                            <div className="col">
                                <p><FontAwesomeIcon icon={faThumbsUp} /> {like}</p>
                            </div>
                        </div>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNewsCard;