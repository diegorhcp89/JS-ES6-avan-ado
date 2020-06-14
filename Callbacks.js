function doSomenthing(callback) {
    setTimeout(function() {
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        callback('second data');
    }, 1000);
}

function doAll() {
    try {
        doSomenthing(function(data) {
            var processedData = data.split('');

        doOtherThing(function(data2) {
            var processedData2 = data2.split('');

            setTimeout(function() {
                console.log(processedData, processedData2);
            }, 1000);
        });
        });
    }catch(err) {

    }
}

doAll();