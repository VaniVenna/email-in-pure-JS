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
        
        var mailBoxParent = document.createElement("section");
        mailBoxParent.className = "mailBoxParent";
        
        var mailBoxTable = document.createElement("table");
        mailBoxTable.className = "mailBoxTable";

        this.mailBoxTbody = document.createElement("tbody");
        this.mailBoxTbody.id = "mailBoxTbody";
        
        this.content = document.createElement("div");
        this.content.className = "content";
        
        var commonDiv = document.createElement("div")
        commonDiv.className = "control-container";

        this.commonCheck = document.createElement("input");
        this.commonCheck.type = "checkbox";
        this.commonCheck.className = "checkCommon";

        this.deleteIconCommon = document.createElement("button");
        this.deleteIconCommon.textContent = "delete";
        this.deleteIconCommon.className = "delete";
        this.deleteIconCommon.disabled = true;

        mailBoxParent.append(commonDiv);
        commonDiv.append(this.commonCheck, this.deleteIconCommon);

        document.body.appendChild(this.content);
        mailBoxTable.appendChild(this.mailBoxTbody);
        mailBoxParent.appendChild(mailBoxTable);
        mailContainer.appendChild(mailBoxParent);
    }
    this.loadMailItems = function(targetMailBox, mailItems) {
        this.content.innerHTML = "";
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
        var removeChild = document.getElementById("mailBoxTbody");
        if (removeChild.childNodes.length > 0)
            removeChild.innerHTML = "";

        new displayMailItems(mailBoxList, this.mailBoxTbody, this.content, this.commonCheck, this.deleteIconCommon);
    }
    this.init();
}