import Popover from "./Popover";

const button = document.querySelector(".button");
const popoversFactory = new Popover();
let activePopovers = [];
const addPopover = (title, message, element) =>{
    activePopovers.push({
        id: popoversFactory.showPopover(title, message, element)
    })
}
button.addEventListener("click", (e)=>{
    e.preventDefault();
    if(activePopovers.length){
        popoversFactory.removePopover(activePopovers[0].id);
        activePopovers = [];
    }
    else{
        addPopover("Popover Title", "There will be content", e.target.closest(".button"));
    }
})
