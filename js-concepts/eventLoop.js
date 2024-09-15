console.log('Start');

setTimeout(() => {
    console.log('Timer: 1');
}, 0);

Promise.resolve().then(() =>{
    console.log('Promise: 1');
});

console.log('End');