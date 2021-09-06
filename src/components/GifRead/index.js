import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifReadItem from '../GifReadItem';

const GifRead = props => {
    
    const { category } = props;

    const { data: images, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__bounceInLeft">{ category }</h3>

            { loading && <p className="animate__animated animate__backInRight">Loading...</p> }

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifReadItem 
                        key={ img.id }
                        img={ img }
                        /> 
                    ))
                }
            </div> 
        </> 
    )
}

GifRead.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifRead
