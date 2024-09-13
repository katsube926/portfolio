document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.toggle_btn').addEventListener('click', function() {
        var header = document.getElementById('header');
        if (header.classList.contains('open')) {
            header.classList.remove('open');
        } else {
            header.classList.add('open');
        }
    });
    document.getElementById('mask').addEventListener('click', function() {
        document.getElementById('header').classList.remove('open');
    });
    document.getElementById('navi').addEventListener('click', function() {
        document.getElementById('header').classList.remove('open');
    });
});