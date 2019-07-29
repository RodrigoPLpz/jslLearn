var pubSub = (function(){
    var suscriptores = {};
    
    function EventObject (){};
    //const EventObject = () =>{};

    const subscribe = (event,callback) =>{
        //escucha eventos
        if(!suscriptores[event]){
            var suscriptorArray = [callback];
            suscriptores[event] = suscriptorArray;
        }else{
            suscriptores[event].push(callback);
        }
    }
    const publish = (event,data) =>{
        var eventObject = new EventObject();
        eventObject.type = event;
        if(data){
            eventObject.data = data;
        }
        if(suscriptores[event]){
            suscriptores[event].forEach(callback => {
                callback(eventObject);
            });
        }
    }
    return{
        sub: subscribe,   
        pub: publish            
    }
})();

//suscribir
pubSub.sub('miEvento',function (e){
    console.log("miEvento ha sido lanzado y contiene: ", e.data.nombre,e.data.cuenta);
});
// publicar
// pubSub.pub('miEvento',{
//     cuenta : "3040360002",
//     nombre : "Rodrigo"
// });

