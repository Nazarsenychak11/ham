const peoples = {
    0: {
        user_name: 'Liza Brown',
        user_work: 'Frontend developer',
        text: `Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.`,
        user_image: '1.jpg'
    },
    1: {
        user_name: 'Jack Pot',
        user_work: 'Backend developer',
        text: `Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.`,
         user_image: '2.jpg'
    },
    2: {
        user_name: 'Hasan Ali',
        user_work: 'Web Designer',
        text: `Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus,`,
        user_image: '3.jpg'
    },
    3: {
        user_name: 'Sarah Rafferty',
        user_work: 'Team Lead',
        text: `Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, nonTempus ultricies luctus,
        dignissim, augue tempus ultricies lepus dignissim, augue tempus ultricies l dignissim, augue tempus ultricies l`,
        user_image: '4.jpg'
    }
};

// events
let peoplePhoto = $('.user-list li');
peoplePhoto.on('click', moveSlidePhoto);
let buttonLeft = $('.slider-control-left');
buttonLeft.on('click', slideLeft);
let buttonRight = $('.slider-control-right');
buttonRight.on('click', slideRight);

// function to clear information about user
function toClearUser() {
    $('.people-slider-message').remove();  
    $('.user-name').remove();     
    $('.user-position').remove(); 
    $('.user-photo').remove(); 
}

// funtion to move slide on click
function moveSlidePhoto() {
    const dataLi = $(this).data('li'); 
    $('.list-small-img.user-active').removeClass('user-active');
    $(this).addClass('user-active');
// call clear funtion and finde next user
    toClearUser();
    let user = findPeople(peoples, dataLi);
    showUser(user);
}

// to finde a man what we need
function findPeople(peoplesObject, dataLiValue) {
    let user = {};
    for (let key in peoplesObject) {
        if (peoplesObject.hasOwnProperty(key)) {
            if (Number(key) === dataLiValue) {
                return user = peoplesObject[key];
            }
        }
    }
}

// function get objet of user
function showUser(peoplesObject) {
    let peopleMessage = document.querySelector('.people-say-slider-comment');
    let peopleDetails = document.querySelector('.user-details');

    // create new element 
    const peopleComment = document.createElement('p');
    const peopleName = document.createElement('p');
    const peoplePosition = document.createElement('p');
    const peopleImageBlock = document.createElement('div');
    const peoplePhoto = document.createElement('img');

    // to add class 
    $(peopleComment).addClass('people-slider-message');
    $(peopleName).addClass('user-name');
    $(peoplePosition).addClass('user-position');
    $(peopleImageBlock).addClass('user-photo');
    $(peoplePhoto).addClass('user-photo-img');

    // to write value from object
    $(peopleComment).text(peoplesObject.text);
    $(peopleName).text(peoplesObject.user_name);
    $(peoplePosition).text(peoplesObject.user_work);
    peoplePhoto.setAttribute('src', `./img/people/${peoplesObject.user_image}`);

    // to hide all elements
    $(peopleComment).hide();
    $(peopleName).hide();
    $(peoplePosition).hide();
    $(peopleImageBlock).hide();

    // to add current element inside new created block
    $(peopleMessage).append(peopleComment);
    $(peopleDetails).append(peopleName);
    $(peopleDetails).append(peoplePosition);
    $(peopleImageBlock).append(peoplePhoto);
    $(peopleDetails).append(peopleImageBlock);

// to show with duration
    $(peopleComment).fadeIn(1100);
    $(peopleName).fadeIn(800);
    $(peoplePosition).fadeIn(800);
    $(peopleImageBlock).fadeIn(1100);
}

// two another function for left and right btn move
function slideLeft() {
    let activeImg = $('.list-small-img.user-active');
    activeImg.removeClass('user-active').prev().addClass('user-active');
    toClearUser();
    let dataLiNow = $('.user-active').data('li');
// validation if we move to first position and next 
    if (typeof dataLiNow === 'undefined') {
        dataLiNow = $('.list-small-img').length - 1;
        let newActive = $('.user-list').children().last();
        newActive.addClass('user-active');
        let user = findPeople(peoples, dataLiNow);
        showUser(user);
    } else {
        let user = findPeople(peoples, dataLiNow);
        showUser(user);
    }
}
// for btn right
function slideRight() {
    let activeImg = $('.list-small-img.user-active');
    activeImg.removeClass('user-active').next().addClass('user-active');
    toClearUser();
    let dataLiNow = $('.user-active').data('li');

    if (typeof dataLiNow === 'undefined') {
        dataLiNow = 0;
        let newActive = $('.user-list').children().first();
        newActive.addClass('user-active');
        let user = findPeople(peoples, dataLiNow);
        showUser(user);
    } else {
        let user = findPeople(peoples, dataLiNow);
        showUser(user);
    }
}