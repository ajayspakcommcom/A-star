
let toggleMore = false;

$('#myModal').on('hidden.bs.modal', function () {
    toggleMore = false;
    let toggleText = 'more...'
    console.log('Modal closed');
});

const customSort = (a, b) => {
    const removeTitle = (name) => name.replace(/^(Dr\.|Mr\.)\s+/i, '');
    const nameA = removeTitle(a.name);
    const nameB = removeTitle(b.name);
    return nameA.localeCompare(nameB);
};


function renderFirst100Characters(str) {
    if (str.length > 80) {
        return str.substring(0, 100) + '...';
    } else {
        return str;
    }
}

const advisoryMembers = [
    {
        id: 1,
        name: "Chef Satish Arora",
        description: "<p>A culinary luminary, Chef Satish Arora boasts a career spanning five decades, punctuated by his meteoric rise as the world's youngest Executive Chef of a five-star kitchen at a mere 26 years of age. An inspirational figure within the industry, Chef Arora has not only garnered accolades but has also served as a beacon of guidance for aspiring chefs. His journey is marked by a constellation of awards and the privilege of catering to royalty, heads of state, celebrities, and luminaries. </p>",
        imgUrl: "satish-arora.jpg"
    },
    {
        id: 2,
        name: "Chef Manjit Singh Gill",
        description: "<p>Renowned for his culinary prowess honed over four decades, Chef Manjit Singh Gill is a revered figure in the gastronomic realm. Embracing a philosophy of \"discovery and constant innovation,\" Chef Manjit commands respect among the industry's elite. Currently serving as the President of the Indian Federation of Culinary Associations, he led the kitchens of ITC Hotels as Corporate Chef  Recognized with the Escoffier Medal, Chef Manjit is also an author, with notable works including \"Eating Wisely & Well\" by Penguin and the \"Secrets of Indian Gastronomy\" series comprising \"Fire,\" \"Water,\" \"Earth, \" \"Air, \" and \"Ether.</p>",
        imgUrl: "Manjit-Singh-Gill.jpg"
    },
    {
        id: 3,
        name: "Chef Nitin Upadhyay",
        description: "<p>Chef Nitin Upadhyay brings to the table a wealth of experience acquired from renowned culinary institutes across Germany, France, and Switzerland. With a diverse portfolio spanning 30+ years and encompassing esteemed establishments such as Marriott Resort & Spa, Goa, Renaissance Hotel & Convention Centre, Mumbai, Hyatt Hotels International, Crown & Champa Resorts, Malé, and DLF Emporio Restaurants Pvt. Ltd, New Delhi, Chef Nitin epitomizes culinary excellence. </p>",
        imgUrl: "nitin-upadhyay.jpg"
    },
    {
        id: 4,
        name: "Mr. Salil Fadnis",
        description: "<p>An alumnus of IHM Mumbai 1991 batch, Salil Fadnis began his career with Oberoi hotels joining the prestigious OCLD. Salil spent a major part of his career in the kitchen and about 15 years as an Executive Chef. . His professional voyage encompasses stints across various national and international hotel chains. Over the past 30+ years he has worked in and out of the country having had the opportunity to open hotels in India and overseas. He is a founder member of The Western India Culinary Association (WICA), a networking and collaborating platform for chefs & is the current President at WICA. </p>",
        imgUrl: "salil-fadnis.jpg"
    },
    {
        id: 5,
        name: "Chef Sabyasachi Gorai",
        description: "<p>Chef Sabyasachi Gorai is a multifaceted culinary virtuoso revered as an Indian celebrity chef. With roles ranging from educator and hospitality consultant to television show host and food-show judge, Chef Saby's passion for food and cooking shines through. Armed with specialized culinary training from esteemed institutions such as Pastry School in Paris, Culinary School in the USA, and Pasta Academy in Italy, Chef Saby has amassed a plethora of achievements and accolades, culminating in his recognition as 'India's Best Chef' by the President of India.</p>",
        imgUrl: "Sabyasachi-Gorai.jpg"
    },
    {
        id: 6,
        name: "Mr. Sumeet Kumar",
        description: "<p>A Graduate from Swiss Hotel Association, Hotel Management School ‘Les Roches’, Switzerland. Presently, as the Vice President of Hospitality at Aamby Valley City, boasts over 25 years of experience as a Senior Director of Food & Beverage/Catering Operations Professional. With a global footprint spanning the USA, Europe, UAE, and India, Kumar's expertise extends to overseeing the pre-opening of over 25 F&B outlets in the UAE and Qatar, showcasing his adeptness in navigating diverse culinary landscapes. His vast experience in leading hotels of the world, franchises, and world class Royalty Evenings in the United Arab Emirates and beyond.</p>",
        imgUrl: "sumeet-kumar.jpg"
    },
    {
        id: 7,
        name: "Chef Ranjan Rajani",
        description: "<p>With over two decades of culinary expertise garnered from prestigious establishments such as Oberoi, Marriott, and Hyatt, Chef Ranjan Rajani currently serves as the Director of Food and Beverage at Hotel Sahara Star. His leadership prowess, coupled with an unwavering commitment to teamwork, enables him to steer his team of chefs across a spectrum of cuisines with finesse. </p>",
        imgUrl: "ranjan-rajani.jpg"
    }
];

