/*
THEME PICKER
*********************************/
function updateSiteTheme( theme, el ) {
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
    try {        
        document.getElementById('CssTheme').href = '../Content/' + theme + '.min.css';
    } catch( err ) {
        document.getElementById('CssTheme').href = '../Content/Retro.min.css';
        trackExceptions( "Error while loading theme css. " + err.message );
        console.log( "Exception at updateSiteTheme() " + err.message );
    }   

    // Send GA tracking data
    trackEvents('Theme button click', 'Theme picker. Theme selected ' + theme);
}

/*
GOOGLE ANALYTICS
*********************************/
function trackOutboundLink( action, label ) {
    /// <summary>Method to send Google Analytics outbound tracking data.</summary>
    /// <param name="action" type="string">The action that caused this event to trigger.</param> 
    /// <param name="label" type="string">The outbound link details.</param> 
    sendGoogleAnalyticsEventData( 'click', 'outbound', action, label );
}

function trackEvents( action, label ) {
    /// <summary>Method to send Google Analytics interaction events data.</summary>
    /// <param name="action" type="string">The action that caused this event to trigger.</param> 
    /// <param name="label" type="string">The details of the interaction.</param> 
    sendGoogleAnalyticsEventData( 'click', 'events', action, label );
}

function trackExceptions( error ) {
    /// <summary>Method to send Google Analytics exception data.</summary>
    /// <param name="error" type="string">The exception message that has been caught.</param> 
    gtag('event', 'exception', {
        'description': error,
        'fatal': false
    });
}

function sendGoogleAnalyticsEventData( eventType, category, action, label ) {
    /// <summary>Base method to send Google Analytics event data.</summary>
    /// <param name="eventType" type="string">The type of event.</param> 
    /// <param name="category" type="string">A custom message for the category of this event.</param> 
    /// <param name="action" type="string">A string for the action of this event.</param>
    /// <param name="label" type="string">A string for the label value of this event.</param> 
    gtag('event', eventType, {
        'event_category': getLowercase( category ),
        'event_action': getLowercase( action ),
        'event_label': getLowercase( label ),
        'transport_type': 'beacon'
    });
}

/*
DID YOU KNOW SLIDER
*********************************/
var slideIndex = 0;

function currentSlide( n ) {
    /// <summary>Set the current index of the slider.</summary>
    /// <param name="n" type="number">The slide number requested.</param> 
    showSlides(slideIndex = n);
    trackEvents('Slider nav button click', 'Slider navigation button. Slide number ' + n);
}

function showSlides( n ) {
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
showSlides( slideIndex = 1 );

/*
MISC
*********************************/
function getLowercase( value ) {
    /// <summary>Returns a lower case version of the string supplied.</summary>
    /// <param name="value" type="string">The string that needs to be converted.</param> 
    try {
        return value.toLowerCase();
    }
    catch (ex) {
        trackExceptions( "Error while converting " + value + " to lowercase. " + ex.message );
        console.log("Exception at getLowercase() " + ex.message);
        return value;
    }
}