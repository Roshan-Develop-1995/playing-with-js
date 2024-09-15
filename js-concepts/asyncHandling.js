//callback
function fetchDataCallback(callback){
    setTimeout(() => {
        callback('Data fetched via callback');
    }, 1000);
};

fetchDataCallback((result) => console.log(result));

//Promise
const fetchDataPromise = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('Data fetched via Promise');
    }, 1000);
});

fetchDataPromise.then((result) => console.log(result));


//async/await
async function fetchDataAsync(){
    const data = await new Promise((resolve) => {
        setTimeout(()=>{
            resolve('Data fetched via async/await');
        }, 1000);
    });
    console.log(data);
};

fetchDataAsync();