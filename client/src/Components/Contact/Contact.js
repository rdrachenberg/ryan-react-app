import React, {useState, useEffect}from "react";
import {useForm} from 'react-hooks-helper';
import {createMessage} from '../../services/messageHelper'
import {withRouter} from 'react-router-dom'

const Contact = (props) => {
    console.log(props);
    const [{firstname, lastname, email, message}, setValue] = useForm({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    });
    
    const handleClick = e => {
        e.preventDefault();
        createMessage(firstname, lastname, email, message).then(response => {
            console.log(response);
            if(response){
                props.history.push('/messages')
            }
        })
    }

    return(
        <div>
            <div>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3586667295785!2d-81.36919798491765!3d28.619010682423212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7704603b29eeb%3A0xd09031e89be33785!2s903%20Lake%20Lily%20Dr%2C%20Maitland%2C%20FL%2032751!5e0!3m2!1sen!2sus!4v1604629438116!5m2!1sen!2sus" width="100%" height="290"></iframe>
            </div>
            <div className="container" id='contact-form'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 pb-5">
                        <form onSubmit={handleClick}>
                            <div className="card-contact border-info rounded-0">
                                <div className="card-header p-0">
                                    <div className="bg-info text-white text-center py-2">
                                        <h3><i className="fa fa-envelope"></i>Contact Me</h3>
                                        <p className="m-0">Please fill out the info below</p>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name" value={firstname} onChange={setValue} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" value={lastname} onChange={setValue} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                            </div>
                                            <input type="email" className="form-control" id="email" name="email" placeholder="youremail@gmail.com" value={email} onChange={setValue} required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                            </div>
                                            <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here" value={message} onChange={setValue} required></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-info btn-block rounded-8 py-2" id='contact-button' onClick={handleClick}>Send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                <div>
                    <div id='address-info'  className='card-contact border-info rounded-5'>
                        <address>
                            <strong>Phone</strong>
                            <br/>
                            <strong><a href='tel:1-407-341-1162'>407-341-1162</a></strong>
                        </address>
                    </div>
                </div>
                <div id='contact-me-img-div'>
                    <img id='contact-me-img' src='https://www.kindpng.com/picc/m/49-495621_email-contact-clipart-free-download-clip-art-on.png' alt='contact'/>
                </div>
        </div>
    )
}
export default withRouter(Contact)