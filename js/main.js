const navItems = document.querySelectorAll('.asideNavList li');
const siteSections = document.querySelectorAll('.siteSection');
const asideLogo = document.querySelector('.asideHeading');

document.addEventListener('DOMContentLoaded', () => {
    const firstTab = 'about';
    let currentTab = localStorage.getItem("currentTab") || firstTab;

    const setActiveTab = (tab) => {
        siteSections.forEach((section) => {
            section.classList.toggle('active', section.classList.contains(tab));
        });
        localStorage.setItem("currentTab", tab);
    };

    setActiveTab(currentTab);

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            currentTab = item.id;
            setActiveTab(currentTab);
        });
    });

    asideLogo.addEventListener('click', () => {
        currentTab = firstTab;
        setActiveTab(currentTab);
    });
});

function updateBodyPadding() {
    let asideWidth = document.querySelector('.aside').offsetWidth;
    if (window.innerWidth < 1920 + asideWidth) {
        document.body.style.paddingLeft = asideWidth + 'px';
    } else document.body.style.paddingLeft = '0';
}

updateBodyPadding();
window.addEventListener('resize', updateBodyPadding);