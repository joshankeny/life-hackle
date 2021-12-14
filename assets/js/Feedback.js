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