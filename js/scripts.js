
// Function for navbar display 
function navBar(){
    var nav = [{
        href: "#instructor",
        link: "ABOUT"
    }, 
    {
        href: "#description",
        link: "DETAILS"
    }, 
    {
        href: "#cards",
        link: "TAKEAWAYS"
    }, 
     {
        href: "#testimonials",
        link: "TESTIMONIALS"
    }, 
    {
        href: "#contact", 
        link: "REGISTER"
    }];
    var ispis = "<ul class='navbar-nav ml-auto'>";

    nav.forEach(element => ispis += ` 
    <li class="nav-item">
        <a class="nav-link" href="${element.href}">${element.link} <span class="sr-only">(current)</span></a>
     </li>`);

     ispis += "</ul>";

    document.getElementById("navbarsExampleDefault").innerHTML = ispis;
}

// Function for Footer social media display
function footerMedia(){
    var social = [{
        href: "/rss.cml",
        class: "fa fa-rss"
    }, 
    {
        href: "/sitemap.xml",
        class: "fa fa-sitemap"
    },
    {
        href: "https://www.pinterest.com/",
        class: "fab fa-pinterest-p"
    },
    {
        href: "https://instagram.com/",
        class: "fab fa-instagram"
    },
    {
        href: "https://www.linkedin.com/",
        class: "fab fa-linkedin-in"
    },
    {
        href: "https://www.youtube.com/",
        class: "fab fa-youtube"
    }
]

    var ispis = "";
    social.forEach(element => ispis += `
    <a href="${element.href}">
                                    <i class="${element.class}"></i>
                                </a>
    `);

    document.getElementById("social").innerHTML = ispis; 
}

// Function for writing LightBox list 
function lightBoxList(){

    var list = ["Link building framework", "Know your current position", "Partnering with blogs", "Naming your images", "Creating good sitemaps", "Writing for humans"];
    var ispis = "";

    for(let i = 0; i <list.length; i++){
        ispis += `  <li class="media">
                            <i class="fas fa-square"></i><div class="media-body">${list[i]}</div>
                        </li>`
    }

    document.getElementById('LightBoxList').innerHTML = ispis;
}


//Function for Writing Course Description
function CourseFocus(){
    var course = [{
        id: 1,
        title: "Optimizing your site for mobile devices",
        desc: "One of the keys of great SEO is having a mobile friendly website which works smoothly on all devices"
    }, {
        id: 2, 
        title: "Understand how users search",
        desc: "It's not enough anymore to find relevant industry keywords and write huge amounts of content"
    }, {
        id: 3, 
        title: "Write for humans optimize for engines",
        desc: "Write well structured and understandable articles not just a mix of paragraphs that contain keywords"
    }, {
        id: 4, 
        title: "Analyse your existing search traffic",
        desc: "A good action plan comes out of understanding where your current position is and the environment"
    }, {
        id: 5, 
        title: "Keep updated with the latest changes",
        desc: "Google changes it's search indexing algorithm twice a year so it's important to stay updated with news"
    }, {
        id: 6,
        title: "Learn the most important ranking factors",
        desc: "Learn which are the most important search engine ranking factors and optimize your website accordnigly"
    }]; 

    var ispis = "";
        course.forEach(element => ispis += `<li class="media col-lg-4">
                            <i class="bullet">${element.id}</i>
                            <div class="media-body">
                                <h4>${element.title}</h4>
                                <p>${element.desc}</p>
                            </div>
                        </li>`)

    document.getElementById("courseList").innerHTML = ispis;
}

// Function for Card Display
function cardDisplay(){
    var card = [{
        class: "atom",
        title: "Position Analysis",
        desc: "Understand where your website is currently positioned in search engine queries"
    },{
        class: "key",
        title: "Keyword Planning",
        desc: "Find the best relevant keywords that fit your website SEO strategy in the long run"
    }, {
        class: "newspaper",
        title: "Writing Articles",
        desc: "How to plan your content strategy and write articles that are optimized for SEO"
    }, {
        class: "link",
        title: "Gathering Backlinks",
        desc: "Backlinks are vital for SEO and we'll teach you everything there is to know about them"
    }, {
        class: "handshake",
        title: "Build Partnerships",
        desc: "Partnerships will help you establish your website or blog as an authority in your field"
    }, {
        class: "chart-bar",
        title: "Evaluate Actions",
        desc: "Learn how to use the right analytics tools to evaluate your SEO actions and improve them"
    },  ];

        var ispis = "";
        card.forEach(element => ispis += `  <div class="card">
                        <div class="card-image">
                            <i class="fas fa-${element.class}"></i>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">${element.title}</h4>
                            <p>${element.desc}</p>
                        </div>
                    </div>`);

    document.getElementById("cards").innerHTML = ispis;
}

