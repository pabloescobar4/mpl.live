// Dropdown Start

var dropdown = document.querySelector(".dropdown");
var drop_bar = document.querySelector('.drop-con');
var arrow_img = document.querySelector('.img');

var footer = document.querySelector(".footer");




dropdown.addEventListener('click', () => {
    drop_bar.classList.toggle('hidden');
    arrow_img.classList.toggle('img-add');
    arrow_img.classList.toggle('img-rem');
    footer.classList.toggle("hidden");

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

})





var s = 0;
let d1 = document.getElementById("faq-div1");

function d01() {
    if (s == 0) {
        s = 1;
        d1.innerHTML = null;
        let h2 = document.createElement("h2");
        let q = "Weekly sports Arena is a platform for the players to make a name for themselves in the Esports Community. The idea of hosting a weekly tournament is to cultivate an esports culture and build the existing gaming community for all our MPL games.";
        let p = document.createElement("p");
        let hh = "What Is MPL - Weekly Esports Arena?";
        h2.append(hh);
        let br = document.createElement("br");
        h2.style.padding = "1% 0 0 2%"
        p.style.color = "gray";
        p.style.margin = "-3% 2% 2% 2%";
        p.append(q);
        d1.style.height = "150px";
        d1.append(h2, br, p);
    }
    else {
        s = 0;
        d1.style.height = "80px";
        d1.innerHTML = null;
        let h2 = document.createElement("h2");
        let hh = "What Is MPL - Weekly Esports Arena?";
        h2.style.padding = "1% 0 0 2%"
        h2.append(hh);
        d1.append(h2);
    }

}




var a = 0;
let d2 = document.getElementById("faq-div2");

function d02() {
    if (a == 0) {
        a = 1;
        d2.innerHTML = null;
        let h2 = document.createElement("h2");
        let q = "MPL Esports gives the players a platform to make a name for themselves in the gaming community. Players can participate in the Esports tournaments and can earn money by winning games.";
        let p = document.createElement("p");
        let hh = "What are the benefits of Esports?";
        h2.append(hh);
        let br = document.createElement("br");
        h2.style.padding = "1% 0 0 2%"
        p.style.color = "gray";
        p.style.margin = "-3% 2% 2% 2%";
        p.append(q);
        d2.style.height = "150px";
        d2.append(h2, br, p);
    }
    else {
        a = 0;
        d2.style.height = "80px";
        d2.innerHTML = null;
        let h2 = document.createElement("h2");
        let hh = "What are the benefits of Esports?";
        h2.style.padding = "1% 0 0 2%"
        h2.append(hh);
        d2.append(h2);
    }

}




var b = 0;
let d3 = document.getElementById("faq-div3");

function d03() {
    if (b == 0) {
        b = 1;
        d3.innerHTML = null;
        let h2 = document.createElement("h2");
        let q = "All Esports tournaments are open for participation to individuals above the age of 18 years.";
        let p = document.createElement("p");
        let hh = "What is the league age range?";
        h2.append(hh);
        let br = document.createElement("br");
        h2.style.padding = "1% 0 0 2%"
        p.style.color = "gray";
        p.style.margin = "-3% 2% 2% 2%";
        p.append(q);
        d3.style.height = "100px";
        d3.append(h2, br, p);
    }
    else {
        b = 0;
        d3.style.height = "80px";
        d3.innerHTML = null;
        let h2 = document.createElement("h2");
        let hh = "What is the league age range?";
        h2.style.padding = "1% 0 0 2%"
        h2.append(hh);
        d3.append(h2);
    }

}



var c = 0;
let d4 = document.getElementById("faq-div4");

function d04() {
    if (c == 0) {
        c = 1;
        d4.innerHTML = null;
        let h2 = document.createElement("h2");
        let q = "All Esports tournaments are free as of now. Participants do not have to pay any amount for the registrations. Also there are no hidden/additional fees.";
        let p = document.createElement("p");
        let hh = "Are there additional fees?";
        h2.append(hh);
        let br = document.createElement("br");
        h2.style.padding = "1% 0 0 2%"
        p.style.color = "gray";
        p.style.margin = "-3% 2% 2% 2%";
        p.append(q);
        d4.style.height = "130px";
        d4.append(h2, br, p);
    }
    else {
        c = 0;
        d4.style.height = "80px";
        d4.innerHTML = null;
        let h2 = document.createElement("h2");
        let hh = "Are there additional fees?";
        h2.style.padding = "1% 0 0 2%"
        h2.append(hh);
        d4.append(h2);
    }

}



var d = 0;
let d5 = document.getElementById("faq-div5");

function d05() {
    if (d == 0) {
        d = 1;
        d5.innerHTML = null;
        let h2 = document.createElement("h2");
        let q = "In an Esports tournament, you will have to play a game as per the schedule. The schedule of your game will be communicated to you by SMSs or notifications.";
        let p = document.createElement("p");
        let hh = "Do I have to attend every game?";
        h2.append(hh);
        let br = document.createElement("br");
        h2.style.padding = "1% 0 0 2%"
        p.style.color = "gray";
        p.style.margin = "-3% 2% 2% 2%";
        p.append(q);
        d5.style.height = "130px";
        d5.append(h2, br, p);
    }
    else {
        d = 0;
        d5.style.height = "80px";
        d5.innerHTML = null;
        let h2 = document.createElement("h2");
        let hh = "Do I have to attend every game?";
        h2.style.padding = "1% 0 0 2%"
        h2.append(hh);
        d5.append(h2);
    }

}


var e = 0;
let d6 = document.getElementById("faq-div6");

function d06() {
    if (e == 0) {
        e = 1;
        d6.innerHTML = null;
        let h2 = document.createElement("h2");
        let q = "Yes, major rounds of all Esports tournaments are live-streamed on Youtube & Facebook. You can check the live stream schedule of an Esports tournament in the 'Live Streams' section of the website.";
        let p = document.createElement("p");
        let hh = "Where can I watch the Esports game live?";
        h2.append(hh);
        let br = document.createElement("br");
        h2.style.padding = "1% 0 0 2%"
        p.style.color = "gray";
        p.style.margin = "-3% 2% 2% 2%";
        p.append(q);
        d6.style.height = "150px";
        d6.append(h2, br, p);
    }
    else {
        e = 0;
        d6.style.height = "80px";
        d6.innerHTML = null;
        let h2 = document.createElement("h2");
        let hh = "Where can I watch the Esports game live?";
        h2.style.padding = "1% 0 0 2%"
        h2.append(hh);
        d6.append(h2);
    }

}

