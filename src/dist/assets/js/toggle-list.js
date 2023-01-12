(() => {
    const all_togles = document.getElementsByClassName("toggle-list")

    for (let index = 0; index < all_togles.length; index++) {
        const element = all_togles[index];

        const header = element.children[0]
        const list = element.getElementsByTagName("ul")[0]

        const icons = document.createElement("div")
        icons.innerHTML = `<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.25 0.875L7 7.125L0.75 0.875" stroke="#0B0F22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 7.125L7 0.875L13.25 7.125" stroke="#0B0F22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`

        icons.children[1].classList.add("hidden")
        list.classList.add("hidden")
        header.appendChild(icons)

        const handleClick = () => {
            console.log("hola mundo");
            icons.children[1].classList.toggle("hidden")
            icons.children[0].classList.toggle("hidden")
            list.classList.toggle("hidden")

        }
        header.onclick = () => handleClick()


    }
})()