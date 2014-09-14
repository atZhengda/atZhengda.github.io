$(document).ready(function() {
    setTimeout(function() {
        //return;
        $('#fullpage').fullpage({
            sectionsColor: ['#f2f2f2', '#7ef5dd', '#62c9f7', 'whitesmoke', '#000'],
            anchors: ['startPage', 'Web Dev', 'Android Dev', 'toDo'],
            menu: '#Menu',
        });
        $('#main').show();
        $('.mcontainer').slideUp();
        $('#fullpage').fullpage.reBuild();
    }, 500);
});