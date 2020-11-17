const apiRoute = '/api/message';

export const getMessages = () => {
    console.log('getting messages');
    
    return fetch(apiRoute)
        .then(res => {
            console.log(res.status)
            console.log(res);
            return res.json();

        }).then((response) => {
            console.log(response);
            response = response.reverse();
            return response
        })
        .catch(error => console.error(error))
}

