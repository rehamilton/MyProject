import React from 'react';




function SliderContent({ image, author, link, title, description, position, year }) {




    return (

        <div className="card-panel">
            <div className= "row">
                <div className="col m3">
                    <a href={link} target="_blank">
                        <img className = "sliderImage" src={image} alt= {title}/>
                    </a>
                </div>

                <div className="col m8 sliderText">
                    <div>
                        <h5>{title}</h5>
                        <p>Position: {position}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
       
    )

}

export default SliderContent