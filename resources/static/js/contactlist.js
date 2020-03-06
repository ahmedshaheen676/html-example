function Contact(id, name, phone, mail, gender) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.mail = mail;
    this.gender = gender;
}

function add() {
    debugger;
    var contacts = getAll();
    var id = contacts.length + 1;
    var name = $("#name").val();
    var phone = $("#phone").val();
    var mail = $("#mail").val();
    var gender = "";
    if ($("#gender .ui-flipswitch").hasClass("ui-flipswitch-active")) {
        gender = "Male";
    } else {
        gender = "Female";
    }
    if (name.trim( ) !== "" && phone.trim( ) !== "") {
        $("#errorName").text("");
        $("#errorPhone").text("");
        var contactJson = new Contact(id, name, phone, mail, gender);
        contacts.push(contactJson);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    } else {
        $("#errorName").text("please enter this field");
        $("#errorphone").text("please enter this field");
    }

}

function update() {
    var contacts = getAll();
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var gender = document.getElementById("gender").value;
    contacts.forEach((contact) => {
        if (contact.id = id) {
            // replace old one here
            var contactJson = new Contact(id, name, phone, mail, gender);
            contact = contactJson;
        }
    })
    localStorage.setItem("contacts", JSON.stringify(contacts));

}

function del(id) {
    var contacts = getAll();
    contacts.splice(id - 1, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

function getAll() {
    return JSON.parse(localStorage.getItem("contacts") || "[]");
}


function showContactCell() {
    debugger;
    // $("#movie-table")
    var contacts = getAll();
    if (contacts.length > 0) {
        for (var i = 0; i < contacts.length; i++) {

            debugger;
            var contact = contacts[i];
            var imgSrc = "";
            if (contact.gender == "Male") {
                imgSrc = "../../static/images/male.png";
            } else {
                imgSrc = "../../static/images/female.png";
            }
            var cell = "<li  style=' padding:5px ;background: darkseagreen;list-style: none;' ><a href='#thirdPage' id='" + contact.id + "'><div style='display:inline-block;width:10%'><img width='40px' height='40px' src='" + imgSrc + "'/></div><div style='display:inline-block;width:70%'><p style='font-weight:bold;font-size:20px'>" + contact.name + "</p></div>"
                    + "<div style='display:inline-block;width:20%'><a  href='tel:" + contact.phone + "' data-icon='phone' data-role='button' ></a></div></a></li> ";
            $("#contact-List").append(cell);
        }
    }
}
function validateEmail(emailText) {
    debugger;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailText.value.match(mailformat))
    {
        $("#errorMail").text("invalid Email");
    } else {
        $("#errorMail").text("");
    }

}
function validateMobile(phonetext) {
    debugger;
    var phoneno = /^(01){1}\d{9}/;
    if ((!phonetext.value.match(phoneno)))
    {
        $("#errorphone").text("invalid phone Number");
    } else {
        $("#errorphone").text("");
    }

}
function validateName(nametext) {
    debugger;
    var name = /^[A-Za-z]+$/;
    if ((!nametext.value.match(name)))
    {
        $("#errorName").text("invalid name");
    } else {
        $("#errorName").text("");
    }

}

$(document).ready(() => {
    showContactCell();
    $("#add").bind("click", (e) => {

        showContactCell();
    });
    $("#save").bind("click", (e) => {
        debugger;
        add();

    });

    $("li a").bind("click", (e) => {
        var id = e.target.id;
 console.log(id);
        var contacts = getAll();
        var contact;
        var imgSrc;
        contacts.forEach(con => {
            if (id = con.id) {
                contact = con;
            }
        })
        if (contact.gender == "Male") {
            imgSrc = "../../static/images/male.png";
        } else {
            imgSrc = "../../static/images/female.png";
        }
        $("#genderImage").attr("src", imgSrc)
        $("#con-name").text(contact.name)
        $("#delete  span").attr("id",id);
        

    });
      $("#delete").bind("click", (e) => {
        var id =$("#delete span").attr("id");
          del(id);
          showContactCell();
      });
});