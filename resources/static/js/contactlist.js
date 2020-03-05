function Contact(id, name, phone, mail, gender) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.mail = mail;
    this.gender = gender;
}

function add() {
    var contacts = getAll();
    var id = contacts.length + 1;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var gender = document.getElementById("gender").value;

    var contactJson = new Contact(id, name, phone, mail, gender);
    contacts.push(contactJson);
    localStorage.setItem("contacts", JSON.stringify(contacts));
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
    // $("#movie-table")
    var contacts = getAll();
    if (contacts.length > 0) {
        contacts.forEach((contact) => {
            var imgSrc = "";
            if (contact.gender == "male") {
                imgSrc = "male.png";
            } else {
                imgSrc = "female.png";
            }
            var cell = "<tr id='" + contact.id + "'><td><img width='20px' height='20px' src='" + imgSrc + "'/></td><h2>" + contact.name + "</h2><td></td>"
                + "<td><a  href='tel:" + contact.phone + "' data-icon='phone' data-role='button'>" + contact.phone + "</a></td></tr> ";
            $("#movie-table").append(cell);
        });
    }
}

$(document).ready(() => {
    $("#add").bind("click", (e) => {

        showContactCell();
    });
    $("#del").bind("click", (e) => {
        
    })

});