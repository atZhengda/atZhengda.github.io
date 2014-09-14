$(document).ready(function() {
    setTimeout(function() {
        //return;
        $('#fullpage').fullpage({
            sectionsColor: ['#f2f2f2', '#62c9f7', '#7ef5dd', '#3b9dfa', 'whitesmoke'],
            anchors: ['startPage', 'Web Dev', 'VBA', 'Android Dev', 'toDo'],
            menu: '#Menu',
        });
        $('#main').show();
        $('.mcontainer').slideUp();
        $('#fullpage').fullpage.reBuild();
    }, 500);
});