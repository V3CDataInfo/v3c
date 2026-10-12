// custom.js
document.addEventListener('DOMContentLoaded', function() {
// 1. Turnstile Callback (Agar zaroorat hai)

 if (typeof $ !== 'undefined') {

        $(window).on('load', function() {
            $('#enqure-popup #cMessage').html("Send me more details about Uber App Clone..");
        });

    // 2. Slider Initialization
   if ($.fn.slick) {
            $('.user-slider, .driver-slider').slick({
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 600,
                draggable: true,
                infinite: true,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
                responsive: [
                    { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                    { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 } }
                ]
            });
        }

    if ($.fn.validate) {
    $("#uber-clone-enquiry").validate({
        ignore: [],
        errorClass: "enquiry-form-error",
        errorPlacement: function(error, element) {
            // No action taken, effectively hiding the error message
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
        },
        rules: {
            'cf-turnstile-response': {
                required: function() {

                    const token = $('#uber-clone-enquiry').find('[name="cf-turnstile-response"]').val();
                    if (token === "") {

                        $('#recaptcha-msg').show();

                        return true;
                    } else {

                        $('#recaptcha-msg').hide();

                        return false;
                    }
                }
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    function triggerValidation() {
        $('#g-recaptcha-response-error').remove();
    }
}
// End

  const rowOne = [{
            code: "NG",
            name: "Nigeria"
        },
        {
            code: "KE",
            name: "Kenya"
        },
        {
            code: "AE",
            name: "UAE"
        },
        {
            code: "ID",
            name: "Indonesia"
        },
        {
            code: "PH",
            name: "Philippines"
        },
        {
            code: "ZA",
            name: "South Africa"
        },
        {
            code: "BR",
            name: "Brazil"
        },
        {
            code: "MX",
            name: "Mexico"
        },
        {
            code: "SG",
            name: "Singapore"
        },
        {
            code: "MY",
            name: "Malaysia"
        },
        {
            code: "VN",
            name: "Vietnam"
        },
        {
            code: "TH",
            name: "Thailand"
        },
        {
            code: "JP",
            name: "Japan"
        },
        {
            code: "KR",
            name: "South Korea"
        },
    ];

    const rowTwo = [{
            code: "US",
            name: "United States"
        },
        {
            code: "GB",
            name: "United Kingdom"
        },
        {
            code: "CA",
            name: "Canada"
        },
        {
            code: "AU",
            name: "Australia"
        },
        {
            code: "GH",
            name: "Ghana"
        },
        {
            code: "EG",
            name: "Egypt"
        },
        {
            code: "DE",
            name: "Germany"
        },
        {
            code: "FR",
            name: "France"
        },
        {
            code: "ES",
            name: "Spain"
        },
        {
            code: "IT",
            name: "Italy"
        },
        {
            code: "NL",
            name: "Netherlands"
        },
        {
            code: "SE",
            name: "Sweden"
        },
        {
            code: "CH",
            name: "Switzerland"
        },
        {
            code: "NZ",
            name: "New Zealand"
        },
    ];

    const FLAGS = {
        NG: "linear-gradient(to right, #008751 0 33%, #ffffff 33% 66%, #008751 66% 100%)",
        KE: "linear-gradient(to bottom, #000000 0 33%, #BB0000 33% 66%, #006600 66% 100%)",
        AE: "linear-gradient(to right, #FF0000 0 20%, transparent 20% 100%), linear-gradient(to bottom, #00732F 0 33%, #ffffff 33% 66%, #000000 66% 100%)",
        ID: "linear-gradient(to bottom, #CE1126 0 50%, #ffffff 50% 100%)",
        PH: "linear-gradient(to bottom, #0038A8 0 50%, #CE1126 50% 100%)",
        ZA: "linear-gradient(to bottom, #DE3831 0 20%, #002395 20% 40%, #007A4D 40% 60%, #FFB612 60% 80%, #000000 80% 100%)",
        BR: "radial-gradient(circle at 50% 50%, #FFDF00 0 34%, transparent 35%), linear-gradient(#009739, #009739)",
        MX: "linear-gradient(to right, #006847 0 33%, #ffffff 33% 66%, #CE1126 66% 100%)",
        SG: "linear-gradient(to bottom, #EF3340 0 50%, #ffffff 50% 100%)",
        MY: "repeating-linear-gradient(to bottom, #CC0001 0 12%, #ffffff 12% 24%)",
        VN: "radial-gradient(circle at 50% 50%, #FFCD00 0 18%, transparent 19%), linear-gradient(#DA251D, #DA251D)",
        TH: "linear-gradient(to bottom, #A51931 0 17%, #ffffff 17% 33%, #2D2A4A 33% 67%, #ffffff 67% 83%, #A51931 83% 100%)",
        JP: "radial-gradient(circle at 50% 50%, #BC002D 0 32%, transparent 33%), linear-gradient(#ffffff, #ffffff)",
        KR: "linear-gradient(135deg, #C60C30 50%, transparent 50%), radial-gradient(circle at 50% 50%, #003478 0 20%, transparent 21%), linear-gradient(#ffffff, #ffffff)",
        US: "linear-gradient(#3C3B6E, #3C3B6E) top left / 45% 45% no-repeat, linear-gradient(to bottom, #B22234 0 10%, #ffffff 10% 20%, #B22234 20% 30%, #ffffff 30% 40%, #B22234 40% 50%, #ffffff 50% 60%, #B22234 60% 70%, #ffffff 70% 80%, #B22234 80% 90%, #ffffff 90% 100%)",
        GB: "linear-gradient(45deg, transparent 46%, #ffffff 46% 54%, transparent 54%), linear-gradient(-45deg, transparent 46%, #ffffff 46% 54%, transparent 54%), linear-gradient(to right, transparent 42%, #C8102E 42% 58%, transparent 58%), linear-gradient(to bottom, transparent 42%, #C8102E 42% 58%, transparent 58%), linear-gradient(#012169, #012169)",
        CA: "linear-gradient(to right, #FF0000 0 25%, #ffffff 25% 75%, #FF0000 75% 100%)",
        AU: "radial-gradient(circle at 30% 30%, #fff 0 8%, transparent 9%), radial-gradient(circle at 70% 60%, #fff 0 6%, transparent 7%), linear-gradient(#00247D, #00247D)",
        GH: "radial-gradient(circle at 50% 50%, #000 0 10%, transparent 11%), linear-gradient(to bottom, #CE1126 0 33%, #FCD116 33% 66%, #006B3F 66% 100%)",
        PK: "linear-gradient(to right, #ffffff 0 25%, #01411C 25% 100%)",
        EG: "linear-gradient(to bottom, #CE1126 0 33%, #ffffff 33% 66%, #000000 66% 100%)",
        DE: "linear-gradient(to bottom, #000000 0 33%, #DD0000 33% 66%, #FFCE00 66% 100%)",
        FR: "linear-gradient(to right, #0055A4 0 33%, #ffffff 33% 66%, #EF4135 66% 100%)",
        ES: "linear-gradient(to bottom, #AA151B 0 25%, #F1BF00 25% 75%, #AA151B 75% 100%)",
        IT: "linear-gradient(to right, #009246 0 33%, #ffffff 33% 66%, #CE2B37 66% 100%)",
        NL: "linear-gradient(to bottom, #AE1C28 0 33%, #ffffff 33% 66%, #21468B 66% 100%)",
        SE: "linear-gradient(to bottom, transparent 42%, #FECC00 42% 58%, transparent 58%), linear-gradient(to right, transparent 30%, #FECC00 30% 46%, transparent 46%), linear-gradient(#006AA7, #006AA7)",
        CH: "linear-gradient(to bottom, transparent 38%, #ffffff 38% 62%, transparent 62%), linear-gradient(to right, transparent 38%, #ffffff 38% 62%, transparent 62%), linear-gradient(#FF0000, #FF0000)",
        NZ: "radial-gradient(circle at 35% 30%, #fff 0 7%, transparent 8%), radial-gradient(circle at 65% 55%, #fff 0 6%, transparent 7%), radial-gradient(circle at 45% 72%, #fff 0 5%, transparent 6%), linear-gradient(#00247D, #00247D)",
    };

    function buildItem(country) {
        return `
      <span class="item">
        <span class="item-flag" style="background:${FLAGS[country.code]}"></span>
        <span class="item-name">${country.name}</span>
      </span>
    `;
    }

    function fillTrack(id, list) {
        const el = document.getElementById(id);
        if (!el) return;
        const html = list.map(buildItem).join("");
        el.innerHTML = html + html;
    }

    fillTrack("track-1", rowOne);
    fillTrack("track-2", rowTwo);

// End
// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');

if (scrollBtn) {
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let ticking = false;
    window.addEventListener('resize', () => {
        docHeight = document.documentElement.scrollHeight - window.innerHeight;
    });

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const progress = docHeight > 0 ? scrollTop / docHeight : 0;
                const circle = scrollBtn.querySelector('circle');

                if (circle) {
                    const dashoffset = 138 - (progress * 138);
                    circle.style.strokeDashoffset = dashoffset;
                }

                if (scrollTop > 300) {
                    scrollBtn.classList.add('show');
                } else {
                    scrollBtn.classList.remove('show');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// End

$(document).on("countryDetected", function(e, country, countryCode) {
        setDefaultCountry('main_cLocation', country, countryCode);
        setDefaultCountry('popup_main_cLocation', country, countryCode);

        $('.country_phone_num').val(countryCode.replace(/\+/g, '')).each(function() {
                updateWidth(this);
        });
    });

    function updateWidth(input) {
        $(input).css('width', ($(input).val().length + 2) + 'ch');
    }

    $('.country_phone_num').each(function() {
        updateWidth(this);
    });

    $(document).on('input', '.country_phone_num', function() {
        updateWidth(this);
    });

}
});
