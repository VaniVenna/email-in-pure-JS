function displayMailItems(mailBoxList, mailContainer) {
    this.mailBox = mailBoxList;
    this.init = function () {
        this.createMailBox();
    }
    this.createMailBox = function () {
        var mailBoxParent = document.createElement("section");
        mailBoxParent.className = "mailBoxParent";

        var mailBoxTable = document.createElement("table");
        mailBoxParent.className = "mailBoxTable";

        var mailBoxTbody = document.createElement("tbody");
        mailBoxParent.className = "mailBoxTbody";
        mailBoxTable.appendChild(mailBoxTbody);
        mailBoxParent.appendChild(mailBoxTable);
        mailContainer.appendChild(mailBoxParent);
        for (const key in this.mailBox) {
            var actParent = document.createElement("tr");
            actParent.className = key;
            mailBoxTbody.appendChild(actParent);

            for (const iterator in this.mailBox[key]) {
                if (iterator != "content") {
                    var right = document.createElement("td");
                    right.className = iterator;
                    right.textContent = this.mailBox[key][iterator];
                    actParent.appendChild(right);
                }
                else {
                    actParent.setAttribute("data-content", this.mailBox[key][iterator]);
                }
            }
        }
    }
    this.init();
}