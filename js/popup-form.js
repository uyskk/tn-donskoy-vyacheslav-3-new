var popupContact = document.querySelector('.index-popup-overlay')
var popupButton = document.querySelector('.popup-button-link')
var popupCloseButton = popupContact.querySelector('.button-close')
var firstInput = popupContact.querySelector('#popup-user-name')

popupButton.addEventListener('click', function () {
    popupContact.classList.add('open');
    firstInput.focus()
    document.body.style.overflow = 'hidden';
})

popupCloseButton.addEventListener('click', function() {
    popupContact.classList.remove('open')
    popupButton.focus()
    document.body.style.overflow = 'initial';
})

window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27 ) {
        popupContact.classList.remove('open');
        popupButton.focus()
        document.body.style.overflow = 'initial';
    }
})

popupContact.addEventListener('click', function(evt) {
    if (evt.target === popupContact ) {
        popupContact.classList.remove('open')
        document.body.style.overflow = 'initial';
        popupButton.focus()
    }
})