var app = {
    init: () => {
        document.onreadystatechange(() => {
            console.log("ready !! ");
        })
        app.call();
    },

    call: () => {
        fetch('http://localhost:3000',{method: 'GET'})
        .then(rep => {
            console.log(rep);
        })
        .catch(err => {
            console.error(err);
        })
    }
}

app.init();