var pubSub = (function(){
    var suscriptores = {};
    
    const subscribe = (event,callback) =>{
        //escuah eventos
        if(!suscriptores[event]){
            var suscriptorArray = [callback];
            suscriptores[event] = suscriptorArray;
        }else{
            suscriptores[event].push(callback);
        }
    }
    const publish = (event) =>{
        //publica
        if(suscriptores[event]){
            suscriptores[event].forEach(callback => {
                callback();
            });
        }
    }
    return{
        sub: subscribe,   
        pub: publish            
    }
})();

//Suscribe
pubSub.sub('miEvento',function(e){
    console.log('miEvento ha sido lanzado!');
});

//Publica
//pubSub.pub('miEvento');
