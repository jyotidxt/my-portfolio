// let button = document.querySelector("#button");
// button.addEventListener('click', function() {
//     button.sstyle.backgroundColor = "skyblue";
// })


// $(document).ready(function(){
//     $('#icon').click(function(){
//         $('ul').toggleClass('show');
//     })
//     });


// function toggleHide() {
//     let icon = document.getElementById('#icon');
//     let nav = document.getElementById('#nav');
//     if (nav.style.display != 'none') {
//         nav.style.display = 'none';
//     }
//     else {
//         nav.style.display = 'block';
//     }
// }


//const time = new time();
//myName.display[0]=block;

function name(){
    const myName = document.querySelector("#myname");
    let obj = { 
name: myName.index[0],
second: myName.index[1],
third: myName.index[2],
fourth: myName.index[3],
fifth: myName.index[4]
    };
  
        setTimeout(function() {
//console.log(a);  
console.log(obj);
    }, 5000)
}
name();