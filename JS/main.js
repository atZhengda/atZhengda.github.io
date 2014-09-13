$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#f2f2f2', '#7ef5dd', '#7BAABE', 'whitesmoke', '#000'],
        anchors: ['startPage', 'Web Dev', 'Android Dev', 'toDo'],
        menu: '#Menu',
    });
    $('#fullpage').fullpage.reBuild();

});