//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {

  var questionsJSON = $.getJSON(window.location + "/questions");
  questionsJSON.success(function (jsonResponse) {
    questionForm(jsonResponse);
  });

  var buttonArr = ["btn btn-default", "btn btn-success", "btn btn-danger", "btn btn-default"];

  var questionForm = function (questionArr) {
    var count = 0;
    $(".question").append('<ul>' + questionArr[count].description + '</ul>');
    for (i = 0; i < questionArr[0].possible_answers.length; i++) {
      $(".answers").append('<button class="' + buttonArr[i] + '">' + questionArr[0].possible_answers[i].description + '</button>');
    } if (count != questionArr.length) {
      $(".nav").append('<button class="btn btn-primary">Next</button>');
    }
    else {
      $(".nav").hide();
    }
  };

  $(document).on("click", ".btn.btn-primary", function () {
    
  })





});

