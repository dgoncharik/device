
var overlay = document.querySelector('.overlay');
var btnOpenFeedback = document.querySelector('.contacts__btn');
var feedback = document.querySelector('.popup-feedback');
var btnCloseFeedback = feedback.querySelector('.btn-close-popup_feedback');
var feedbackSubmit = feedback.querySelector('.input-form__btn');
var feedbackInputName = feedback.querySelector('#user-name');
var feedbackInputEmail = feedback.querySelector('#user-email');
var feedbackTextarea = feedback.querySelector('#user-text');

var btnOpenMap = document.querySelector('#map');
var popupMap = document.querySelector('.popup-map');
var btnCloseMap = popupMap.querySelector('.btn-close-popup_map')

var googleMap = popupMap.querySelector('.google-map');

btnOpenFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (feedback.classList.contains('popup_error')) {
    feedback.classList.remove('popup_error');
  }
  feedback.classList.add('popup_show');
  if (!feedbackInputName.value) {
    feedbackInputName.focus();
  } else if (!feedbackInputEmail.value) {
      feedbackInputEmail.focus();
    } else if (!feedbackTextarea.value) {
        feedbackTextarea.focus();
      }
});

btnCloseFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedback.classList.remove('popup_show');
});

window.addEventListener('keydown', function(evt) {
  if (feedback.classList.contains('popup_show') && (evt.keyCode === 27)) {
    evt.preventDefault();
    feedback.classList.remove('popup_show');
  }
})

feedback.addEventListener('submit', function(evt) {
  if (!feedbackInputName.value || !feedbackInputEmail.value || !feedbackTextarea.value) {
    evt.preventDefault();
    if (feedback.classList.contains('popup_error')) {
      feedback.classList.remove('popup_error');
      feedback.offsetWidth = feedback.offsetWidth; 
    }
    if (!feedbackInputName.value) {
      feedbackInputName.classList.add('input-error');
    } 
    if (!feedbackInputEmail.value) {
        feedbackInputEmail.classList.add('input-error');
    } 
    if (!feedbackTextarea.value) {
        feedbackTextarea.classList.add('input-error');
    }
    feedback.classList.add('popup_error');
  }
})

feedbackInputName.addEventListener('input', function(evt) {
  feedbackInputName.classList.remove('input-error');
});

feedbackInputEmail.addEventListener('input', function(evt) {
  feedbackInputEmail.classList.remove('input-error');
});

feedbackTextarea.addEventListener('input', function(evt) {
  feedbackTextarea.classList.remove('input-error');
})

btnOpenMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.add('popup_show');
});

btnCloseMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.remove('popup_show');
});

window.addEventListener('keydown', function(evt) {
  console.log('asdf')
  if (popupMap.classList.contains('popup_show') && (evt.keyCode === 27)) {
    evt.preventDefault();
    popupMap.classList.remove('popup_show');
  }
})

overlay.addEventListener('click', function(evt) {
  if (feedback.classList.contains('popup_show')) {
    feedback.classList.remove('popup_show');
  }
  if (popupMap.classList.contains('popup_show')) {
    popupMap.classList.remove('popup_show');
  }
})

// googleMap.addEventListener('keydown', function(evt) {
//   if (popupMap.classList.contains('popup_show') && (evt.keyCode === 27)) {
//     evt.preventDefault();
//     popupMap.classList.remove('popup_show');
//   }
// })
