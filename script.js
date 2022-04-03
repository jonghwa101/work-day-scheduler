let currentDate = moment().format('ddd') + " " + moment().format('Do MMM YY');
let hour = moment().hour();

let nine = $('#9');
let ten = $('#10');
let eleven = $('#11');
let twelve = $('#12');
let one = $('#13');
let two = $('#14');
let three = $('#15');
let four = $('#16');
let five = $('#17');

let userInput;
let hours;

let date = setInterval(function() {
    let momentNow = moment();
    $('#currentDay').html(momentNow.format('dddd, MMMM Do'));
})

function color() {
    $('.form-control').each(function() {
        let time = parseInt($(this).attr('id'))
        hour = parseInt(hour)
        if (hour > time) {
            $(this).addClass('past')
        }else if (hour === time) {
            $(this).addClass('present')
        }else {
            $(this).addClass('future')
        }
    })
}

function storage() {
    let store9 = JSON.parse(localStorage.getItem('9:00AM'));
    let store10 = JSON.parse(localStorage.getItem('10:00AM'));
    let store11 = JSON.parse(localStorage.getItem('11:00AM'));
    let store12 = JSON.parse(localStorage.getItem('12:00PM'));
    let store1 = JSON.parse(localStorage.getItem('1:00PM'));
    let store2 = JSON.parse(localStorage.getItem('2:00PM'));
    let store3 = JSON.parse(localStorage.getItem('3:00PM'));
    let store4 = JSON.parse(localStorage.getItem('4:00PM'));
    let store5 = JSON.parse(localStorage.getItem('5:00PM'));

    nine.val(store9);
    ten.val(store10);
    eleven.val(store11);
    twelve.val(store12);
    one.val(store1);
    two.val(store2);
    three.val(store3);
    four.val(store4);
    five.val(store5);

}

$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        userInput = $(this).siblings('.form-control').val().trim();
        hours = $(this).siblings('.input-group-prepend').text().trim();
        localStorage.setItem(hours, JSON.stringify(userInput));
    })
    
    storage();
    color();
})