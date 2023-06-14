const btn = document.querySelector(".btn-large")
btn.addEventListener("click", () => {
    criar_alementos()
    salva_dados()
    limpa_input()


})


function salva_dados(){
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        // Store
        const form = document.querySelector(".materialize-textarea").value
        localStorage.setItem("anotacao", `${form}`)
        console.log(localStorage.getItem("anotacao"));

      } else {
        // Sorry! No Web Storage support..
        alert("Sorry! No Web Storage support")
      }
}


function criar_alementos(){
    //get input
    const form = document.querySelector(".materialize-textarea").value
    
    //get section perfil
    const section = document.querySelector("section")
    
    //criar ul
    const ul = document.createElement("ul")
    ul.setAttribute("class", "collection")
    
    
    //criar li dentro de ul
    const li = document.createElement("li")
    li.setAttribute("class","collection-item avatar")
    //li.innerHTML = "ola"

     //criar img dentro  de li
    const img = document.createElement("img")
    img.src="https://i.pinimg.com/originals/fd/65/36/fd6536a9e678866637af8819cb291850.jpg"
    img.setAttribute("class", "circle")
    
    //criar um span dentro de li
    const span = document.createElement("span")
    span.setAttribute("class","title")
    span.innerText = "M4isv"

    //criar um p dentro de li
    const p = document.createElement("p")
    p.innerHTML = `${form}`


    //img dentro de li
    li.appendChild(img)
    //span dentro de li
    li.appendChild(span)
    //p de dentro de li
    li.appendChild(p)
    //li dentro de ul
    ul.appendChild(li)
    //ul com tudo dentro , dentro de section
    section.appendChild(ul)
    

}





limpa_input = () => {
    document.querySelector(".materialize-textarea").value = ""
}