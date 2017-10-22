function updateSiteTheme(theme, el) {
    /// <summary>Updates the theme of the website.</summary>
    /// <param name="theme" type="string">The new theme to change to.</param> 
    /// <param name="el" type="element">The theme picker circle that the user clicked on.</param> 

    // Update the active status for the circle that the user selected and
    // remove the active status from the rest of the circles.
    var x = document.getElementsByClassName("theme-picker");
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    el.parentNode.classList.add("active");

    // Load the requested theme and apply to the page.
    switch (theme) {
        case 'grayscale':
            document.getElementById('CssTheme').href = '../Content/Grayscale.min.css';
            break;
        case 'pop':
            document.getElementById('CssTheme').href = '../Content/Pop.min.css';
            break;
        case 'fun':
            document.getElementById('CssTheme').href = '../Content/Fun.min.css';
            break;
        case 'vintage':
            document.getElementById('CssTheme').href = '../Content/Vintage.min.css';
            break;
        case 'neon':
            document.getElementById('CssTheme').href = '../Content/Neon.min.css';
            break;
        case 'retro':
            document.getElementById('CssTheme').href = '../Content/Retro.min.css';
            break;
        default:
            document.getElementById('CssTheme').href = '../Content/Retro.min.css';
            break;
    }

    // Send GA tracking data
    trackEvents('Button click', 'Theme picker. Theme selected ' + theme);
}

/*
GOOGLE ANALYTICS
*********************************/
function trackOutboundLink(action, label) {
    sendGoogleAnalyticsEventData( 'click', 'outbound', action, label );
}

function trackEvents(action, label) {
    sendGoogleAnalyticsEventData( 'click', 'events', action, label );
}

function sendGoogleAnalyticsEventData(eventType, category, action, label) {
    gtag('event', eventType, {
        'event_category': getLowercase( category ),
        'event_action': getLowercase( action ),
        'event_label': getLowercase( label ),
        'transport_type': 'beacon'
        //'event_callback': function () { document.location = url; }
    });
}

/*
DID YOU KNOW SLIDER
*********************************/
var slideIndex = 0;

function currentSlide(n) {
    /// <summary>Set the current index of the slider.</summary>
    /// <param name="n" type="number">The slide number requested.</param> 
    showSlides(slideIndex = n);
    trackEvents('Button click', 'Slider navigation button. Slide number ' + n);
}

function showSlides(n) {
    /// <summary>Show the requested slide from the slider.</summary>
    /// <param name="n" type="number">The slide number requested.</param> 
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Default the slider to the first slide on page load.
currentSlide(1);

/*
MISC
*********************************/
function getLowercase(value) {
    /// <summary>Returns a lower case version of the string supplied.</summary>
    /// <param name="value" type="string">The string that needs to be converted.</param> 
    try {
        return value.toLowerCase();
    }
    catch ( ex ) {
        console.log("Exception at getLowercase() " + ex);
        return value;
    }
}