function leftPanel(menuItems, mailContainer) {
    this.listItems = menuItems;
    this.init = function () {
        this.createMenuItems();
    }
    this.createMenuItems = function() {
        this.menuItems = document.createElement("ul");
        for(var i = 0; i< this.listItems.length; i++){
            var menuItem = document.createElement("li");
            menuItem.className = this.listItems[i].mailBoxTitle;
            menuItem.id = this.listItems[i].mailBoxTitle+"Id";
            menuItem.textContent = this.listItems[i].mailBoxTitle;
            this.menuItems.appendChild(menuItem);
        }
        mailContainer.appendChild(this.menuItems);
    }
    this.loadMailItems = function(targetMailBox, mailItems) {
        switch(targetMailBox.id) {
            case "inboxId": this.displayMailContent(mailItems[0].inbox);
            break;
            case "sentId": this.displayMailContent(mailItems[0].sent);
            break;
            case "draftId": this.displayMailContent(mailItems[0].draft);
            break;
            case "spamId": this.displayMailContent(mailItems[0].spam);
            break;
            default: this.displayMailContent(mailItems[0].inbox);
        }
    }
    this.displayMailContent = function(mailBoxList) {
        new displayMailItems(mailBoxList, mailContainer);
    } 
    
    this.init();
}