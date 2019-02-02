

var messages = ['I forgot to get you a card.', 'Your mother must be proud.', 'Things are really looking up.', 'It could be worse.', 'Looks like you are truly enjoying yourself.', 'Now you can go to bed early and no one will mock you.'];
var images = ['1', '2', '3', '4', '5']


function randomMessage(){
    var message = messages [Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = message;
    console.log(message);

}

function randomImage(){
    var image = images [Math.floor(Math.random() * images.length)];
    document.getElementById('image-display').innerHTML = '<img src="/assets/birthday' + image + '.jpg" alt="birthday cartoon" width="300">';
    console.log(image);
}

//<img src="assets/birthday1.jpg" alt="birthday cartoon">

var randomizeButton = document.getElementById('message-button');
randomizeButton.addEventListener('click', function(){
    randomMessage();
    randomImage();
});