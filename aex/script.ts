const Beilagen: Array<Object> = [
  {
    name: "Pommes Frites",
    price: 4.50,
    comments: ["ziemlich waach", "Sallzig und KNusperig gerne Wieder!"]
  },
  {
    name: "Frankfurter",
    price: 5.50,
    comments: ["mjam mjam MJAM!"]
  },
  {
    name: "Schinken-Käse-Toast",
    price: 4.50,
    comments: []
  },
]

const Hauptspeisen: Array<Object> = [
  {
    name: "Kaiserschmarrn",
    price: 9.90,
    comments: []
  },
  {
    name: "Schweinsgulasch",
    price: 10.50,
    comments: []
  },
  {
    name: "Cordon Bleu",
    price: 12.00,
    comments: []
  },
]

const Getraenke: Array<Object> = [
  {
    name: "Cola 300ml",
    price: 2.50,
    comments: []
  },
  {
    name: "Achterl Rotwein",
    price: 3.50,
    comments: []
  },
  {
    name: "Achterl Weißwein",
    price: 3.50,
    comments: []
  },
  {
    name: "Bier",
    price: 4.00,
    comments: []
  },
]

function make_menu(data: [], title: string) {
  let menu_domobj: HTMLElement = document.createElement("div")
  menu_domobj.classList.add(`food-menu-${title.toLowerCase().replace(/\s+/g,"")}`)

  let menu_title: HTMLElement = document.createElement("h2")
  menu_title.textContent = title

  let menu_listelmt: HTMLElement = document.createElement("ul")
  menu_listelmt.classList.add("food-menu-list")
  data.forEach(o => menu_listelmt.appendChild(make_menu_entry(o)))

  menu_domobj.appendChild(menu_title)
  menu_domobj.appendChild(menu_listelmt)
  return menu_domobj
}

function make_menu_entry({name, price, comments}:
                         {name: string, price: number, comments: Array<string>}) {
  let menu_entry_domobj = document.createElement("li")
  menu_entry_domobj.classList.add("food-menu-entry")

  let name_elmt: HTMLElement = document.createElement("h4")
  name_elmt.textContent = name

  let price_elmt: HTMLElement = document.createElement("div")
  price_elmt.textContent = String(price)

  let cmts_elmt: HTMLElement = document.createElement("ul")
  cmts_elmt.classList.add("food-menu-entry-comments", "display-none")
  comments.forEach(c => cmts_elmt.innerHTML += `<li>${c}</li>`)

  let cmtsbutton_elmt: HTMLElement = document.createElement("button")
  cmtsbutton_elmt.textContent = "show comments"
  cmtsbutton_elmt.onclick = (e) => cmts_elmt.classList.toggle("display-none")

  let addcmt_input_elmt: HTMLInputElement = document.createElement("input")
  let addcmt_button_elmt: HTMLElement = document.createElement("button")
  addcmt_button_elmt.textContent = "add comment"
  addcmt_button_elmt.onclick =
    (e) => { 
      if(addcmt_input_elmt.value) {
        cmts_elmt.innerHTML += `<li>${addcmt_input_elmt.value}</li>`
        addcmt_input_elmt.value = null
      }
    }

  ;[name_elmt, price_elmt, addcmt_input_elmt, addcmt_button_elmt, cmtsbutton_elmt, cmts_elmt]
    .forEach(el => menu_entry_domobj.appendChild(el))

  return menu_entry_domobj
}

