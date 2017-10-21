function updateSiteTheme(theme, el) {
    var x = document.getElementsByClassName("theme-picker");
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    el.parentNode.classList.add("active");

    switch (theme) {
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
            document.getElementById('CssTheme').href = '../Content/Neon.min.css';
            break;
    }
}

function Slider(element) {
    this.el = document.querySelector(element);
    this.init();
}

Slider.prototype = {
    init: function () {
        this.links = this.el.querySelectorAll("#slider-nav a");
        this.wrapper = this.el.querySelector("#slider-wrapper");
        this.navigate();
    },
    navigate: function () {

        for (var i = 0; i < this.links.length; ++i) {
            var link = this.links[i];
            this.slide(link);
        }
    },

    animate: function (slide) {
        var parent = slide.parentNode;
        //var caption = slide.querySelector(".caption");
        //var captions = parent.querySelectorAll(".caption");
        //for (var k = 0; k < captions.length; ++k) {
        //    var cap = captions[k];
        //    if (cap !== caption) {
        //        cap.classList.remove("visible");
        //    }
        //}
        //caption.classList.add("visible");
    },

    slide: function (element) {
        var self = this;
        element.addEventListener("click", function (e) {
            e.preventDefault();
            var a = this;
            self.setCurrentLink(a);
            var index = parseInt(a.getAttribute("data-slide"), 10) + 1;
            var currentSlide = self.el.querySelector(".slide:nth-child(" + index + ")");

            self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
            //self.animate(currentSlide);

        }, false);
    },
    setCurrentLink: function (link) {
        var parent = link.parentNode;
        var a = parent.querySelectorAll("a");

        link.className = "current";

        for (var j = 0; j < a.length; ++j) {
            var cur = a[j];
            if (cur !== link) {
                cur.className = "";
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    var aSlider = new Slider("#slider");

});