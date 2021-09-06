import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

const GifReadItem = props => {

    const { img } = props;

    return (
        <div className="animate__animated animate__rollIn">
            <div className="card">
                <img src={img.url} alt={img.title} />
                <p>{ img.title }</p>
            </div>
        </div>  
    );
};

GifReadItem.propTypes = {
    img: PropTypes.object.isRequired,
};

export default GifReadItem
