window.onload = function () {

    let glassMenu = document.querySelector('.glass__menu'),
        glassMenuBlock = document.querySelectorAll('.glass__menu-block'),
        glassMenuCard = document.querySelectorAll('.glass__menu-card'),
        decorMenu = document.querySelector('.decor__menu'),
        decorMenuBlock = document.querySelectorAll('.decor__menu-item'),
        decorMenuCard = document.querySelectorAll('.decor__content');

    glassMenuBlock[0].classList.add('active');
    glassMenuCard[0].classList.add('active-card');
    decorMenuBlock[0].classList.add('decor-active');
    decorMenuCard[0].classList.add('active-decor');

    glassMenu.addEventListener('click', function (e) {
        let targetGlass = e.target;
        let currBlock = targetGlass.parentNode;
        for (let index = 0; index < glassMenuBlock.length; index++) {
            if (e.target === glassMenu) {
                return;
            } else if (glassMenuBlock[index] != currBlock) {
                glassMenuBlock[index].classList.remove('active');
                glassMenuCard[index].classList.remove('active-card');
            } else {
                glassMenuBlock[index].classList.add('active');
                glassMenuCard[index].classList.add('active-card');
            }
        }
    });

    decorMenu.addEventListener('click', function (e) {
        let targetDecor = e.target;
        let currBlock = targetDecor;
        for (let index = 0; index < decorMenuBlock.length; index++) {
            if (e.target === decorMenu) {
                return;
            } else if (decorMenuBlock[index] != currBlock) {
                decorMenuBlock[index].classList.remove('decor-active');
                decorMenuCard[index].classList.remove('active-decor');
            } else {
                decorMenuBlock[index].classList.add('decor-active');
                decorMenuCard[index].classList.add('active-decor');
            }
        }
    });

    let requestLinks = document.querySelectorAll('.request-link'),
        body = document.querySelector('body');

    if (requestLinks.length > 0) {
        for (let index = 0; index < requestLinks.length; index++) {
            requestLinks[index].addEventListener('click', function (e) {
                let requestName = requestLinks[index].getAttribute('href').replace('#', '');
                openRequest(requestName);
            })
        }
    }

    function openRequest(x) {
        let popup = document.getElementById(x);
        popup.classList.add('request-active');
        body.classList.add('lock');
        popup.addEventListener('click', function (e) {
            if (!e.target.closest('.request__form') || e.target.closest('.request__form-cancel')) {
                closeRequest(e.target.closest('.request'));
            };
        });

    }

    function closeRequest(x) {
        let popup = x;
        popup.classList.remove('request-active');
        body.classList.remove('lock');
    }

}

