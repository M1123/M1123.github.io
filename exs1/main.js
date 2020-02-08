document.addEventListener('DOMContentLoaded', function() { 
    var tabs = document.getElementsByClassName('list__item');
    var contentItems = document.getElementsByClassName('content__item');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function(e){            
            for (var j = 0; j < tabs.length; j++) {
                contentItems[j].className ='content__item';
                tabs[j].className = 'list__item';
            }
            e.target.className='list__item list__item--active';
            contentItems[e.target.id].className = 'content__item content__item--active';
       }
    }}
);



// document.addEventListener('DOMContentLoaded', function() { 
//     let tabs = document.getElementsByClassName('list__item');
//     let contentItems = document.getElementsByClassName('content__item');

//     // for (let i = 0; i < tabs.length; i++) {
//         // tabs[i].addEventListener('click', function() {
//         // })
//         function swt(k){
//             for (let j = 0; j < tabs.length; j++) {
//                 if(k==j){contentItems[j].className ='content__item content__item--active'}else{contentItems[j].className =  'content__item'};
//                 if(k==j){tabs[j].className = 'list__item list__item--active'}else{tabs[j].className = 'list__item'};
//             }
//        }
//     // }}
// );
