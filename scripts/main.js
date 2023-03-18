let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/test-image.jpeg') {
        myImage.setAttribute('src', 'images/test-image3.jpeg');

    } else {
        myImage.setAttribute('src', 'images/test-image.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('敢问来者尊姓大名');
    localStorage.setItem('name', myName);
    myHeading.textContent = '好名字!太牛逼了' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '好名字!太牛逼了' + storedName;
}
myButton.onclick = function () {
    setUserName();
}