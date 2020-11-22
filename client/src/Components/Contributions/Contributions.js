import React from 'react';
import Button from 'react-bootstrap/Button';

const Contributions = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <img src='https://camo.githubusercontent.com/6ebbeb3bbce4e34d4c21f1de95ab98534583219057d5d4f04ff330ea99ab5494/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d726472616368656e62657267' alt='github-stats' id="github-stats" width='445px'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-4'>
                    <img src='https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/git-in-case-of-fire.gif?raw=true' alt='incase of fire' id='incase-fire' width='200px'/>
                </div>
                <div className='col-md-4' id='git-logo-div'>
                    <img src='https://media.giphy.com/media/KzJkzjggfGN5Py6nkT/giphy.gif' alt='git logo' id='git-logo'/>
                </div>
                <div className='col-md-2'></div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <img src='https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/ryan-contributions.jpg?raw=true' alt='contributions' id="contributions"/>
                </div>
            </div>
            
            <div className='row'>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <Button href="https://github.com/rdrachenberg" target="_blank"  id="github-stats-button-two"><i className="fab fa-github"></i> Github</Button>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default Contributions