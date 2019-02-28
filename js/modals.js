
var feedback;
var feedbackWindow;
var feedbackSubmit;
var feedbackInputName;
var feedbackInputEmail;
var feedbackTextarea;

// function Popup (root, showClass, closeToEcs=true, btnOpen, btnClose) {
//   this.root = root;
//   this._showClass = showClass;
//   this._btnOpen = btnOpen;
//   this._btnClose = btnClose;
//   this._closeToEcs = closeToEcs;

//   this._openPopupByButton = function (button) {
//     var self = this;
//     if (!self.root.classList.contains(self._showClass)) {
//       button.addEventListener('click', function(evt) {
//         evt.preventDefault();
//         self.root.classList.add(self._showClass);
//       })
//     }
//   };
//   if (this._btnOpen) {this._openPopupByButton(this._btnOpen);}

//   this._closePopupByButton = function(button) {
//     var self = this;
//     button.addEventListener('click', function(evt) {
//       if (self.root.classList.contains(self._showClass)) {
//         evt.preventDefault();
//         self.root.classList.remove(self._showClass);
//       }
//     })
//   };
//   if (this._btnClose) {this._closePopupByButton(this._btnClose);}

//   this._closePopupByEscape = function () {
//     var self = this;
//     window.addEventListener('keydown', function(evt) {
//       if (self.root.classList.contains(self._showClass) && evt.keyCode === 27) {
//         evt.preventDefault();
//         self.root.classList.remove(self._showClass);
//       }
//     })
//   }
//   if (this._closeToEcs) {this._closePopupByEscape()};
// }

// console.log(document.querySelector('.popup-feedback'));

// feedback = new Popup(document.querySelector('.popup-feedback'), 'popup_show', true, 
//                     document.querySelector('.contacts__btn'), 
//                     document.querySelector('.btn-close-popup_feedback'));

// feedbackWindow = feedback.root;
// feedbackSubmit = feedbackWindow.querySelector('.input-form__btn');
// feedbackInputName = feedbackWindow.querySelector('#user-name');
// feedbackInputEmail = feedbackWindow.querySelector('#user-email');
// feedbackTextarea = feedbackWindow.querySelector('#user-text');

// feedbackWindow.addEventListener('submit', function(evt) {
//   evt.preventDefault();
// })
