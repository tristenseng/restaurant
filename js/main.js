function switchMenu(targetMenu){
    //hide all the menus 

    let menus = document.getElementsByClassName("menu-container");
    for (let menu of menus) {
        menu.style.display = "none"

    }

    //display targetMenu
    let target = document.getElementById(targetMenu)
    target.style.display = "block"
}
