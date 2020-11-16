import React, {useState}from "react";
import cardSeed from '../../seed';

const Portfolio = () => {

    const [myStill, setMyStill] = useState(cardSeed);
    

    
    const cardPics = myStill.map(projects => {
        // console.log(projects);
        return (
            <ul>
                <div>
                    <div className="card" id={projects.still}>
                        <img src={projects.still} className="card-img-top" alt="project" onMouseOver={e => e.currentTarget.src=projects.hover} />
                        <div className="card-body">
                            <h5 className="card-title">{projects.title}</h5>
                            <p className="card-text">{projects.text}</p>
                            <a href={projects.href} target="_blank" rel="noreferrer" className="btn btn-info">Launch App</a>
                        </div>
                    </div>
                </div>
            </ul>
        )
    });
    return cardPics
}

export default Portfolio