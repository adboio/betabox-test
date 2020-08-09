var totalQuestions = 5;
var options = ['classic grilled cheese', 'bacon grilled cheese', 'grilled ham and cheese'];

$(document).ready(function() {

  $('#question_1').show();

  $('.options button').on('click', function(e) {
    var questionNumber = parseInt($(this).parent().attr('id').split('_')[1]);

    if (questionNumber < totalQuestions) {
      $('#question_' + questionNumber).hide();
      $('#question_' + (questionNumber + 1)).show();
    } else {
      $('#question_' + questionNumber).hide();

      var randomAnswer = Math.floor(Math.random() * options.length);

      $('#answer').text(options[randomAnswer])
      $('#finalAnswer').show();
    }

  });

});
