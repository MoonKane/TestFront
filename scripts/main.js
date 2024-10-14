/* Стилизуем scrollbar для firefox. Потому что изначальные значения в css файле убивают скролл в других браузерах */
let scrollbar = document.querySelectorAll('.scroll-bar');
if (navigator.userAgent.indexOf("Firefox") != -1 ) {
    for(let i = 0; i < scrollbar.length; i++) {
        scrollbar[i].style.scrollbarColor = 'var(--scroll-thumb-color) var(--scroll-track-color)';
        scrollbar[i].style.scrollbarWidth = 'thin';
    }
}


/* Добавляем ивент на клик для DOM-элемента .nav-sidebar-list .nav-sidebar-list-tab, 
который позволяет менять активные блоки с информацией tab в nav-sibebar */
let sidebarTabsDOM = document.querySelectorAll('.nav-sidebar-list .nav-sidebar-list-tab');
for(let i = 0; i < sidebarTabsDOM.length; i++) {
    sidebarTabsDOM[i].addEventListener('click', () => {
        let sidebarTabsActiveMainBlockDOM = document.querySelector('.main-block.active');
        let sidebarTabsMainBlockDOM = document.querySelector(`.main-block.${sidebarTabsDOM[i].getAttribute('data-classObject')}`);
    
        if(sidebarTabsActiveMainBlockDOM != sidebarTabsMainBlockDOM) {
            let sidebarActiveabsDOM = document.querySelector('.nav-sidebar-list-tab.active');
            sidebarTabsActiveMainBlockDOM.classList.remove('active');
            sidebarActiveabsDOM.classList.remove('active');
            sidebarTabsDOM[i].classList.add('active');
            sidebarTabsMainBlockDOM.classList.add('active')
        }
    });
}


/* Добавляем ивент на клик для DOM-элемента candidate-info tabs-but, 
который позволяет менять активные блоки с информацией tabs в Информации о кандидате */
let candidateInfoTabsDOM = document.querySelectorAll('.candidate-info .tabs-but');
for(let i = 0; i < candidateInfoTabsDOM.length; i++) {
    candidateInfoTabsDOM[i].addEventListener('click', () => {
        let candidateInfoTabsActiveBlockDOM = document.querySelector('.candidate-info-tab-block.active-block');
        let candidateInfoTabsBlockDOM = document.querySelector(`.candidate-info-tab-block.${candidateInfoTabsDOM[i].getAttribute('data-classObject')}`);
        
        if(candidateInfoTabsActiveBlockDOM != candidateInfoTabsBlockDOM) {
            let candidateInfoActiveTabDOM = document.querySelector('.candidate-info .tabs-but.active');
            candidateInfoTabsActiveBlockDOM.classList.remove('active-block');
            candidateInfoActiveTabDOM.classList.remove('active');
            candidateInfoTabsDOM[i].classList.add('active');
            candidateInfoTabsBlockDOM.classList.add('active-block')
        }
    });
}


/* Появление и исчезновение sidebar, а также кнопки burger-but */

let sidebarDOM = document.querySelector('section.nav-sidebar');

let sidebarBurgerButDOM = document.querySelector('.sidebar-burder-but');
let headerBurgerButDOM = document.querySelectorAll('.header-burger-but');

let sidebarActive = true;

toggleSidebarDisplay();
function toggleSidebarDisplay() {
    if(sidebarActive) {
        sidebarDOM.style.display = 'block';
        headerBurgerButDOM.forEach(element => {
            element.style.display = 'none';
        });
    } else {
        sidebarDOM.style.display = 'none';
        headerBurgerButDOM.forEach(element => {
            element.style.display = 'flex';
        });
    }
}

sidebarBurgerButDOM.addEventListener('click', () => {
    sidebarActive = false;
    toggleSidebarDisplay();
});

for(let i = 0; i < headerBurgerButDOM.length; i++) {
    headerBurgerButDOM[i].addEventListener('click', () => {
        sidebarActive = true;
        toggleSidebarDisplay();
    });
}


/* Удаление вакансии */

let vacancyBlockDOM = document.querySelectorAll('.main-info-vacancy .delete-but');
vacancyBlockDOM.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.remove();
    });
});