fetch ('http://localhost:8000/data.json')
.then(ResponseStream => {
    if (ResponseStream.status === 200) {
        return ResponseStream.json();
    } else {
        throw new Error('Request error');
    }
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log('Error: ', err);
})