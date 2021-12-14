function toggle_visibility() {
       var e = document.getElementById('feedback-main');
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }
$(document).ready(function() {
$('#feedback-button-blue').click(function() {
    $('#feedback-form1').attr('action',
            'mailto:joshankeny10@gmail.com?subject=LifeHackle Feedback' +
            $('#feedback-comment').val() + '&body=' + $('#feedback-comment').val());
    $('#feedback-form1').submit();
    });
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter=1;
const size = carouselImage[0].clientWidth;

//carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//nextBtn.addEventListener('click',()=>{
	if(counter >= carouselImages.length -1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

//prevBtn.addEventListener('click',()=>{
	if(counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

//carouselSlide.addEventListener('transitionend', ()=>{
	if(carouselImages[counter].id === 'lastClone'){
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
	}
	if(carouselImages[counter].id === 'firstClone'){
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
	}
}])

$('#carouselExample').on('slide.bs.carousel', function (e) {

    /*

    CC 2.0 License Iatek LLC 2018
    Attribution required
    
    */

    var $e = $(e.relatedTarget);
    
    var idx = $e.index();
    console.log("IDX :  " + idx);
    
    var itemsPerSlide = 8;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});