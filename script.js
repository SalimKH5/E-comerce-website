const item_display=document.getElementById('item-display')

const minus_display=document.getElementById('minus-display')
const plus_display=document.getElementById('plus-display')

const image_display=document.getElementById('image-product')
const image_main_dis=document.getElementById('image-main-dis')

const menu_item=document.querySelector('.menu-itemColapse')
const cart_content=document.getElementById('cart-content')

const content_toggle=document.querySelector('.content-toggle')


const nbr_items=document.getElementById('nbr_item')

const result_cart=document.getElementById('result-cart')

const notification=document.querySelector('.notification')

const cart_empty=document.querySelector('.cart-empty')

const display_product_id=document.getElementById('display_product_id')

var image_thumbnail=document.querySelectorAll('.image-thumbnail')


var image_thumbnail_items=document.querySelectorAll('.image-thumbnail_items')


let itemsnbr;
let obj;




minus_display.addEventListener('click',()=>{

    itemsnbr=parseInt(item_display.textContent)
    if (itemsnbr>0){
        itemsnbr=itemsnbr-1
        
        obj={
            "nbr_item":itemsnbr,
            "image":image_display.src,
        }
    
    
    }
    item_display.innerHTML=itemsnbr
   
})



plus_display.addEventListener('click',()=>{

    itemsnbr=parseInt(item_display.textContent)
        itemsnbr=itemsnbr+1
    
         item_display.innerHTML=itemsnbr
        obj={
            "nbr_item":itemsnbr,
            "image":image_display.src,
        }
})




function menu_display(){
    menu_item.classList.add('menu-display')
}


function menu_close(){
   
    menu_item.classList.remove('menu-display')
}







function Cart_display(){
    if(cart_content.classList.contains('cart-display')){
        
                // Clicked outside the component, close it here
                cart_content.classList.remove('cart-display')
                cart_content.style.display="none" 
          
    }
    else{
        console.log("hello wolrd")
        cart_content.classList.add('cart-display')
        cart_content.style.display="inline" 
       
        
    }
}






function Add_to_cart(){
    let nbr_item=parseInt(item_display.textContent)
    if(nbr_item>0){
        content_toggle.style.display="inline"
        cart_empty.classList.add('cart_display_empty')
        nbr_items.innerHTML=parseInt(item_display.textContent)
        notification.innerHTML=nbr_item
        notification.style.display="inline"
        result_cart.innerHTML=125*parseInt(item_display.textContent)+"$"

    }else{
        content_toggle.style.display="none"
        cart_empty.classList.remove('cart_display_empty')
    }
}

function delete_cart(){
    content_toggle.style.display="none"
    notification.style.display="none"
    item_display.innerHTML=0
    cart_empty.classList.remove('cart_display_empty')
}

let id_image=1;
function scroll_right(){
    if(id_image<4){
        id_image++;
      
    }else{
        id_image=1
    }
    image_display.src="images/image-product-"+id_image+".jpg"
}

function scroll_right2(){
    if(id_image<4){
        id_image++;
      
    }else{
        id_image=1
    }
    image_main_dis.src="images/image-product-"+id_image+".jpg"
}


function scroll_left(){
    if(id_image>1){
        id_image--;      
    }else{
        id_image=4
    }
    image_display.src="images/image-product-"+id_image+".jpg"
}

function scroll_left2(){
    if(id_image>1){
        id_image--;      
    }else{
        id_image=4
    }
    image_main_dis.src="images/image-product-"+id_image+".jpg"
}

function dipaly_product_image(){
    display_product_id.classList.remove('displayP')
}

function close_product_image(){
    display_product_id.classList.add('displayP')
}


image_thumbnail.forEach(function(imageThumbnail) {
    imageThumbnail.addEventListener('click', function(event) {
        
    var filename = event.target.src;
    var modifiedFilename = filename.replace("-thumbnail", "");
    
      image_main_dis.src =modifiedFilename;
    });
});

image_thumbnail_items.forEach(function(imageThumbnail) {
    imageThumbnail.addEventListener('click', function(event) {
        
    var filename = event.target.src;
    var modifiedFilename = filename.replace("-thumbnail", "");
    
    image_display.src =modifiedFilename;
    });
});