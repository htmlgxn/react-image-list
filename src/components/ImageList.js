import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <div className='three wide column' key={image.id}>
                <div className='ui segment'>
                    <img className='ui image' src={image.webformatURL} alt={props.entry} />
                </div>
            </div>
        )
    }) 
    return (
        <div id='list' className='ui grid'>
            {images}
        </div>
    )
}

export default ImageList;