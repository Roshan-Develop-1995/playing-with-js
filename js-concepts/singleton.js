const Singleton = (
    function(){
        let instance;
        function createInstance(){
            return {message: 'I am singleton instance'};
        }

        return {
            getInstance: function(){
                if(!instance){
                    instance = createInstance();
                }
                return instance;
            }
        }
    })();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1.message)
console.log(instance1 === instance2);