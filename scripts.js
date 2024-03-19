const main = document.querySelector(".main-page")
const catalog = document.querySelector(".catalog-page")
const btncatalog = document.querySelector(".container__catalog-button")
const btnmain = document.querySelector(".btnmain")

catalog.style.display  = "none"

btncatalog.onclick = () => {
    catalog.style.display  = "block"
    main.style.display = "none"
}

btnmain.onclick = () => {
    catalog.style.display  = "none"
    main.style.display = "block"
}