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