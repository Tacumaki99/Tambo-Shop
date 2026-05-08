//navigation
const nav = [
  {
    name: "Home",
    href: "index.html"
  },
  {
    name: "Products",
    href: "#products"
  },
  {
    name: "Services",
    href: "#services"
  },
  {
    name: "Contact",
    href: "contact.html"
  },
  {
    name: "Author",
    href: "author.html"
  },
  {
    name: "Project",
    href: "chocolateFactory.zip"
  }
]

const navigation = document.getElementById("navigation");

let navigation_html = "";

nav.forEach(nav_item => {
  navigation_html += `<li class="nav-item">
    <a class="nav-link" href="${nav_item.href}">${nav_item.name}</a>
            </li>`;
});

navigation.innerHTML = navigation_html;

function myFunction() {
  var x = document.getElementById("mainNav");
  if (x.classList.contains('myLinks')) {
    x.classList.remove('myLinks')
  } else {
    x.classList.add('myLinks')
  }
}


//products

const products = [
  {
    image: "Camera.jpg",
    name: "Chocolate Camera",
    price: 19.99,
    description: "A delicious chocolate replica of a classic camera."
  },
  {
    image: "Viola.png",
    name: "Chocolate viola",
    price: 29.99,
    description: "Looks like a phone, tastes like chocolate."
  },
  {
    image: "Pistol.jpg",
    name: "Chocolate Pistol",
    price: 39.99,
    description: "Luxury design, sweet flavor."
  },
  {
    image: "AroundA.jpg",
    name: "Chocolate @",
    price: 19.99,
    description: "A delicious chocolate replica of a monkey A."
  },
  {
    image: "Horse.jpg",
    name: "Chocolate Horseshoe",
    price: 29.99,
    description: "Looks like a horseshoe, tastes like chocolate."
  },
  {
    image: "Lighter.jpg",
    name: "Chocolate Lighter",
    price: 39.99,
    description: "A delicious chocolate replica of a lighter."
  }
];


const holder = document.getElementById("product-holder");

let product_html = "";

products.forEach(product => {
  product_html += `
    <div class="product-card">
      <img src="assets/images/${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">$${product.price}</p>
      <button>Add to Cart</button>
    </div>
  `;
});

holder.innerHTML = product_html;

//slider

//services-list
let services = [
  {
    index:0,
    name:'Chocolate Workshops',
    description: 'Hands-on chocolate making with expert chocolatiers.',
    img: 'workshop.gif'
  },
  {
    index:1,
    name:'Custom Chocolate',
    description: 'Personalized chocolate creations for any occasion.',
    img: 'custom.gif'
  },
  {
    index:2,
    name:'Factory Tours',
    description: 'Discover how fine chocolate is crafted.',
    img: 'tour.gif'
  },
  {
    index:3,
    name:'Catering',
    description: 'Delight your guests with handcrafted chocolate experiences tailored for your event.',
    img: 'catering.gif'
  }
]

const services_list = document.getElementById("services-list");

let service_list_html = ''

services.forEach(service => {
  service_list_html += `
    <li data-index="${service.index}">${service.name}</li>
  `;
});

services_list.innerHTML = service_list_html;

const services_track = document.getElementById("services-track");

let services_track_html = ''

services.forEach(service => {
  services_track_html += `
                  <div class="service-slide slide-${service.index}">
                    <div class="service-content">
                      <p>${service.description}</p>
                    </div>
                  </div>
  `;
});

services_track.innerHTML = services_track_html;


$(document).ready(function () {
    let index = 0;
    const slides = $('.service-slide');
    const total = slides.length;

    const dotsContainer = $('.service-dots');
    const serviceItems = $('#services-list li');

    // Create dots
    slides.each(function (i) {
        dotsContainer.append(`<span class="service-dot" data-index="${i}"></span>`);
    });

    const dots = $('.service-dot');

    function updateSlider() {
        $('#services-track').css(
            'transform',
            `translateX(-${index * 100}%)`
        );

        // Update dots
        dots.removeClass('active');
        dots.eq(index).addClass('active');

        // Update services list
        serviceItems.removeClass('active');
        serviceItems.eq(index).addClass('active');
    }

    // Initial state
    updateSlider();

    $('.service-btn.next').click(function () {
        index = (index + 1) % total;
        updateSlider();
    });

    $('.service-btn.prev').click(function () {
        index = (index - 1 + total) % total;
        updateSlider();
    });

    dots.click(function () {
        index = $(this).data('index');
        updateSlider();
    });

    serviceItems.click(function () {
        index = $(this).data('index');
        updateSlider();
    });
});


//form


// Helper function to create elements with attributes
function createEl(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);

    Object.entries(attrs).forEach(([key, value]) => {
        if (key === "class") el.className = value;
        else if (key === "for") el.htmlFor = value;
        else el.setAttribute(key, value);
    });

    children.forEach(child => {
        if (typeof child === "string") {
            el.appendChild(document.createTextNode(child));
        } else {
            el.appendChild(child);
        }
    });

    return el;
}

