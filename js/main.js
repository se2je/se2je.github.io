const navItems = document.querySelectorAll('.asideNavList li')
let currentTab = 'about'
const siteSections = document.querySelectorAll('.siteSection')

document.open(() => {
    const firstTab = 'about'
    const reloadTab = localStorage.getItem("CurrentTab")
    if (reloadTab) {
        siteSections.forEach((section) => {
            section.classList.contains(reloadTab) ? section.classList.add('active') : section.classList.remove('active');
        })

    } else {
        siteSections.forEach((section) => {
            section.classList.contains(firstTab) ? section.classList.add('active') : section.classList.remove('active');
        })
    }
})

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        currentTab = item.id
        siteSections.forEach((section) => {
            section.classList.contains(currentTab) ? section.classList.add('active') : section.classList.remove('active');
            localStorage.setItem("currentTab", currentTab);
        })
    })
})

function updateBodyPadding() {
    let asideWidth = document.querySelector('.aside').offsetWidth;
    if (window.innerWidth < 1920 + asideWidth) {
        document.body.style.paddingLeft = asideWidth + 'px';
    } else document.body.style.paddingLeft = '0';
}

updateBodyPadding();
window.addEventListener('resize', updateBodyPadding);