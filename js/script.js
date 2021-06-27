// Jam
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')
setInterval(() => {
        let day = new Date ();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * 6;
        let ss = day.getSeconds() * 6;

        hr.style.transform = `rotate(${(hh)+(mm/12)}deg)`
        mn.style.transform = `rotate(${mm}deg)`
        sc.style.transform = `rotate(${ss}deg)`
});

// calender
dycalendar.draw({
    target:'#dycalen',
    type : "month",
    monthformat : "full",
    dayformat : "full",
    highlighttoday : true,
    highlighttargetdate : true ,
    prevnextbutton : "show" 
    
})

// mode
const btn = document.querySelector('.wrapping-btn');
const btnIcon = document.querySelector('#icon-btn');

const app = document.querySelector('body')
btn.addEventListener('click', function(){
    btnIcon.classList.toggle('light');
    btnIcon.classList.toggle('dark');
    app.classList.toggle('light');
    app.classList.toggle('dark');
    // btnIcon.classList.contains('light') ? btnIcon.classList.remove('light') & btnIcon.classList.add('dark') :btnIcon.classList.remove('dark') & btnIcon.classList.add('light');
    // app.classList.contains('light') ? app.classList.remove('light') & app.classList.add('dark') :app.classList.remove('dark') & app.classList.add('light');
    
})

// battery
let bar = document.querySelector('.percen');
navigator.getBattery().then(function(e){
    bar.style.width = e.level * 100 + '%';
    setInterval(()=>{
    })
    setInterval(()=>{
        !e.charging ? bar.innerHTML = `<span class="persentasi">${e.level * 100 + '%'}</span>`: bar.innerHTML = `<span class="persentasi charg"></span>`;
    })
})

// animasi text
let TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};
    
TxtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
    
    let that = this;
    let delta = 100 - Math.random() * 100;
    if (this.isDeleting) {
        delta /= 4;
    }
    
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 1000 / 60;
    }
    
    setTimeout(() => {
            that.tick();
        }, delta);
};
    
document.addEventListener('DOMContentLoaded', () => {
    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].dataset.type;
        let period = elements[i].dataset.period;
        
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
});