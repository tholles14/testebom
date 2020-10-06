/*function filtro() {
    var check = document.getElementsByName("florais"); 
    var allflorais = document.getElementsByClassName("cfloral");
    
    for (var i=0;i<check.length;i++){ 
        if (check[i].checked == true){ 
            // CheckBox Marcado... Faça alguma coisa...
            
            
            document.querySelectorAll(".cfloral")[1].style.display = 'block';
            document.querySelectorAll(".c1floral")[1].style.display = 'block';
            document.querySelectorAll(".c2floral")[1].style.display = 'block';
            document.querySelectorAll(".c3floral")[1].style.display = 'block';
            
            
            
        } else {
           // CheckBox Não Marcado... Faça alguma outra coisa...
           
            //document.getElementsByClassName("cfloral")[0].remove();
            document.querySelectorAll(".cfloral")[1].style.display = 'none';
            document.querySelectorAll(".c1floral")[1].style.display = 'none';
            document.querySelectorAll(".c2floral")[1].style.display = 'none';
            document.querySelectorAll(".c3floral")[1].style.display = 'none';
            
           
        }
    }
}*/

function florais(){
    
    var c = 0
    do {
        document.getElementsByClassName("ccuras")[0].remove();
        c++
    } while (c <= 100)
    
}
function curas(){
    
    var p = 0
    do {
        document.getElementsByClassName("cfloral")[0].remove();
        p++
    } while (p <= 100)
    
}