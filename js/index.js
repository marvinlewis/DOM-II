// Your code goes here



// mouse over

const navBlack = document.querySelector(".main-navigation");


navBlack.addEventListener("mouseover", overBus);

function overBus(e){
navBlack.style.backgroundColor = "black"
};


// key down Shift

const body = document.querySelector('body');

body.addEventListener('keydown', shift);

function shift (e) {
    if ( e.shiftKey) {
        const img = document.querySelector('img');

        img.style.display = 'none';
    } else {
        body.style.backgroundColor = 'blue'
    };
};

// wheel 

body.addEventListener('wheel', wheel);

function wheel (e) {
//let h4 = document.querySelectorAll('h4');

body.style.backgroundColor = `rgb(${e.screenX},${e.screenY},0)`
;

//console.log(screenX, screenY);

}

// scroll 

const container = document.getElementsByClassName('text-content');


body.addEventListener('scroll', scroll);

//console.log(container,body)

function scroll (e) {

 container.style.backgroundColor = 'green'


}


// drag/drop

const para = document.querySelector('p');



para.addEventListener("dragstart", dragStart);

function dragStart (e) {
    e.dataTransfer.setData("Text", e.target.id);

    para.textContent = 'Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.';

    e.currentTarget.style.opacity = '0.4';
}


    para.addEventListener('drag', onDrag);

    function onDrag (e) {

        para.style.border = '3px dotted black';
        para.style.color ='black';
        para.style.backgroundColor = 'white';

        
        
    }

    const pic = document.getElementsByTagName('img');


    pic[0].addEventListener('dragenter', dragEnter);

    function dragEnter (e) {

        console.log (pic[0]);
        pic[0].style.greyscale = '100%'
        body.style.backgroundColor = 'black'
         
    }

    pic[0].addEventListener('dragover', dragOver);

    function dragOver (e) {
        e.preventDefault()
    }
    
    pic[0].addEventListener('dragleave', dragLeave);

    function dragLeave (e) {
        pic[0].style.width = '50%';
        body.style.backgroundColor = 'white'
    };


    pic[0].addEventListener('drop', drop);

    const intro = document.getElementsByClassName('intro');

    function drop (e) {
        e.preventDefault();
        para.style.backgroundColor = 'white';
        para.style.border = 'none';
        para.style.opacity = '1';
        pic[0].style.width = '100%';
        console.log(intro[0]);
        body.style.backgroundColor = 'red';
       //let x = e.dataTransfer.getData("Text");
        //intro[1].appendChild(para);
        

    };

    //console.log(body)
// load 

body.addEventListener('load', load);


function load (e) {
   
body.style.border = '3px solid yellow'
   

   
}

// focus

const links = document.getElementsByClassName ('nav');

links[0].addEventListener('focus', focus);

function focus (e) {
    console.log(para);
    links.style.backgroundColor = 'yellow';
}


// resize

window.addEventListener('resize', resize);

function resize (e) {
    body.style.display = 'flex';
    body.style.flexWrap = 'nowrap'
};


// select 

links[0].addEventListener('select', select);

console.log(links);

function select (e) {
    alert('selected')
};


// dblClick

body.addEventListener('dblclick', dblClick);

function dblClick (e) {
    alert('You double clicked Marvin!')
}








