$( document ).ready(readyNow);

let clickCounter = 0;

function readyNow() {
    console.log('jq');
    $('#button').on('click', createDiv);
    $('')
} // end readyNow

function createDiv(){
    //console.log('new div');
    let counterP = $('.counter');
    // $('.counterOutput').empty();
    $('').empty();

$('.canvas').append(`<div class="red">
<p class="counter">${clickCounter++}</p>
<button id="swap">Swap</button>
<button id="delete">Delete</button>
</div>`);
counterP++;
    $("#swap").on('click', function () {
        $(this).parent().css('background-color', 'yellow');
    });
    $("#delete").on('click', function () {
        $(this).parent().remove();
    });
    //clickCounter++;
} // end createDiv