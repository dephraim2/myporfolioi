// $(document).ready(function() {
//    $(window).scroll(function() {
//        if(this.scrollY > 20){
//            alert('Hi');
//             // $('.navbar').prompt('wasup');
//        }else {
//             alert('no');
//        }
//     })
// });

var navbar = document.querySelector('.navbar');

if (window.scrollY > 20) {
    alert('working');
} else {
    console.log('not working lfdf');
}

function mobileToggle(togglerClass) {
    if(togglerClass.style.display = 'none'){
        // alert('yes i am');
        togglerClass.style.display == 'flex';
    } else {                
        togglerClass.style.display == 'none';
    }
}
