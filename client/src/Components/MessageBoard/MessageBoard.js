import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import {getMessages} from '../../services/getMessages'

const Messages = (props) => {
    const [working, setWorking] = useState(true)
    const [messages, setMessages] = useState({data:[]});

    useEffect(() => {
        const fetchData = async () => {
            const result = await getMessages();
            console.log(result)
            setMessages(result);
            setWorking(false);
            
        }
        fetchData()
    }, []);

    console.log(messages);
    
    return (
        <div className='table-container'>
        <h1>Message Board</h1>
        {working ? (
            <div className="col-lg-12 col-md-12 ">
                <div className="table-responsive">
                    <table className="table table-striped ">
                        <thead className="thead-inverse">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <h2>Loading...</h2>
                        </tbody>
                    </table>
                </div>
            </div>
        
        ) : (
            <div className="col-lg-12 col-md-10">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message) => 
                                <tr key={message._id.trim()}>
                                    <td>{message.firstname.trim()}</td>
                                    <td>{message.lastname.trim()}</td>
                                    <td>{message.email.trim()}</td>
                                    <td>{message.message.trim()}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
        </div>
    );

}

export default withRouter(Messages)