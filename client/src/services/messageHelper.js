const apiRoute = '/api/message';

export const createMessage = (firstname, lastname, email, message) => {

    const messageObj = {
        method:'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: `firstname=${firstname}&lastname=${lastname}&email=${email}&message=${message}`
    }
    console.log('Message created, sent, and stored!');
    return fetch(apiRoute, messageObj)
        .then(res => {
            console.log(res.status)
            return res.json()
        }).catch(error => console.error(error))
}

