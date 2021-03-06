function displayMailItems(mailBoxList, mailTbody, contentContainer, commonCheck, deleteIconCommon) {
    this.mailBox = mailBoxList;
    this.init = function () {
        this.createMailBox();
    }
    
    this.createMailBox = function () {
        
        for (const key in this.mailBox) {
            this.check = document.createElement("input");
            this.check.type = "checkbox";
            this.check.className = "check";

            var deleteIcon = document.createElement("button");
            this.deleteIcon = deleteIcon;
            this.deleteIcon.textContent = "delete";
            this.deleteIcon.className = "delete";
            this.deleteIcon.disabled = true;

            var actParent = document.createElement("tr");
            actParent.className = key;
            mailTbody.appendChild(actParent);

            for (const iterator in this.mailBox[key]) {
                if (iterator != "content") {
                    actParent.prepend(this.check);
                    var right = document.createElement("td");
                    right.className = iterator;
                    right.textContent = this.mailBox[key][iterator];
                    actParent.appendChild(right);
                    actParent.appendChild(this.deleteIcon);
                }
                else {
                    actParent.setAttribute("data-content", this.mailBox[key][iterator]);
                }
            }

            var clickInstance = new clickEvents(contentContainer, deleteIconCommon);

            actParent.onclick = function (e) {
                clickInstance.replaceData(e.currentTarget);
            }

            this.check.onclick = function (e) {
                e.stopPropagation();
                // console.log(self.clickInstance);
                clickInstance.enableDeleteIcons(e);
            }

            this.deleteIcon.onclick = function (e) {
                clickInstance.deleteNode(e);
            }

            commonCheck.onclick = function (e) {
                clickInstance.selectAll(e, this.deleteIcon);
            }.bind(this);

            deleteIconCommon.onclick = function (e) {
                clickInstance.deleteAll(e);
                commonCheck.checked = false;
                this.disabled = true;
                // commonCheck.disabled = true;
            }
        }
    }
    this.init();
}