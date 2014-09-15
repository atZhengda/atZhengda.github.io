$(document).ready(function() {
    setTimeout(function() {
        //return;
        $('.mcontainer').slideUp();
        $('#main').show();
        $('#fullpage').fullpage({
            sectionsColor: ['#f2f2f2', '#62c9f7', '#f2f2f2', '#3b9dfa', 'whitesmoke'],
            anchors: ['startPage', 'Web Dev', 'VBA', 'Android Dev', 'toDo'],
            menu: '#Menu',
        });
        $('#fullpage').fullpage.reBuild();
    }, 500);
});