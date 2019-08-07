const colors=[
    'bg-light',
    'bg-secondary',
    'bg-success',
    'bg-danger',
    'bg-warning'
]
let i=0;
$(()=>{
    $("#add").on("click", ()=>{
        let dat= new Date(); 
            var D = '' + dat.getDay();
            D = D.length<2 ? '0' + D:D;
            var M = '' + dat.getMonth();
            M = M.length<2 ? '0' + M:M;
            var Y = '' + dat.getFullYear();
            var H = '' + dat.getHours();
            H = H.length<2 ? '0' + H:H;
            var I = '' + dat.getMinutes();
            I = I.length<2 ? '0' + I:I;
            var S = '' + dat.getSeconds();
            S = S.length<2 ? '0' + S:S;
            var toDay = Y + '.' + M + '.' + D;
            var clock = H + ':' + I + ':' + S;
        let key= toDay+" "+clock;
        let val=prompt('Заметка');
        let array = [val,0];
        localStorage.setItem(key,JSON.stringify(array));
        location.reload();
    })
    for (let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let array = JSON.parse(localStorage.getItem(key));
        let bg=array[1]
        console.log(colors[bg]);
        let elem=$('<div class="card '+colors[bg]+'"></div>');
        $(elem).append('<div class="card-body">'+array[0]+'</div>');
        $(elem).append('<div class="card-footer"><small class="text-muted">'+key+'</small></div>');
        $(elem).append('<button class="body__button del">&#128939</button>');
        $(elem).append('<button class="body__button edit">&#x270e</button>');

        $("#myList").append(elem);
    }
    $(".del").on("click",function(){      
        let key = $(this).siblings().children().text();
        localStorage.removeItem(key);
        location.reload();
    }) 
    $(".edit").on(
        "click", function(){
            let key = $(this).siblings().eq(1).text();
            let array = JSON.parse(localStorage.getItem(key));
            array[0]=prompt('Заметка',array[0]);
            console.log(array[1]);
            
            localStorage.setItem(key,JSON.stringify(array));
            location.reload();
        }
    )
    $(".card-body").on(
        "click", function(){
            let key = $(this).siblings().eq(0).text();
            console.log(key);
            
            let array = JSON.parse(localStorage.getItem(key));
            let bg= array[1];
            bg++;
            array[1]=bg%5;
            console.log(bg);
            
            localStorage.setItem(key,JSON.stringify(array));
            location.reload();
        }
    )
})
