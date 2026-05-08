//navigation
const nav = [
  {
    name: "Home",
    href: "index.html"
  },
  {
    name: "Products",
    href: "products.html"
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
/*



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
*/

function fillerText(image, description){
    let html=`<section class="author-page py-5">

        <div class="container">

            <div class="row align-items-center min-vh-100">

                <div class="col-lg-6 mb-4 mb-lg-0">

                    <img src="assets/images/author.jpg"
                         alt="Author Tamara Pavlović"
                         class="img-fluid rounded shadow-lg">

                </div>

                <div class="col-lg-6 text-center text-lg-start">

                    <h1 class="display-3 mb-4">
                        Tamara Pavlović
                    </h1>

                    <p class="lead">
                        Hey! My name is Tamara. I am from Belgrade.
                        I'm currently attending the College of Information
                        and Communication Technologies.
                    </p>

                    <p class="lead">
                        Before college I finished Zemunska Grammar School
                        and Music School "Stanković".
                    </p>

                    <p class="lead">
                        In my spare time I play the trumpet
                        and practice karate.
                    </p>

                </div>

            </div>

        </div>

    </section>`


    return html
    
    
}
