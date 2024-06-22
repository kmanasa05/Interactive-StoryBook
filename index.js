document.addEventListener('DOMContentLoaded', function() {
    var exploreButton1 = document.getElementById('exploreButton1');
    var exploreButton2 = document.getElementById('exploreButton2');
    var endButton = document.getElementById('endButton');

    if (exploreButton1) {
        exploreButton1.addEventListener('click', function() {
            navigateToPage('page2');
        });
    }

    if (exploreButton2) {
        exploreButton2.addEventListener('click', function() {
            navigateToPage('page3');
        });
    }

    if (endButton) {
        endButton.addEventListener('click', function() {
            navigateToPage('page4');
        });
    }
});

function navigateToPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    var nextPage = document.getElementById(pageId);
    if (nextPage) {
        nextPage.style.display = 'block';
    } else {
        console.error('Page ID not found:', pageId);
    }
}
