
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
        description: "<p>A culinary luminary, Chef Satish Arora boasts a career spanning five decades, punctuated by his meteoric rise as the world's youngest Executive Chef of a five-star kitchen at a mere 26 years of age. Aninspirational figure within the industry, Chef Arora has not onlygarnered accolades but has also served as a beacon of guidance foraspiring chefs. His journey is marked by a constellation of awards andthe privilege of catering to royalty heads of state, celebrities, and luminaries. </p>",
        imgUrl: "satish-arora.jpg"
    },
    {
        id: 2,
        name: "Chef Manjit Singh Gill",
        description: "<p>Chef Manjit Singh Gill, a revered figure in the gastronomic world and President of the Indian Federation of Culinary Associations, has led ITC Hotels as Corporate Chef, been recognized with the Escoffier Medal, and authored works including \"Eating Wisely & Well\" and the \"Secrets of Indian Gastronomy\" series: \"Fire,\" \"Water,\" \"Earth,\" \"Air,\" and \"Ether.\"</p>",
        imgUrl: "Manjit-Singh-Gill.jpg"
    },
    {
        id: 3,
        name: " Chef Sabyasachi Gorai",
        description: "<p>Chef Sabyasachi Gorai is a multifaceted culinary virtuoso revered as an Indian celebrity chef. With roles ranging from educator and hospitality consultant to television show host and food-show judge, Chef Saby's passion for food and cooking shines through. Armed with specialized culinary training from esteemed institutions such as Pastry School in Paris, Culinary School in the USA, and Pasta Academy in Italy, Chef Saby has amassed a plethora of achievements and accolades, culminating in his recognition as ‘India's Best Chef’  by the President of India.</p>",
        imgUrl: "Sabyasachi-Gorai.jpg"
    },
    {
        id: 4,
        name: "Mr. Salil Fadnis",
        description: "<p>An alumnus of IHM Mumbai 1991 batch, Salil Fadnis began his career with Oberoi hotels joining the prestigious OCLD. Salil spent a major part of his career in the kitchen and about 15 years as an Executive Chef. His professional voyage encompasses stints across various national and international hotel chains. Over the past 30+ years he has worked in and out of the country having had the opportunity to open hotels in India and overseas. He is a founder member of The Western India Culinary Association (WICA), a networking and collaborating platform for chefs & is the current President at WICA.</p>",
        imgUrl: "salil-fadnis.jpg"
    },
    {
        id: 8,
        name: "Prof. Nimit Chowdhary",
        description: "<p>Prof. Nimit Chowdhary brings over 30 years of academic experience,having served as a Professor at the Indian Institute of Tourism and Travel Management across various locations. A passionate leader with a knack for innovation, he thrives on experimenting with teaching methods and shaping learning environments. Beyond his research record of 245+ publications, he boasts a global perspective gained through extensive travel across 40+ countries, further enriched by prestigious awards like the Eminent Engineer distinction.</p>",
        imgUrl: "Prof. Nimit Chowdhary.jpg"
    },
    {
        id: 9,
        name: "Dr. Prashant Kumar Gautam",
        description: "Dr. Prashant Kumar Gautam is a highly accomplished Professor of Tourism at Panjab University with extensive leadership experience. He currently holds positions as a Nominated Fellow to the Senate, Executive Council member at HPU Shimla and Nagaland University, and member of the AICTE All India Board for Tourism and Hospitality. His impressive record includes completing research projects valued at Rs 2.5 crores, guiding 8 doctoral students, and publishing 15 books and 80 research papers, solidifying his expertise in the field.",
        imgUrl: "DR Prashant Kumar Gautam.jpg"
    },
    {
        id: 10,
        name: "Prof. U. N. Shukla",
        description: "Prof. U. N. Shukla, a tourism education leader with 29+ years, is the director of Dr. Bhimrao Ambedkar University's Institute of Tourism and Hotel Management. He is also the Dean of the Faculty of Management. With published research in over 28 journals and experience guiding scholars, his expertise is undeniable.",
        imgUrl: "Prof U.N. Shukla (2).jpg"
    },
    {
        id: 11,
        name: "Dr. Norel Peter Marpuri Illo",
        description: "Dr. Norel Peter Marpuri Illo is the Master in Hospitality Management Program Chair and Assistant Professor IV at Camarines Sur Polytechnic Colleges, Nabua, Camarines Sur, Philippines. With extensive experience in the food service industry, including pastry, baking, and food and beverage services, he is known for his leadership, organizational skills, and commitment to continuous improvement. Norel has also served as OIC Dean, College Instructor, and Distinguished Reviewer for Global Professional Advancement, showcasing his ability to connect with diverse individuals and build strong relationships.",
        imgUrl: "Dr. Norel Peter Marpuri Illo.jpg"
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
        name: `Dr. Rajeev R Mishra`,
        description: `<p>Dr. Rajeev R Mishra, an IHM Lucknow alumnus (1998), holds a Doctoral Degree in Hospitality from Amity
            University, Noida. With over 25 years of combined experience in hotel operations and academia, he
            currently serves as Director of A-Star Academy Mumbai.Dr. Mishra has worked with several leading
            institutions including CGC Landran, IES University Bhopal, AURO University Surat, and UEI Global New
            Delhi. He has published 35+ research papers and presented over 25 at major conferences. His book,
            &quot;Managing Hotel Front Office Operations,&quot; was published in 2016. He has received awards for Exemplary
            Academic Leadership and Best Director-Principal. Dr. Mishra also actively contributes to curriculum
            development for various hospitality programs.</p>`,
        imgUrl: "rajiv-mishra.png",
        designation: 'Director',
        experience: "26 Years of Experience"

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
        designation: 'Dean (F&amp;B Service)',
        experience: "23 Years of Experience"
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
            professionals.</p>`,
        imgUrl: "blesson.png",
        designation: 'Assistant Professor',
        experience: "18 Years of Experience"
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
        designation: 'Assistant Professor',
        experience: "8 Years of Experience"
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
                        Hotels, Ginger Hotel, Specialty Restaurants Pvt. Ltd. and Concept Hospitality Pvt. Ltd.</p> `,
        imgUrl: "merle.png",
        designation: 'Assistant Professor',
        experience: "21 Years of Experience"
    },
    {
        id: 6,
        name: "Ms. Srusti Singh",
        description: ``,
        imgUrl: "Shruti-Singh.jpg",
        designation: 'Teaching Assistant',
        experience: "3 Years of Experience"
    },
    {
        id: 7,
        name: "Ms. Diana Dsouza",
        description: `<p>With over 15 years of professional experience in education, hospitality, and finance, and a strong
                       international background, she leverages this unique blend to support students in achieving their
                       educational goals. She brings a wealth of expertise in education counselling, enrolment, and international
                       student guidance, dedicating eight years to counselling students for opportunities in the US and Europe,
                       ensuring they find the best-fit institutions for their academic aspirations.</p>
                       <p>Her prior experience in international finance and hospitality provides a unique perspective, fostering
                       informed decisions. She is committed to using her diverse skill set to facilitate informed educational
                       decisions and support students in achieving their academic and career goals globally.</p>`,
        imgUrl: "diana.png",
        designation: 'Manager - Counsellor &amp; Enrolments',
        experience: "15 Years of Experience"
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
                            <div><span><b>${member.name}</b></span></div>
                            <div><span>${member.designation}</span></div>
                            <div><span>${member.experience}</span></div>
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


// raunak

const professors = [
    {
        id: 1,
        name: "Ms. Shelly Mathur",
        description: ``,
        imgUrl: "Ms. Shelly Mathur.jpg",
        designation: 'Assistant Director',
        passion: 'Sahara Hospitality Limited',
        experience: "22 Years of Experience"

    },
    // {
    //     id: 2,
    //     name: "Sumeet Kumar",
    //     description: ``,
    //     imgUrl: "Sumeet Kumar.jpg",
    //     designation: 'Vice President Hospitality',
    //     passion: 'Aamby Valley City',
    //     experience: "25+ Years of Experience"
    // },
    {
        id: 3,
        name: "Ranjan Ranjani",
        description: ``,
        imgUrl: "Ranjan Ranjani.jpg",
        designation: 'Director Food & Beverage',
        passion: 'Sahara Star',
        experience: "24 Years of Experience"
    },
    {
        id: 4,
        name: "Mohammed Shaikh",
        description: ``,
        imgUrl: "shaikh.jpg",
        designation: 'HR Manager',
        passion: 'Sahara Star',
        experience: "25 Years of Experience"
    },
    {
        id: 5,
        name: "Karishma Raghuvanshi",
        description: ` `,
        imgUrl: "karishma.jpg",
        designation: 'Consultant-HR- Training & Recruitment',
        passion: 'Sahara Star',
        experience: "17 Years of Experience"
    },
    {
        id: 6,
        name: "Deepali Rambade",
        description: ``,
        imgUrl: "deepali.jpg",
        designation: 'Front Office Manager',
        passion: 'Sahara Star',
        experience: "21 Years of Experience"
    },
    {
        id: 7,
        name: "Manpreet Kaur",
        description: ``,
        imgUrl: "Manpreet Kaur.jpg",
        designation: 'Customer Excellence',
        passion: 'Aamby Valley City',
        experience: "20+ Years of Experience"
    }
];

function renderProfessors() {
    const professorsList = document.getElementById('professors');

    professors.forEach(professor => {
        const listItem = document.createElement('li');
        listItem.classList.add('faculty-item');

        listItem.onclick = function () {
            getModalObject(professor, 'new-image');
        };

        const professorContent = `
            <div>
                <span class='img-wrapper'>
                    <img src="./img/new-image/${professor.imgUrl}" class="img-fluid" alt="" />
                </span>
                <div class="designation-name">
                    <div><span><b>${professor.name}</b></span></div>
                    <div><span>${professor.designation}</span></div>
                    <div><span>${professor.passion}</span></div>
                    <div><span>${professor.experience}</span></div>
                    <p>${renderFirst100Characters(professor.description)}</p>                    
                </div>
            </div>                
        `;
        listItem.innerHTML = professorContent;
        if (professorsList) {
            professorsList.appendChild(listItem);
        }
    });
}

renderProfessors();



const professorsChef = [
    {
        id: 1,
        name: "Vishal Singh",
        description: "",
        imgUrl: "vishal-singh(2).jpg",
        designation: 'Head Chef',
        passion: 'Indian Heritage',
        experience: "35 Years of Experience"
    },
    {
        id: 2,
        name: "Vinod Rana",
        description: "",
        imgUrl: "vinod-rana(2).jpg",
        designation: 'Executive Sous-chef',
        passion: 'Indian Breads',
        experience: "35 Years of Experience"
    },
    {
        id: 3,
        name: "Rupesh Khandekar",
        description: "",
        imgUrl: "rupesh-khandekar(2).jpg",
        designation: 'Executive Sous-chef',
        passion: 'Continental Cuisine',
        experience: "24 Years of Experience"
    },
    {
        id: 4,
        name: "Jihad Shami",
        description: "",
        imgUrl: "jihad-shami.jpg",
        designation: 'Chef De Cuisine (Head Chef - Mabruk)',
        passion: 'Lebansese Cuisine',
        experience: "33 Years of Experience"
    },
    {
        id: 5,
        name: "Vikas Rane",
        description: "",
        imgUrl: "vikas-rane(2).jpg",
        designation: 'Chef De Partie',
        passion: 'Oriental Cuisine',
        experience: "18 Years of Experience"
    },
    {
        id: 6,
        name: "Prashant Lad",
        description: "",
        imgUrl: "prashant-lad(2).jpg",
        designation: 'Jr. Sous-chef',
        passion: 'Italian Cuisine',
        experience: "15 Years of Experience"
    },
    {
        id: 7,
        name: "Yashwant Singh",
        description: "",
        imgUrl: "yashwant-singh(2).jpg",
        designation: 'Sous Chef',
        passion: 'Indian Curries',
        experience: "16 Years of Experience"
    }
];

function renderProfessorsChef() {
    const professorsChefList = document.getElementById('professors-chef');

    professorsChef.forEach(professor => {
        const listItem = document.createElement('li');
        listItem.classList.add('faculty-item');

        listItem.onclick = function () {
            getModalObject(professor, 'professos-chef');
        };

        const professorContent = `
            <div>
                <span class='img-wrapper'>
                    <img src="./img/professos-chef/${professor.imgUrl}" class="img-fluid" alt="" />
                </span>
                <div class="designation-name">
                    <div><span><b>${professor.name}</b></span></div>
                    <div><span>${professor.designation}</span></div>
                    <div><span>${professor.passion}</span></div>
                    <div><span>${professor.experience}</span></div>
                    <p>${renderFirst100Characters(professor.description)}</p>
                </div>
            </div>                
        `;
        listItem.innerHTML = professorContent;
        if (professorsChefList) {
            professorsChefList.appendChild(listItem);
        }
    });
}

renderProfessorsChef();



const Mentors = [
    {
        id: 1,
        name: "Bharat Singh Rawat",
        description: ``,
        imgUrl: "bharat-singh.jpg",
        designation: 'Jr Sous-chef',
        passion: 'Cold appetizer',
        experience: "26 Years of Experience"

    },
    {
        id: 2,
        name: "Savar Singh",
        description: ``,
        imgUrl: "savar-singh(2).jpg",
        designation: 'Chef De partie',
        passion: 'Indian Breads',
        experience: "13 Years of Experience"
    },
    {
        id: 3,
        name: "Guddu Singh",
        description: ``,
        imgUrl: "guddu-singh(2).jpg",
        designation: 'Chef De Partie',
        passion: 'Kebabs',
        experience: "12 Years of Experience"
    },
    {
        id: 4,
        name: "Bimal Gurung",
        description: ``,
        imgUrl: "bimal-gurung(2).jpg",
        designation: 'Chef De Parti',
        passion: 'Dim Sum',
        experience: "13 Years of Experience"
    },
    {
        id: 5,
        name: "Lohare Singh",
        description: ``,
        imgUrl: "lohare-singh(2).jpg",
        designation: 'Demi Chef De Partie',
        passion: 'Halwai',
        experience: "16 Years of Experience"
    },
    {
        id: 6,
        name: "Mohammad Aasif",
        description: ``,
        imgUrl: "Mohammad-Aasif(2).jpg",
        designation: 'Demi Chef De Partie',
        passion: 'Patisserie',
        experience: "11 Years of Experience"
    }

];

function renderMentors() {
    const mentorsList = document.getElementById('Mentors');

    Mentors.forEach(mentor => {
        const listItem = document.createElement('li');
        listItem.classList.add('mentor-item');

        listItem.onclick = function () {
            console.log('mentor', mentor.imgUrl);
            getModalObject(mentor, 'mentor');
        };

        const mentorContent = `
            <div>
                <span class='img-wrapper'>
                    <img src="./img/mentor/${mentor.imgUrl}" class="img-fluid" alt="" />
                </span>
                <div class="designation-name">
                    <div><span><b>${mentor.name}</b></span></div>
                    <div><span>${mentor.designation}</span></div>
                    <div><span>${mentor.passion}</span></div>
                    <div><span>${mentor.experience}</span></div>
                    <p>${renderFirst100Characters(mentor.description)}</p>                    
                </div>
            </div>                
        `;
        listItem.innerHTML = mentorContent;
        if (mentorsList) {
            mentorsList.appendChild(listItem);
        }
    });
}

renderMentors();


// raunak

function togglePopContent(event) {
    toggleMore = !toggleMore;
    toggleMore
        ? $('.pop-read-more-btn').text('less...')
        : $('.pop-read-more-btn').text('more...');
    $(event).parents("#modalParagraph").find('.pop-modal-content-box').toggleClass('auto-height');
}

function getModalObject(obj, types) {

    if (!obj || !obj.description || obj.description.trim().length === 0) {
        console.warn('No content available for this modal');
        return;
    }


    if (types === 'advisory') {
        $('#modalImage').attr('src', `./img/advisory/${obj.imgUrl}`);
    } else if (types === 'faculty') {
        $('#modalImage').attr('src', `./img/faculty/${obj.imgUrl}`);
    } else if (types === 'new-image') {
        $('#modalImage').attr('src', `./img/new-image/${obj.imgUrl}`);
    } else if (types === 'professos-chef') {
        $('#modalImage').attr('src', `./img/professos-chef/${obj.imgUrl}`);
    } else if (types === 'mentor') {
        $('#modalImage').attr('src', `./img/mentor/${obj.imgUrl}`);
    }


    $('#modalName').text(obj.name);


    //  document.getElementById('modalName').innerHTML = `<b>${obj.name}</b>`;

    // Log the object for debugging
    // console.clear();
    // console.log('Modal Object:', obj);


    $('#modalParagraph').html(`
        <div class="pop-modal-content-box">${obj.description}</div>
        <span class="pop-read-more-btn" onclick="togglePopContent(this)">more...</span>
    `);


    $('#myModal').modal('show');

    document.getElementById('modalName').innerHTML = `<b>${person.name}</b>`;
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
    // console.log(widthWidthSize);

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
            $this.parent('li').find('ul').slideToggle();
        });
    }

}

