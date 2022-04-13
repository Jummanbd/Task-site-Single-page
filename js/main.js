// slide bar

const slider = document.querySelector('.menu-bar');
const menuHeader = document.querySelector('.header');
const navTop = document.querySelector('.nav-bar');
const slideRight = document.querySelector('.slide-right');
const pages = document.querySelector('.pages');
const daysDiv = document.querySelector('.days');
const headerSlider = document.querySelector('.header')
slider.addEventListener('click', function() {
  menuHeader.classList.toggle('show');
  navTop.classList.toggle('show');
  slideRight.classList.toggle('show');
  pages.classList.toggle('show');
  daysDiv.classList.toggle('show');
 
});

// menu close

const closeBtn = document.querySelector('.fa-times');
closeBtn.addEventListener('click', function() {
  menuHeader.classList.remove('show')
})


// loading
var loadShow = document.querySelector('.loader');
window.addEventListener('load', ()=> {
    loadShow.style.display = 'none'
})


/// model
const modelShow = document.querySelectorAll('.fa-plus-circle');
const modelArea = document.querySelector('.model-wrapper');
const modelCloseBtn = document.querySelector('.model-close')


modelShow.forEach(btn => {
  btn.addEventListener('click', function() {
    modelArea.classList.add('model-show')
  })
})


modelCloseBtn.addEventListener('click', function() {
  modelArea.classList.remove('model-show')
});
// nof

const bellBtn = document.querySelector('.fa-bell');
const bellArea = document.querySelector('.bell-wrap');

bellBtn.addEventListener('click', function() {
    bellArea.classList.toggle('show');
});




// chart js

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Development', 'Meetings', 'Research', 'Music', ],
        datasets: [{
            label: '# of Votes',
            data: [45, 25, 15, 15,],
            backgroundColor: [
                'rgba(13, 75, 5, 0.993)',
                'rgba(199, 3, 3, 0.904)',
                'rgba(168, 50, 225, 0.9)',
                'rgba(145, 171, 26, 0.9)',
              
            ],
            borderColor: [
                'rgba(13, 75, 5,)',
                'rgba(199, 3, 3, 0.1)',
                'rgba(168, 50, 225, 1)',
                'rgba(145, 171, 26, 1)',

            ],
            borderWidth: 1
            
        }]
    },
    options: {
        responsive:true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// line 


const ctxs = document.getElementById('projectLine');
const myCharts = new Chart(ctxs, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun' ],
        datasets: [{
            label: 'Earnings in $',
            data: [345, 2025, 1100, 2005,1900, 600],
            backgroundColor: [
                'rgba(18, 0, 242, 0.69)',
              
            ],
            borderColor: [
                'rgba(250, 164, 0, 0.95)',
            ],
            borderWidth: 2,
            hoverBorderWidth:10,
            
        }]
    },
    options: {
        responsive:true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});