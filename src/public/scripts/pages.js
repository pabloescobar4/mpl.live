// Dropdown Start

var dropdown = document.querySelector(".dropdown");
var drop_bar = document.querySelector('.drop-con');
var arrow_img = document.querySelector('.img');

var footer = document.querySelector(".footer");
var body_sec = document.querySelector(".body-sec");



dropdown.addEventListener('click', () => {
    drop_bar.classList.toggle('hidden');
    arrow_img.classList.toggle('img-add');
    arrow_img.classList.toggle('img-rem');
    footer.classList.toggle("hidden");
    body_sec.classList.toggle("hidden");
});


// Mobile Navbar
var plus_btn = document.getElementById("mobile-btn");
var minus_con = document.getElementById("drop1");
plus_btn.addEventListener('click', () => {
    minus_con.classList.toggle('mov-hidden');
    plus_btn.classList.toggle('mobile-add-img');
    plus_btn.classList.toggle('mobile-rem-img');
});
var plus_btn2 = document.getElementById("mobile-btn2");
var minus_con2 = document.getElementById("drop2");
plus_btn2.addEventListener('click', () => {
    minus_con2.classList.toggle('mov-hidden');
    plus_btn2.classList.toggle('mobile-add-img');
    plus_btn2.classList.toggle('mobile-rem-img');

});

// Area 3

var plus_btn3 = document.getElementById("mobile-btn3");
var minus_con3 = document.getElementById("drop3");
plus_btn3.addEventListener('click', () => {
    minus_con3.classList.toggle('mov-hidden');
    plus_btn3.classList.toggle('mobile-add-img');
    plus_btn3.classList.toggle('mobile-rem-img');

});

// Mobile area 4

var plus_btn4 = document.getElementById("mobile-btn4");
var minus_con4 = document.getElementById("drop4");
plus_btn4.addEventListener('click', () => {
    minus_con4.classList.toggle('mov-hidden');
    plus_btn4.classList.toggle('mobile-add-img');
    plus_btn4.classList.toggle('mobile-rem-img');

});

// Mobile area 5

var plus_btn5 = document.getElementById("mobile-btn5");
var minus_con5 = document.getElementById("drop5");
plus_btn5.addEventListener('click', () => {
    minus_con5.classList.toggle('mov-hidden');
    plus_btn5.classList.toggle('mobile-add-img');
    plus_btn5.classList.toggle('mobile-rem-img');

});

// Mobile area 6

var plus_btn6 = document.getElementById("mobile-btn6");
var minus_con6 = document.getElementById("drop6");
plus_btn6.addEventListener('click', () => {
    minus_con6.classList.toggle('mov-hidden');
    plus_btn6.classList.toggle('mobile-add-img');
    plus_btn6.classList.toggle('mobile-rem-img');

});

// Hamberger Icon

var Hamberger = document.getElementById("hambr");
var Hamberger_img = document.getElementById("hambr-img");
var mobile_con = document.querySelector('.mobile-con');

Hamberger.addEventListener('click', () => {
    Hamberger.classList.toggle('hambr-add-icon');
    Hamberger.classList.toggle('hambr-rem-icon');
    mobile_con.classList.toggle('mobile-con-hidden');
    footer.classList.toggle("hidden");
    body_sec.classList.toggle("hidden");
});

// Faq and how to play section

var page_ques = document.getElementsByClassName('page-ques');
var page_ans = document.querySelector('.page-ans');
var faq_arrow = document.querySelector('.arrow-icon');
document.querySelectorAll('.page-ques').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.page-ans').classList.toggle('hidden');
        document.querySelector('.arrow-icon').classList.toggle('faq-down-arrow');
        document.querySelector('.arrow-icon').classList.toggle('faq-up-arrow');
    });
});


// for (var i = 0; i < page_ques.length; i++) {
//     page_ques[i].addEventListener('click', function() {
//         document.getElementsByClassName('page_ans').classList.toggle('hidden');
//     })
// }