const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});

const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Second data');
    }, 1000);
});

doSomenthingPromise.then(data => console.log(data));

doSomethingPromise()
    .then(data => {
        console.log(data);
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops'), error);