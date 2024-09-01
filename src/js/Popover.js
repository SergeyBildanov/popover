export default class Popover{
    constructor(){
        this._popovers = [];
    }
    showPopover(title, message, element){
        let popoverElement = document.createElement("div");
        popoverElement.classList.add("popover");
        let id = performance.now();

        this._popovers.push({
            id,
            element: popoverElement
        })

        document.body.appendChild(popoverElement);
        let titleElement = document.createElement("div");
        titleElement.classList.add("popover-title");
        let messageElement = document.createElement("div");
        messageElement.classList.add("popover-message");
        titleElement.textContent = title;
        messageElement.textContent = message;
        popoverElement.appendChild(titleElement);
        popoverElement.appendChild(messageElement);


        const {left, top} = element.getBoundingClientRect();

        popoverElement.style.top = top - popoverElement.offsetHeight - 5 + "px";
        popoverElement.style.left = left - popoverElement.offsetWidth / 2  + element.offsetWidth / 2  + "px";
        return id;
    }
    removePopover(id) {
        const popover = this._popovers.find(p => p.id === id);

        popover.element.remove();

        this._popovers = this._popovers.filter(p => p.id !== id);
    }
}