mobile();

programmes();


function gotoPage(url) {
    window.location.href = url;
}



// api for brochure
function saveBrochure() {
    let name, email, mobile;

    // Name validation (non-empty)
    if ($("#uname").val().trim() === "") {
        alert("Please Enter Your Name");
        $("#uname").focus();
        return false;
    } else {
        name = $("#uname").val().trim();
    }

    // Email validation (must match a valid email format)
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if ($("#uemail").val().trim() === "") {
        alert("Please Enter Your Email");
        $("#uemail").focus();
        return false;
    } else if (!emailRegex.test($("#uemail").val().trim())) {
        alert("Please Enter a Valid Email Address");
        $("#uemail").focus();
        return false;
    } else {
        email = $("#uemail").val().trim();
    }

    // Mobile validation (only digits, 10-15 characters)
    let mobileRegex = /^[0-9]{10,12}$/;
    if ($("#umobile").val().trim() === "") {
        alert("Please Enter Your Mobile");
        $("#umobile").focus();
        return false;
    } else if (!mobileRegex.test($("#umobile").val().trim())) {
        alert("Please Enter a Valid Mobile Number");
        $("#umobile").focus();
        return false;
    } else {
        mobile = $("#umobile").val().trim();
    }

    $.ajax({
        url: 'https://spak-it.com/api/brochure',
        method: 'POST',
        contentType: "application/json; charset=utf-8",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        data: {
            "type": "CREATE",
            "Name": name,
            "Email": email,
            "Mobile": mobile,
            "CountrtName": "*****",
            "ProgrammeName": "*****",
        },
        success: function (data, textStatus, jqXHR) {
            if (textStatus === 'success') {
                console.log('Success');
                $('.thankyou').removeClass('hide');
                $("#uname").val('');
                $("#uemail").val('');
                $("#umobile").val('');
                $("#uquery").val('');
                $('.thankyou').removeClass('hide');

                setTimeout(function () {
                    $('#saveBtn').text('Submit');
                    $('#saveBtn').removeAttr('disabled', 'disabled');
                }, 2000);

                
                setTimeout(function () {
                    let link = document.createElement('a');
                    link.href = '../img/A-Star-Brochure.pdf'; 
                    link.download = 'A-Star-Brochure.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 1000); 
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