function renderAdvisoryMembers() {

    const advisoryList = document.getElementById('advisoryList');

    advisoryMembers.forEach(member => {
        const listItem = document.createElement('li');
        listItem.classList.add('advisory-item');

        listItem.onclick = function () {
            getModalObject(member, 'advisory');
        };

        const memberContent = `
                    <div>
                        <span class='img-wrapper'>
                            <img src="./img/advisory/${member.imgUrl}" class="img-fluid" alt="" />
                        </span>
                        <div>
                            <strong>${member.name}</strong>
                            <p>${renderFirst100Characters(member.description)}</p>
                        </div>
                    </div>                
                `;

        listItem.innerHTML = memberContent;
        if (advisoryList) {
            advisoryList.appendChild(listItem);
        }
    });
}

renderAdvisoryMembers();

const facultyMembers = [
    {
        id: 1,
        name: "Dr. Rajeev R Mishra",
        description: `
        <p>Dr. Rajeev R Mishra, an IHM Lucknow alumnus (1998), holds a Doctoral Degree in Hospitality from Amity
University, Noida. With over 25 years of combined experience in hotel operations and academia, he
currently serves as Director of A-Star Academy Mumbai.Dr. Mishra has worked with several leading
institutions including CGC Landran, IES University Bhopal, AURO University Surat, and UEI Global New
Delhi. He has published 35+ research papers and presented over 25 at major conferences. His book,
&quot;Managing Hotel Front Office Operations,&quot; was published in 2016. He has received awards for Exemplary
Academic Leadership and Best Director-Principal. Dr. Mishra also actively contributes to curriculum
development for various hospitality programs.</p>
        `,
        imgUrl: "rajiv-mishra.png",
        designation: 'Director'
    },
    {
        id: 2,
        name: "Mr. Vishwanath Revankar",
        description: `<p>Vishwanath Revankar is an esteemed academician with a dynamic career spanning over six years in
corporate hospitality and more than seventeen years in hospitality education, training, and placement.
With a Bachelor&#39;s in Hotel Management and Catering Technology, a post graduate Diploma in Retail
Management, an MBA, and currently pursuing a Ph.D. in Management, he possesses a robust academic
background. He has held pivotal roles in leading hospitality and culinary colleges, showcasing expertise
in academic administration and leadership. He leverages his extensive industry experience and academic
acumen to nurture future leaders in the hospitality sector. His passion for education and wealth of
experience makes him a valuable asset in shaping the next generation of hospitality professionals.</p>`,
        imgUrl: "vishvanath.png",
        designation: 'Dean (F&amp;B Service)'
    },
    {
        id: 3,
        name: "Mr. Blesson Jacob",
        description: `<p>
            Blesson is an Assistant Lecturer specializing in Bakery and Patisserie, with extensive experience in
hospitality and a B.Sc. in Hotel and Hospitality Administration from IHM-Bhopal (2003-2006). He has
worked internationally, including roles with Royal Caribbean Cruise Lines and in Doha, Qatar. He has
been Chef De Partie at Mumbai Airport Lounge Services, overseeing the setup of the first Pastry Kitchen.
With almost 14 years in the industry, blesson has shifted focus to mentoring and training future hospitality
professionals.
        </p>`,
        imgUrl: "blesson.png",
        designation: 'Assistant Professor'
    },
    {
        id: 4,
        name: "Ms. Apurva C A Kulshrestha",
        description: `<p>
            After graduating from CAI College, she refined her culinary skills at Fairmont Hotels in Jaipur, specializing in high-end culinary arts. Transitioning into academia at IHM College, Hyderabad, she spent nearly 8 years teaching Indian, Continental cuisines, and bakery to aspiring chefs.
        </p>
        <p>
        Throughout her career, she had the honor of serving distinguished dignitaries as head chef, including the Prime Minister, Defence Ministry, and Home Minister. Her commitment to delivering exceptional culinary experiences underscored her passion for shaping the future of culinary professionals.
        </p>
        `,
        imgUrl: "apurva.png",
        designation: 'Assistant Professor'
    },
    {
        id: 5,
        name: "Ms. Merle Almeida",
        description: `<p>With over 19 years in the hospitality industry, including a decade in management, she is a dedicated
Assistant Professor of Rooms Division Management passionate about delivering exceptional guest
experiences. Currently pursuing a Ph.D. in Hotel Management, she holds an MBA in HR, a Master&#39;s in
Tourism Management, a B.Sc. in Hospitality Studies and Catering Services, and a Professional Diploma
in Hotel Management and Catering Technology.</p>
<p>She has extensive experience conducting professional training at institutes in Mumbai, Lonavala-
Khandala, and Pune, and as an outsourced trainer for properties such as The Fern, Fariyas Resort, VITS
Hotels, Ginger Hotel, Specialty Restaurants Pvt. Ltd. and Concept Hospitality Pvt. Ltd.</p>
        `,
        imgUrl: "merle.png",
        designation: 'Assistant Professor'
    },
    {
        id: 6,
        name: "Ms. Diana Dsouza",
        description: `<p>With over 15 years of professional experience in education, hospitality, and finance, and a strong
international background, she leverages this unique blend to support students in achieving their
educational goals. She brings a wealth of expertise in education counselling, enrolment, and international
student guidance, dedicating eight years to counselling students for opportunities in the US and Europe,
ensuring they find the best-fit institutions for their academic aspirations.</p>
<p>Her prior experience in international finance and hospitality provides a unique perspective, fostering
informed decisions. She is committed to using her diverse skill set to facilitate informed educational
decisions and support students in achieving their academic and career goals globally.</p>
        `,
        imgUrl: "diana.png",
        designation: 'Manager - Counsellor &amp; Enrolments'
    }
];

