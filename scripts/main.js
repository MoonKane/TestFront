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
            candidateInfoTabsBlockDOM.classList.add('active-block');
            tabsMenuDom.value = candidateInfoTabsDOM[i].getAttribute('data-classObject');
        }
    });
}

/* При изменении select внутри candidate-info (который появляется на мобильных телефонах)
Изменяем и блок внутри candidate-info */
let tabsMenuDom = document.querySelector('.tab-menu #candidate-info-tab-menu');
tabsMenuDom.addEventListener('change', () => {
    let candidateInfoTabsBlockDOM = document.querySelector(`.candidate-info-tab-block.${tabsMenuDom.value}`);
    let candidateInfoTabsActiveBlockDOM = document.querySelector(`.candidate-info-tab-block.active-block`);
    candidateInfoTabsActiveBlockDOM.classList.remove('active-block');
    candidateInfoTabsBlockDOM.classList.add('active-block');
    let candidateInfoActiveTabDOM = document.querySelector('.candidate-info .tabs-but.active');
    let candidateInfoTabsDOM = document.querySelector(`.candidate-info .tabs-but[data-classObject="${tabsMenuDom.value}"]`);
    candidateInfoActiveTabDOM.classList.remove('active');
    candidateInfoTabsDOM.classList.add('active');
});


/* Появление и исчезновение sidebar, а также кнопки burger-but */

let sidebarDOM = document.querySelector('section.nav-sidebar');

let sidebarBurgerButDOM = document.querySelector('.sidebar-burder-but');
let headerBurgerButDOM = document.querySelectorAll('.header-burger-but');

let sidebarActive = false;

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


/* Candidate-info заполнение текстом */

const workerObject = {
    userID1: {
        id: 1,
        name: "Александр Смахтин",
        job: "Рекрутер",
        phone_number: 9833485543,
        email: "alexKeySmaxtin@mail.ru",
        telegram: "@alexKeySmaxtin",
    }
}

const candidateObject = {
    userID1: {
        id: 1,
        name: "Константинопольский Валерий Сергеевич",
        phone_number: '9276992232',
        email: "konstantinopol@gmail.com",
        telegram: "@konstantinopol",
        vacancy: "Back-end Разработчик",
        rekruter: workerObject.userID1,
        what_zp: '100 000 ₽ - 200 000 ₽',
        avatar: "url(../data/images/usersAvatar/konstantinopol.png)"
    }
}

let candidatePhoneNumberDOMclass = 'candidate-phone-number';
let candidateEmailDOMclass = 'candidate-email';
let candidateTelegramDOMclass = 'candidate-telegram';
let candidateLinkDOMclass = 'candidate-link';
let candidateVacancyDOMclass = 'candidate-vacancy';
let candidateRekruterDOMclass = 'candidate-rekruter';
let candidateWantZpDOMclass = 'candidate-want-zp';

addTextInSecondTab(candidateObject.userID1.email, candidateEmailDOMclass);
addTextInSecondTab(candidateObject.userID1.telegram, candidateTelegramDOMclass);
addTextInSecondTab(candidateObject.userID1.vacancy, candidateVacancyDOMclass);
addTextInSecondTab(candidateObject.userID1.what_zp, candidateWantZpDOMclass);


addPhoneNumberTextSecondTab(candidateObject.userID1.phone_number, candidatePhoneNumberDOMclass)

function addPhoneNumberTextSecondTab(text, DOMclass) {
    let textDOM = document.querySelector(`.main-info-user-tab.${DOMclass} .${DOMclass}-text`);
    let textDOMchildren = textDOM.children;
    textDOMchildren[0].innerHTML = text.slice(0, 3);
    textDOMchildren[1].innerHTML = text.slice(3, 6);
    textDOMchildren[2].innerHTML = text.slice(6, 8);
    textDOMchildren[3].innerHTML = text.slice(8, 10);
}

function addTextInSecondTab(text, DOMclass) {
    let textDOM = document.querySelector(`.main-info-user-tab.${DOMclass} .${DOMclass}-text`);
    textDOM.innerHTML = text;
}