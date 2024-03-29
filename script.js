var Beilagen = [
    {
        name: "Pommes Frites",
        price: 4.50,
        comments: ["ziemlich waach", "Sallzig und KNusperig gerne Wieder!"],
        imgurl: "./img/perfekte-pommes-frites.jpg"
    },
    {
        name: "Frankfurter",
        price: 5.50,
        comments: ["mjam mjam MJAM!"],
        imgurl: "./img/frankfurter-wuerstel_479.jpg"
    },
    {
        name: "Schinken-Käse-Toast",
        price: 4.50,
        comments: [],
        imgurl: "./img/schinken-kaese-toast-img-5086.jpg"
    },
];
var Hauptspeisen = [
    {
        name: "Kaiserschmarrn",
        price: 9.90,
        comments: [],
        imgurl: "./img/2003-03-072.jpg"
    },
    {
        name: "Schweinsgulasch",
        price: 10.50,
        comments: [],
        imgurl: "./img/schweinsgulasch.jpg"
    },
    {
        name: "Cordon Bleu",
        price: 12.00,
        comments: [],
        imgurl: "./img/cordon-bleu.jpg"
    },
];
var Getraenke = [
    {
        name: "Cola 300ml",
        price: 2.50,
        comments: [],
        imgurl: "./img/Glass_of_Cola.jpg"
    },
    {
        name: "Achterl Rotwein",
        price: 3.50,
        comments: [],
        imgurl: "./img/achterlrot.jpg"
    },
    {
        name: "Achterl Weißwein",
        price: 3.50,
        comments: [],
        imgurl: "./img/download.jpg"
    },
    {
        name: "Bier",
        price: 4.00,
        comments: [],
        imgurl: "./img/bier.jpg"
    },
];
function make_menu(data, title) {
    var menu_domobj = document.createElement("div");
    menu_domobj.classList.add("food-menu-" + title.toLowerCase().replace(/\s+/g, ""));
    var menu_title = document.createElement("h2");
    menu_title.textContent = title;
    var menu_listelmt = document.createElement("ul");
    menu_listelmt.classList.add("food-menu-list", "list-group");
    data.forEach(function (o) { return menu_listelmt.appendChild(make_menu_entry(o)); });
    menu_domobj.appendChild(menu_title);
    menu_domobj.appendChild(menu_listelmt);
    return menu_domobj;
}
function make_menu_entry(_a) {
    var name = _a.name, price = _a.price, comments = _a.comments, imgurl = _a.imgurl;
    var menu_entry_domobj = document.createElement("li");
    menu_entry_domobj.classList.add("food-menu-entry", "list-group-item");
    var name_elmt = document.createElement("h4");
    name_elmt.textContent = name;
    var price_elmt = document.createElement("div");
    price_elmt.textContent = String(price) + "€";
    var cmts_elmt = document.createElement("ul");
    cmts_elmt.classList.add("food-menu-entry-comments", "display-none");
    comments.forEach(function (c) { return cmts_elmt.innerHTML += "<li>" + c + "</li>"; });
    var cmtsbutton_elmt = document.createElement("button");
    cmtsbutton_elmt.textContent = "show comments";
    cmtsbutton_elmt.onclick = function (e) { return cmts_elmt.classList.toggle("display-none"); };
    var addcmt_input_elmt = document.createElement("input");
    var addcmt_button_elmt = document.createElement("button");
    addcmt_button_elmt.textContent = "add comment";
    addcmt_button_elmt.onclick =
        function (e) {
            if (addcmt_input_elmt.value) {
                cmts_elmt.innerHTML += "<li>" + addcmt_input_elmt.value + "</li>";
                addcmt_input_elmt.value = null;
            }
        };
    var img_elmt = document.createElement("img");
    //img_elmt.classList.add("")
    img_elmt.src = imgurl;
    [name_elmt, price_elmt, addcmt_input_elmt, addcmt_button_elmt,
        cmtsbutton_elmt, cmts_elmt, img_elmt].forEach(function (el) { return menu_entry_domobj.appendChild(el); });
    return menu_entry_domobj;
}