function renderFacultyMembers() {
    const facultyList = document.getElementById('facultyList');

    facultyMembers.forEach(member => {
        const listItem = document.createElement('li');
        listItem.classList.add('faculty-item');

        listItem.onclick = function () {
            getModalObject(member, 'faculty');
        };

        const memberContent = `
                    <div>
                        <span class='img-wrapper'>
                            <img src="./img/faculty/${member.imgUrl}" class="img-fluid" alt="" />
                        </span>
                        <div class="designation-name">
                            <div><span>${member.name}</span></div>
                            <div><span>${member.designation}</span></div>
                            <p>${renderFirst100Characters(member.description)}</p>
                        </div>
                    </div>                
                `;
        listItem.innerHTML = memberContent;
        if (facultyList) {
            facultyList.appendChild(listItem);
        }
    });
}

renderFacultyMembers();

function togglePopContent(event) {
    toggleMore = !toggleMore;
    toggleMore ? $('.pop-read-more-btn').text('less...') : $('.pop-read-more-btn').text('more...');
    $(event).parents("#modalParagraph").find('.pop-modal-content-box').toggleClass('auto-height');
}

function getModalObject(obj, types) {

    if (types === 'advisory') {
        $('#modalImage').attr('src', `./img/advisory/${obj.imgUrl}`);
    }

    if (types === 'faculty') {
        $('#modalImage').attr('src', `./img/faculty/${obj.imgUrl}`);
    }

    $('#modalName').text(obj.name);
    $('#modalParagraph').html(`
        <div class="pop-modal-content-box">${obj.description}</div>
        <span class="pop-read-more-btn" onclick="togglePopContent(this)">more...</span>
    `);
    $('#myModal').modal('show');
}

function programmes() {
    $('.courses-tabs .nav-link').on('click', function () {
        const text = $(this).text().trim().toLowerCase();
        console.log(text);

        switch (text) {
            case 'degree':
                window.location.href = './degree-programmes.html';
                break;
            case 'diploma':
                window.location.href = './diploma-programmes.html';
                break;
            case 'workshops':
                window.location.href = './workshops-event.html';
                break;
            default:
                console.log('No case matched');
                break;
        }
    });
}

function mobile() {

    const widthWidthSize = $(window).width();
    console.log(widthWidthSize);

    if (widthWidthSize < 767) {
        $('.navigation .navbar-collapse > ul').slideUp();
        $('.navigation .dropdown-menu').slideUp();

        $('.navbar-toggler ').on('click', function (e) {
            e.preventDefault();
            $('nav .navigation .navbar-collapse > ul').slideToggle();
        });

        $('.navigation .nav-link').on('click', function (e) {
            //e.preventDefault();
            const $this = $(this);
            $this.parent('li').find('ul').slideToggle()
        });
    }

}

mobile();

programmes();