// Create form
const form = createEl("form", {
    action: "#",
    method: "post",
    class: "signup-form"
});

// Create form row
const formRow = createEl("div", { class: "form-row" });

// Helper for input groups
function createInputGroup(labelText, inputAttrs) {
    const label = createEl("label", { for: inputAttrs.id }, [labelText]);
    const input = createEl("input", inputAttrs);
    const error = createEl("span", { class: "input-error" });

    return createEl("div", { class: "form-group" }, [
        label,
        input,
        error
    ]);
}

// Text inputs
formRow.appendChild(createInputGroup("First Name", {
    type: "text",
    id: "first-name",
    name: "first_name",
    required: true
}));

formRow.appendChild(createInputGroup("Last Name", {
    type: "text",
    id: "last-name",
    name: "last_name",
    required: true
}));

formRow.appendChild(createInputGroup("E-Mail", {
    type: "email",
    id: "email",
    name: "email",
    required: true
}));

formRow.appendChild(createInputGroup("Phone", {
    type: "text",
    id: "phone",
    name: "phone",
    required: true
}));

// Event select
const eventLabel = createEl("label", { for: "event" }, ["Event"]);
const eventSelect = createEl("select", {
    id: "event",
    name: "event",
    required: true
});

[
    { value: "1", text: "Select an event" },
    { value: "workshop", text: "Chocolate Workshop" },
    { value: "tour", text: "Factory Tour" },
    { value: "corporate", text: "Catering" },
    { value: "custom", text: "Custom Experience" }
].forEach(opt =>
    eventSelect.appendChild(createEl("option", { value: opt.value }, [opt.text]))
);

formRow.appendChild(
    createEl("div", { class: "form-group" }, [
        eventLabel,
        eventSelect,
        createEl("span", { class: "input-error" })
    ])
);

// Number of people
formRow.appendChild(createInputGroup("Number of People", {
    type: "number",
    id: "people",
    name: "people",
    min: "1",
    max: "20",
    required: true
}));

// Date
formRow.appendChild(createInputGroup("Preferred Date", {
    type: "date",
    id: "date",
    name: "date",
    required: true
}));

// Form error + button

formRow.appendChild(createEl("button", {
    type: "submit",
    class: "button",
    disabled: true
}, ["Reserve Now"]));

// Assemble form
form.appendChild(formRow);

// Append to page


var contact_section = document.getElementById('contact');
contact_section.appendChild(form)
console.log('contact_section')


$(document).ready(function () {

    const form = $('.signup-form');
    const submitBtn = form.find('button[type="submit"]');

    
    const nameRegex  = /^[A-Za-zÀ-ž\s'-]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^06[0-9+\s()-]{7,}$/;

    

    function validateEvent(field){

        const val = field.val();
        const errorSpan = field.siblings('.input-error');
        console.log(val);
        if (val === "1") {
        errorSpan.text('Please select event.');
        return false;
        }
        errorSpan.text('');
        return true;
    }

    function validateField(field, regex, message) {
        const val = field.val().trim();
        const errorSpan = field.siblings('.input-error');

        if (!val || (regex && !regex.test(val))) {
            errorSpan.text(message);
            return false;
        } else {
            errorSpan.text('');
            return true;
        }
    }

    function validateDate(field) {
    const val = field.val();
    const errorSpan = field.siblings('.input-error');

    if (!val) {
        errorSpan.text('Please select a date.');
        return false;
    }

    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    if (selectedDate < today) {
        errorSpan.text('Date must be in the future.');
        return false;
    }

    errorSpan.text('');
    return true;
}

    function validateForm() {
        let valid = true;

        valid &= validateField($('#first-name'), nameRegex, 'Please enter a valid first name.');
        valid &= validateField($('#last-name'), nameRegex, 'Please enter a valid last name.');
        valid &= validateField($('#email'), emailRegex, 'Please enter a valid email address.');
        valid &= validateField($('#phone'), phoneRegex, 'Please enter a valid phone number.');
        valid &= validateField($('#people'), /^[1-9]\d*$/, 'Enter at least 1 person.');
        valid &= validateDate($('#date'));
        valid &= validateEvent($('#event'));

       
        submitBtn.prop('disabled', !valid);

        return valid;
    }

    
    form.find('input, select').on('input change', function () {
        validateForm();
    });

   
    //validateForm();

    
    form.on('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {
        // Show popup
        $('#success-popup').addClass('active');

        // Reset form
        this.reset();

        // Disable submit again
        submitBtn.prop('disabled', true);

        // Clear error messages
        $('.input-error').text('');
    }
});

$('#close-popup').on('click', function () {
    $('#success-popup').removeClass('active');
});

$('#success-popup').on('click', function (e) {
    if (e.target === this) {
        $(this).removeClass('active');
    }
});

});
