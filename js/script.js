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