let actividad;
let tipo;
let participantes;
let llamarApi = async()=> {
    let peticion = await fetch("https://www.boredapi.com/api/activity", {
        method: "GET"});

    if(peticion.status === 200){
        let info =  await peticion.json()
        console.log(info.activity);
        actividad = info.activity;
        tipo = info.type;
        participantes = info.participants;
        console.log(actividad)
        console.log(tipo)
        console.log(participantes)

        let act = $("#act");
        act.html("Activity:  " + actividad); 
        let tip = $("#tip");
        tip.html("Type:  " + tipo); 
        let part = $("#part");
        part.html("Number of participants:  " + participantes);        
    }
};

$("button").on("click", (event)=> {
    llamarApi();
});

