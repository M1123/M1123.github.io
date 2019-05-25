$(()=>{
    $("#add").on("click", ()=>{
        let key= new Date();
        let val=prompt('Заметка');
        localStorage.setItem(key,val);
        location.reload();
    })
    for (let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let elem=$('<div class="card"></div>');
        $(elem).append('<div class="card-body">'+localStorage.getItem(key)+'</div>');
        $(elem).append('<div class="card-footer bg-transparent"><small class="text-muted">'+key+'</small></div>');
        $(elem).append('<button class="del"></button>');
        $("#myList").append(elem);
    }
    $(".del").on("click",function(){      
        let key = $(this).siblings().children().text();
        localStorage.removeItem(key);
        location.reload();
    })
    
    $(".card-body").on(
        "click", function(){
            let key = $(this).sibling().eq(1).text();
            console.log(key);
            let val=prompt('Заметка');
            localStorage.setItem(key,val);
            location.reload();
        }
    )
})
