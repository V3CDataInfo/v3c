$(document).ready(function(){
    var taxi_tab = [
        '<strong class="heading">Your Customers Can Book 52+ Services Using SuperX SP App <a href="https://www.youtube.com/embed/Ug81eWi_2WI?autoplay=1&amp;loop=1&amp;controls=1&amp;rel=0&amp;showinfo=1&amp;modestbranding=1" class="video-btn _VIDEO_">View Video</a></strong>',
        '<strong class="heading">Need professional advice right this second? Just video call! <a href="https://www.youtube.com/embed/QWQGekI82TU?autoplay=1&amp;loop=1&amp;controls=1&amp;rel=0&amp;showinfo=1&amp;modestbranding=1" class="video-btn _VIDEO_">View Video</a></strong>',
        '<strong class="heading">Your Customers Can Now Virtually Negotiate Service Charges With Handymen! <a href="https://www.youtube.com/embed/3pkbz0P8tnY?autoplay=1&amp;loop=1&amp;controls=1&amp;rel=0&amp;showinfo=1&amp;modestbranding=1" class="video-btn _VIDEO_">View Video</a></strong>'
    ]
    $( ".service-provider-icon-row" ).each(function( index ) {
        $(this).find(".components-text").html(taxi_tab[index])
    });

    var servicedata_videoconsult = [
        '<b><img src="images/uber-for-x-product/service-provider/services/7.svg" alt="Doctors On Demand" title="Doctors On Demand" ></b><strong>Consult Doctor on Video Call</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/nurse.svg" alt="Doctor App" title="Doctor App"></b><strong>Consult Nurse on Video Call</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/32.svg" alt="Tutor On Demand" title="Tutor On Demand App"></b><strong>Hire and Learn from Tutor on Video Call</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/18.svg" alt="Lawyer On Demand" title="Lawyer On Demand App"></b><strong>Consult Lawyer on Video Call</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/astro.svg" alt="Astrologer On Demand" title="Astrologer On Demand App"></b><strong>Consult Astrologer on Video Call</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/yoga.svg" alt="Personal Yoga Classes" title="Personal Yoga Classes"></b><strong>Yoga Training on Video Call</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/12.svg" alt="Personal Fitness Consulting" title="Personal Fitness Consulting" ></b><strong>Get Fitness Training on Video Call</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/more-icon.svg" alt="Language Tutor" title="Language Tutor"></b><strong>As App Owner, you can add more Video Consulting Services from Back End in this section.</strong>'
    ]
    $( "#video-consultation ul li" ).each(function( index ) {
        $(this).find(".single-service-inner").html(servicedata_videoconsult[index])
    });

    var servicedata_bidding = [
        '<b><img src="images/uber-for-x-product/service-provider/services/4.svg" alt="Carpenter App" title="Carpenter App"></b><strong>Carpenter</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/10.svg" alt="Electrician App" title="Electrician App"></b><strong>Electrician</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/25.svg" alt="Plumber App" title="Plumber App"></b><strong>Plumber</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/15.svg" alt="Painters " title="Painters "> </b><strong>Painters</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/handyman.svg" alt="Handyman" title="Handyman" /></b><strong>Handyman</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/home-cleaning-icon.svg" alt="Home Cleaning App" title="Home Cleaning App"></b><strong>Home Cleaning</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/more-icon.svg" alt="Use some generic" title="Home Cleaning App"></b><strong>As App Owner, you can add more Services from Back End in this section where User can post Tasks and Service Providers places Bids.</strong>'
    ]
    $( "#bid-services ul li" ).each(function( index ) {
        $(this).find(".single-service-inner").html(servicedata_bidding[index])
    });

    var servicedata_ondemand = [
        '<b><img src="images/uber-for-x-product/service-provider/services/2.svg" alt="Beauty Service App" title="Beauty Service App"></b><strong>Beautician On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/21.svg" alt="Massage App" title="Massage App"></b><strong>Massage On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/3.svg" alt="Car Wash App" title="Car Wash App"></b><strong>Car Wash On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/9.svg" alt="Dog Walking App" title="Dog Walking App"></b><strong>Dog Walking On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/photographer.svg" alt="Photographer" title="Photographer" /></b><strong>Photographer On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/30.svg" alt="Tow Truck App" title="Tow Truck App"></b><strong>Tow Truck On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/1.svg" alt="Babysitting App" title="Babysitting App"></b><strong>Baby Sitting On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/20.svg" alt="Maids App" title="Maids App"></b><strong>Maids On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/23.svg" alt="Pest Control App" title="Pest Control App"></b><strong>Pest Control On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/24.svg" alt="Physiotheraphy App" title="Physiotheraphy App"></b><strong>Physiotheraphy On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/8.svg" alt="Dog Grooming App" title="Dog Grooming App"></b><strong>Dog Grooming On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/28.svg" alt="Snow Plows App" title="Snow Plows App"></b><strong>Snow Plows On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/barber.svg" alt="Barber App" title="Barber App"></b><strong>Workers On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/6.svg" alt="DJ App" title="DJ App"></b><strong>DJ On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/19.svg" alt="Lock smith app" title="Lock smith app"></b><strong>Lock Smith On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/31.svg" alt="Travel Agent App" title="Travel Agent App"></b><strong>Travel Agent On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/29.svg" alt="Tour Guide App" title="Tour Guide App"></b><strong>Tour Guide On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/insurance.svg" alt="Insurance On Demand App" title="Insurance On Demand App"></b><strong>Insurance On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/27.svg" alt="Security Guard App" title="Security Guard App"></b><strong>Security Guard On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/17.svg" alt="Lawn Moving App" title="Lawn Moving Ap"></b><strong>Lawn Mowing On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/barber.svg" alt="Barber App" title="Barber App"></b><strong>Barber On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/beachbody.svg" alt="Beachbody On Demand" title="Beachbody On Demand" /></b><strong>Beachbody On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/car-repair.svg" alt="Car repair App" title="Car repair App"></b><strong>Car repair On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/carpet.svg" alt="Carpet Repairer App" title="Carpet Repairer App"></b><strong>Carpet Repair On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/tools.svg" alt="Computer Repairer App" title="Computer Repairer App"></b><strong>Computer Repair On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/5.svg" alt="Cuddling App" title="Cuddling App"></b><strong>Cuddling On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/firefighter.svg" alt="Fire Fighters App" title="Fire Fighters App"></b><strong>Fire Fighters On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/worker.svg" alt="Helpers App" title="Helpers App"></b><strong>Helpers On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/interior-design.svg" alt="Interior Design" title="Interior Design"></b><strong>Interior Design On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/lawn-care.svg" alt="Lawn Care" title="Lawn Care"></b><strong>Lawn Care On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/mobile-app.svg" alt="Mobile Technician App" title="Mobile Technician App"></b><strong>Mobile Technician On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/psychologist.svg" alt="psychologist" title="psychologist"></b><strong>Psychologist On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/road-assist.svg" alt="Road Assistance" title="Road Assistance" /></b><strong>Road Assistance On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/sofa.svg" alt="Sofa Repair" title="Sofa Repair"></b><strong>Sofa Repair On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/spa.svg" alt="Spa" title="Spa"></b><strong>Spa On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/translator.svg" alt="Translator" title="Translator"></b><strong>Translator On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/tv-repair.svg" alt="TV Repair" title="TV Repair"></b><strong>Tv Repairer On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/26.svg" alt="Real Estate Agent App" title="Real Estate Agent App"></b><strong>Real Estate Agent On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/idea.svg" alt="Mechanic App" title="Mechanic App"></b><strong>Mechanic On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/ac-repair.svg" alt="AC Repair" title="AC Repair" /></b><strong>AC Repair On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/gardener-icon.svg" alt="Gardener on Demand" title="Gardener on Demand" /></b><strong>Gardener on Demand </strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/7.svg" alt="Doctor App" title="Doctor App"></b><strong>Doctor On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/nurse.svg" alt="Nurse App" title="Nurse App"></b><strong>Nurse On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/sanitizer.svg" alt="Sanitization Services" title="Sanitization Services"></b><strong>Sanitization On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/disinfectant.svg" alt="Disinfecting Services" title="Disinfecting Services"></b><strong>Disinfecting On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/34.svg" alt="Vet App" title="Vet App"></b><strong>Vet On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/buffet.svg" alt="Catering App" title="Catering App"></b><strong>Catering On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/hotel.svg" alt="Office Cleaning App" title="Office Cleaning App"></b><strong>Office Cleaning</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/mop.svg" alt="Party Cleaning App" title="Party Cleaning App"></b><strong>Party Cleaning</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/language-tutor.svg" alt="Language Tutor" title="Language Tutor"></b><strong>Language Tutor On Demand</strong>',
        '<b><img src="images/uber-for-x-product/service-provider/services/more-icon.svg" alt="Language Tutor" title="Language Tutor"></b><strong>You can add more Services from the Back End in this section, where the User is charged based on Hourly Rates or Fixed Costs.</strong>'
    ]
    $( "#on-demand-services ul li" ).each(function( index ) {
        $(this).find(".single-service-inner").html(servicedata_ondemand[index])
    });

    if($("._VIDEO_,.helpvideos ul li a,.client-img-hold").length > 0){
        $("._VIDEO_,.helpvideos ul li a,.client-img-hold").fancybox({
          'type':'iframe',
          'transitionIn'  : 'none',
          'transitionOut' : 'none',
          'width': window.innerWidth > 767 ? 900:450,
          'height': window.innerWidth > 767 ? 514:274,
            helpers: {
              overlay: {
                locked: false
              }
            }
        });
      }
})