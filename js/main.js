const navItems = document.querySelectorAll('.asideNavList li');
const siteSections = document.querySelectorAll('.siteSection');
const asideLogo = document.querySelector('.asideHeading');

document.addEventListener('DOMContentLoaded', () => {

    // Navigation tabs logic

    const firstTab = 'about';
    let currentTab = localStorage.getItem("currentTab") || firstTab;

    const setActiveTab = (tab) => {
        siteSections.forEach((section) => {
            section.classList.toggle('active', section.classList.contains(tab));
        });
        
        navItems.forEach((item) => {
            item.classList.toggle('active', item.id === tab);
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

    // Expandable blocks logic
    const expandableBlocks = document.querySelectorAll('.expandable-block');

    expandableBlocks.forEach(function (block) {
        const header = block.querySelector('.expandable-header');
        const content = block.querySelector('.expandable-content');
        const arrow = block.querySelector('.expandable-arrow');

        header.addEventListener('click', function () {
            if (content.classList.contains('show')) {
                // Closing animation
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.marginBottom = '0px';
                arrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    content.classList.toggle('show');
                    content.style.maxHeight = '0';
                }, 50);
            } else {
                // Opening animation
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.marginBottom = '20px';
                arrow.style.transform = 'rotate(180deg)';
                setTimeout(() => {
                    content.classList.toggle('show');
                }, 50);
            }
        });
    });
});

function updateBodyPadding() {
    let asideWidth = document.querySelector('.aside').offsetWidth;
    if (window.innerWidth < 1920 + asideWidth) {
        document.body.style.paddingLeft = asideWidth + 'px';
    }
}

updateBodyPadding();
window.addEventListener('resize', updateBodyPadding);