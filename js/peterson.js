var turn,lock=0;

var flag=[0,0];
function critical_state(id){
    var x=document.getElementById(id);
    x.remove();
    var y=document.getElementById('critical');
    if(lock==0){
        y.innerHTML='<button class=" btn btn-dark p-3 btn-lg fourth mr-4" id = '+id+' onclick="exit_state(this.id)">P'+id+'</button>';
        turn=1-id;
        flag[id-1]=1;
        lock=1;
        document.getElementById('turn_state').innerHTML='<i class="fas fa-sync-alt mr-2"></i>Turn: '+(turn+2);
        if(id==1){
            document.getElementById('flag1').innerHTML='<i class="fas fa-flag mr-2"></i>Flag1: '+(flag[0]);
        }
        else{
            document.getElementById('flag2').innerHTML='<i class="fas fa-flag mr-2"></i>Flag2: '+(flag[1]);
        }

    }
    else{
        alert("Deadlock occures");
        reset();
        lock=0;
    }
    console.log(y);

}

function exit_state(id){
    var x=document.getElementById(id);
    x.remove();
    lock=0;
    flag[id-1]=0;

    if(id==1){
        document.getElementById('flag1').innerHTML='<i class="fas fa-flag mr-2"></i>Flag1: '+(flag[0]);
    }
    else{
        document.getElementById('flag2').innerHTML='<i class="fas fa-flag mr-2"></i>Flag2: '+(flag[1]);
    }
    var y=document.getElementById('exit');
    y.innerHTML+='<button class=" btn btn-dark p-3 btn-lg fourth mr-4" id = '+id+' onclick="entry_state(this.id)">P'+id+'</button>';
    

}


function entry_state(id){
    var x=document.getElementById(id);
    x.remove();
    var y=document.getElementById('entry');
    y.innerHTML+='<button class=" btn btn-dark p-3 btn-lg fourth mr-4" id = '+id+' onclick="critical_state(this.id)">P'+id+'</button>';

}

function reset(){
    var x=document.getElementById('entry');
    var y=document.getElementById('critical');
    lock=0;
    flag=[0,0];
    x.innerHTML="";
    y.innerHTML="";
    
    
    x.innerHTML='<button class=" btn btn-dark p-3 btn-lg fourth mr-4" id = "1" onclick="critical_state(this.id)">P1</button>';
    x.innerHTML+='<button class="  btn btn-dark p-3 btn-lg fourth mr-4" id = "2" onclick="critical_state(this.id)">P2</button>';


}