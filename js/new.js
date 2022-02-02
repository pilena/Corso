//Privacy policy 
function privacy(){
    var priv = [
        {
           media: "The geographic area where you use your computer and other mobile devices should be the same one software provider"
        },
        {
           media: "Your full name, username, and email address and other contact details should be provided in the contact forms"
        },
        {
           media: "A unique Corso user ID (an alphanumeric string) which is assigned to you upon registration should always be at front"
        },
        {
            media: "Every system is backuped regularly and it will not fail"
        },
        {
            media: "Your IP Address and, when applicable, timestamp related to your consent and confirmation of consent but please make"
        },
        {
            media: "Other information submitted by you or your organizational representatives via various methods and practiced techniques"
        }
    ];

       var ispis = "<ul class='list-unstyled li-space-lg'>";
        priv.forEach(element => ispis += `<li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">${element.media}</div>
               </li>`);

        ispis += `</ul>`;

    document.getElementById("privacyList").innerHTML = ispis;
}

privacy();

    $(window).on('scroll', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