// Function for Featured In Images display
function FeaturedImage(){
    var img = [
        {
            src: "images/customer-logo-1.png",
            alt: "Primester"
        },
        {
            src: "images/customer-logo-2.png",
            alt: "GreenApp"
        },
        {
            src: "images/customer-logo-3.png",
            alt: "Voltmeter"
        },
        {
            src: "images/customer-logo-4.png",
            alt: "Kеyrunner"
        },
        {
            src: "images/customer-logo-5.png",
            alt: "Amplifier"
        },
        {
            src: "images/customer-logo-6.png",
            alt: "Upstart"
        }
    ];

       var ispis = "";
        img.forEach(element => ispis += `<div class="image">
                                        <img class="img-fluid" src="${element.src}" alt="${element.alt}">
                                </div>`);

    document.getElementById("featured-images").innerHTML = ispis;
}

// Image slider
function imageSlider(){
     var test = [
        {
            img: "images/details-slide-1.jpg",
            alt: "slider image 1",
         },
         {
            img: "images/details-slide-2.jpg",
            alt: "slider image 2",
         },
         {
            img: "images/details-slide-3.jpg",
            alt: "slider image 3",
         }
];

    var ispis = "";
    test.forEach(element => ispis += `
                                  <div class="slide">
                            <img class="img-fluid" src="${element.img}" alt="${element.alt}">
                        </div>  
                        `)

    document.getElementById("imageSlider").innerHTML = ispis;
}


// Testimonials function 
function testimonials(){
    var test = [
        {
            img: "images/testimonial-1.jpg",
            alt: "Jude Thorn",
            text: "I took the SEO training course about a year ago and I am very happy. It taught me all the basics of search engine optimization and some tricks.",
            person: "Jude Thorn - Online Marketer"
         },
         {
            img: "images/testimonial-2.jpg",
            alt: "Roy Smith",
            text: "Awesome course for the money. I never thought I could learn so much about search engine optimization in such a short amount of time. Highly recommend.",
            person: "Roy Smith - Developer"
         },
         {
            img: "images/testimonial-3.jpg",
            alt: "Jude Thorn",
            text: "Corso is the best SEO training course in the market. It teaches you all the basics but it also adds value with someadvanced tips & tricks the are great.",
            person: "Martin Singer - Online Marketer"
         },
         {
            img: "images/testimonial-4.jpg",
            alt: "Ronda Louis",
            text: "Learning SEO can actually be fun. I attended Corso SEO training and I had a great time with my peer students and theinstructors. Highly recommended course.",
            person: "Ronda Louis - Business Owner"
         },
];

    var ispis = "";
    test.forEach(element => ispis += `
                                    <div class="swiper-slide">
                                        <div class="image-wrapper">
                                            <img class="img-fluid" src="${element.img}" alt="${element.alt}">
                                        </div> 
                                        <div class="text-wrapper">
                                            <div class="testimonial-text">${element.text}</div>
                                            <div class="testimonial-author">${element.person}</div>
                                        </div> 
                                    </div> 
                        `)

    document.getElementById("testimonial").innerHTML = ispis;
}

// Calling all functions for writing content in DOM
navBar();
footerMedia();
cardDisplay();
CourseFocus();
FeaturedImage();
lightBoxList();
imageSlider();
testimonials();

(function($) {
    
    "use strict"; 

	// navbar scroll collapse
    $(window).on('scroll', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });

    //Timer
    var countDownDate = new Date("Mar 28, 2022 15:37:25").getTime();

    var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = `<span class="counter-number">` + days + `<br><span class="timer-text">Days</span></span><span class="counter-number">` + hours+ `<br><span class="timer-text">Hours</span></span><span class="counter-number">` + minutes + `<br><span class="timer-text">Minutes</span></span><span class="counter-number">` + seconds + `<br><span class="timer-text">Seconds</span></span>`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "EXPIRED";
    }
    }, 1000);

    // Slick - Jquery plugin 
    $('.image-slider').slick({
        autoplay: true,
        arrows: false,
        fade: true, 
        speed: 400
    });

    $('.swiper-wrapper').slick({
         autoplay: true,
         arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });

    // Magnific Popup - Jquery Plugin
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
    

    //Back To Top Button 
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });

})(jQuery);




