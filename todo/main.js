const colors=[
    'bg-light',
    'bg-secondary',
    'bg-success',
    'bg-danger',
    'bg-warning'
]
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
        let val='';
        let array = [val,0];
        localStorage.setItem(key,JSON.stringify(array));
        location.reload();
    })
    for (let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let array = JSON.parse(localStorage.getItem(key));
        $("#myList").append(`<div class="card ${colors[array[1]]}">
        <div class="card-body" contenteditable>${array[0]}</div>
        <button class="body__button del">&#128939</button>
        <footer class="card-footer"><small>${key}</small></footer></div>`);
    }
    $(".del").on("click",function(){      
        let key = $(this).siblings().children().text();
        localStorage.removeItem(key);
        $(this).parent().css("display","none");
    }) 
    $(".card-body").on("blur",function(){
        let key = $(this).siblings().eq(1).text();
        let array = JSON.parse(localStorage.getItem(key));
        array[0]=$(this).text();            
        localStorage.setItem(key,JSON.stringify(array));
    })
    $(".card-footer").on("click", function(){        
        let key = $(this).text();
        let array = JSON.parse(localStorage.getItem(key));
        $(this).parent().removeClass(colors[array[1]]);
        array[1]=(array[1]+1)%5;
        $(this).parent().addClass(colors[array[1]]);
        localStorage.setItem(key,JSON.stringify(array));
        }
    )
})
