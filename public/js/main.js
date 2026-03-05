/* ========================================
   10cent Website - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    console.log('10cent Website loaded successfully!');

    // Sanctuaries Slider Logic
    const sanctuarySlides = [
        {
            // Slide 1 (Default)
            image: 'https://beforest.co/wp-content/uploads/2026/02/10-Lifestyle-Website-07-1.jpg',
            locationMain: 'POOMAALE 1.0,',
            locationAccent: 'COORG',
            description: 'Ancient forest canopy.<br>Coffee, Cardamom &amp; Mist in Coorg.',
            // CSS Variables for Hover Effect
            cssVars: {
                '--hover-clip': 'inset(16.5% 32% 40.5% 47%)',
                '--hover-box-top': '38%',
                '--hover-box-left': '57.5%',
                '--hover-box-width': '21%',
                '--hover-box-height': '43%'
            }
        },
        {
            // Slide 2
            image: 'https://beforest.co/wp-content/uploads/2026/02/10-Lifestyle-Website-07-1-1.jpg',
            locationMain: 'POOMAALE 2.0,',
            locationAccent: 'COORG',
            description: 'Adjacent wilderness.<br>New coffee plantations and misty trails in Coorg.',
            // CSS Variables for Hover Effect
            cssVars: {
                '--hover-clip': 'inset(12% 32% 48% 47%)',
                '--hover-box-top': '32%',
                '--hover-box-left': '57.5%',
                '--hover-box-width': '21%',
                '--hover-box-height': '40%'
            }
        },
        {
            // Slide 3
            image: 'https://beforest.co/wp-content/uploads/2026/02/10-Lifestyle-Website-07-1-2.jpg',
            locationMain: 'HAMMIYALA,',
            locationAccent: 'COORG',
            description: 'Coffee agroforestry.<br>High altitude grasslands where wind speaks.',
            // CSS Variables for Hover Effect
            cssVars: {
                '--hover-clip': 'inset(16% 36% 50% 48%)',
                '--hover-box-top': '33%',
                '--hover-box-left': '56%',
                '--hover-box-width': '16%',
                '--hover-box-height': '34%'
            }
        },
        {
            // Slide 4
            image: 'https://beforest.co/wp-content/uploads/2026/02/10-Lifestyle-Website-07-1-3.jpg',
            locationMain: 'HYDERABAD',
            locationAccent: '',
            description: 'Deccan plateau.<br>Ancient rocks and scrub forests close to home.',
            // CSS Variables for Hover Effect (Estimated on the family)
            cssVars: {
                '--hover-clip': 'inset(18% 32% 42% 46%)',
                '--hover-box-top': '50%',
                '--hover-box-left': '50%',
                '--hover-box-width': '24%',
                '--hover-box-height': '40%'
            }
        },
        {
            // Slide 5
            image: 'https://beforest.co/wp-content/uploads/2026/02/10-Lifestyle-Website-07-1-4.jpg', // Bhopal image
            locationMain: 'BHOPAL',
            locationAccent: '',
            description: "India's Central Highlands.<br>Where the tiger still walks.",
            // CSS Variables for Hover Effect
            cssVars: {
                '--hover-clip': 'inset(18% 32% 40% 47%)',
                '--hover-box-top': '45%',
                '--hover-box-left': '55%',
                '--hover-box-width': '22%',
                '--hover-box-height': '38%'
            }
        },
        {
            // Slide 6
            image: 'https://beforest.co/wp-content/uploads/2026/02/10-Lifestyle-Website-07-1-5.jpg',
            locationMain: 'MUMBAI',
            locationAccent: '',
            description: 'Maximum City.<br>The silence closest to the chaos.',
            // CSS Variables for Hover Effect
            cssVars: {
                '--hover-clip': 'inset(20% 35% 44% 50%)', // Estimated
                '--hover-box-top': '48%',
                '--hover-box-left': '52%',
                '--hover-box-width': '20%',
                '--hover-box-height': '36%'
            }
        }
    ];

    let currentSanctuaryIndex = 0;

    const sanctuarySection = document.querySelector('.sanctuaries');
    const locationMainEl = document.querySelector('.sanctuaries-location-main');
    const locationAccentEl = document.querySelector('.sanctuaries-location-accent');
    const descriptionEl = document.querySelector('.sanctuaries-description');
    const leftArrow = document.querySelector('.sanctuaries-arrow-left');
    const rightArrow = document.querySelector('.sanctuaries-arrow-right');

    function updateSanctuary(index) {
        const slide = sanctuarySlides[index];

        // Update Background Image
        sanctuarySection.style.setProperty('--sanctuary-bg', `url('${slide.image}')`);

        // Update CSS Variables for Hover Effect
        for (const [key, value] of Object.entries(slide.cssVars)) {
            sanctuarySection.style.setProperty(key, value);
        }

        // Update Text Content
        locationMainEl.textContent = slide.locationMain;
        locationAccentEl.textContent = slide.locationAccent;
        descriptionEl.innerHTML = slide.description;
    }

    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', function () {
            currentSanctuaryIndex--;
            if (currentSanctuaryIndex < 0) {
                currentSanctuaryIndex = sanctuarySlides.length - 1;
            }
            updateSanctuary(currentSanctuaryIndex);
        });

        rightArrow.addEventListener('click', function () {
            currentSanctuaryIndex++;
            if (currentSanctuaryIndex >= sanctuarySlides.length) {
                currentSanctuaryIndex = 0;
            }
            updateSanctuary(currentSanctuaryIndex);
        });
    }

    // Experience Slider Logic
    const experienceSlides = [
        {
            image: 'https://beforest.co/wp-content/uploads/2026/02/PBR_2100-1.jpg',
            label: 'EXTENDED<br>FAMILY',
            description: 'The team on the ground<br>is an extension of your family.',
            layout: 'default' // Label left, Image right
        },
        {
            image: 'https://beforest.co/wp-content/uploads/2026/02/PBR_2100-1-1.jpg',
            label: 'EXPANSIVE<br>PRIVACY',
            description: 'Large landscapes with secluded rooms<br>(100+ acres with two to three guest houses)',
            layout: 'reversed' // Image left, Label right
        },
        {
            image: 'https://beforest.co/wp-content/uploads/2026/02/PBR_2100-2.jpg',
            label: 'TRUE<br>SOLITUDE',
            description: 'You are likely to bump into wildlife<br>more than bumping into others.<br>Truly you, your thoughts and nothing else.',
            layout: 'centered' // Label and description vertically centered
        },
        {
            image: 'https://beforest.co/wp-content/uploads/2026/02/PBR_2100-3.jpg',
            label: 'UNFILTERED<br>WILDERNESS',
            description: 'An unfiltered experience of wilderness,<br>working estates, the land and its culture',
            layout: 'reversed-bottom' // Image left, Label top, Description bottom
        },
        {
            image: 'https://beforest.co/wp-content/uploads/2026/02/PBR_2100-4.jpg',
            label: 'DEEP<br>PERSPECTIVE',
            description: 'One thing is for certain -<br>in 3 nights you get a deep insight<br>into the land and its culture.<br><br>A perspective shift would have started.',
            layout: 'stacked' // Label and description in left column
        },
        {
            image: 'https://beforest.co/wp-content/uploads/2026/02/PBR_2100-5.jpg', // Placeholder for Slide 6
            label: 'PERSONAL<br>COMMITMENT',
            description: 'This is not a club.<br>This is a commitment to yourself.',
            layout: 'slide-6' // Heading Right-Align, Desc Left-Align
        }
        // Add more experience slides here as needed
    ];

    let currentExperienceIndex = 0;

    const experienceContentEl = document.querySelector('.experience-content');
    const experienceLabelEl = document.querySelector('.experience-label');
    const experienceLabelInlineEl = document.querySelector('.experience-label-text');
    const experienceDescriptionEl = document.querySelector('.experience-description');
    const experienceDescriptionStackedEl = document.querySelector('.experience-description-stacked');
    const experienceImageEl = document.querySelector('.experience-image');
    const experienceLeftArrow = document.querySelector('.experience-arrow-left');
    const experienceRightArrow = document.querySelector('.experience-arrow-right');

    function updateExperience(index) {
        const slide = experienceSlides[index];

        // Update Image
        experienceImageEl.src = slide.image;

        // Update Text Content
        experienceLabelEl.innerHTML = slide.label;
        if (experienceLabelInlineEl) {
            experienceLabelInlineEl.innerHTML = slide.label;
        }
        experienceDescriptionEl.innerHTML = slide.description;
        if (experienceDescriptionStackedEl) {
            experienceDescriptionStackedEl.innerHTML = slide.description;
        }

        // Update Layout
        experienceContentEl.classList.remove('experience-reversed', 'experience-centered', 'experience-reversed-bottom', 'experience-stacked', 'experience-slide-6');
        if (slide.layout === 'reversed') {
            experienceContentEl.classList.add('experience-reversed');
        } else if (slide.layout === 'centered') {
            experienceContentEl.classList.add('experience-centered');
        } else if (slide.layout === 'reversed-bottom') {
            experienceContentEl.classList.add('experience-reversed-bottom');
        } else if (slide.layout === 'stacked') {
            experienceContentEl.classList.add('experience-stacked');
        } else if (slide.layout === 'slide-6') {
            experienceContentEl.classList.add('experience-slide-6');
        }
    }

    if (experienceLeftArrow && experienceRightArrow) {
        experienceLeftArrow.addEventListener('click', function () {
            currentExperienceIndex--;
            if (currentExperienceIndex < 0) {
                currentExperienceIndex = experienceSlides.length - 1;
            }
            updateExperience(currentExperienceIndex);
        });

        experienceRightArrow.addEventListener('click', function () {
            currentExperienceIndex++;
            if (currentExperienceIndex >= experienceSlides.length) {
                currentExperienceIndex = 0;
            }
            updateExperience(currentExperienceIndex);
        });
    }
});
