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

    // Contact tabs logic

    const contactTabs = document.querySelectorAll('.contactTabsList li');
    const contactsTabItems = document.querySelectorAll('.contactsTabItem');
    let currentContactTab = 'activities';

    const setCurrentContactTab = (tab) => {
        contactsTabItems.forEach((tabItem) => {
            tabItem.classList.toggle('active', tabItem.classList.contains(tab));
        });

        contactTabs.forEach((item) => {
            item.classList.toggle('active', item.id === tab);
        });
    }

    contactTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            currentContactTab = tab.id;
            setCurrentContactTab(currentContactTab)
        })
    });

    setCurrentContactTab(currentContactTab)


    function addSequenceNumbers(parentElement) {

        let listItems = parentElement.querySelectorAll('li');

        // Loop through each list item
        listItems.forEach(function (item, index) {
            // Create a span element for the sequence number
            let span = document.createElement('span');

            span.textContent = (index + 1).toString();
            span.classList.add('listNumber')
            item.insertBefore(span, item.firstChild);
        });
    }

    const activitiesList = document.querySelector('.activitiesList')
    const leisureList = document.querySelector('.leisureList')

    addSequenceNumbers(activitiesList)
    addSequenceNumbers(leisureList)
});

// Body offset relative to aside

function updateBodyPadding() {
    let asideWidth = document.querySelector('.aside').offsetWidth;
    if (window.innerWidth < 1920 + asideWidth) {
        document.body.style.paddingLeft = asideWidth + 'px';
    }
}

updateBodyPadding();
window.addEventListener('resize', updateBodyPadding);


