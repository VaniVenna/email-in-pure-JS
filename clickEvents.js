function clickEvents(contentContainer, deleteIconCommon) {
    this.init = function () {}
    this.replaceData = function (currentTarget) {
        contentContainer.innerHTML = currentTarget.getAttribute("data-content");
    }
    /* checkbox click event */
    this.enableDeleteIcons =  function (e) {
        // console.dir(e.target.parentNode.lastChild);
        if (e.target.parentNode.lastChild.disabled === true) {
            e.target.parentNode.lastChild.disabled = false;
            deleteIconCommon.disabled = false;
        }
        else {
            e.target.parentNode.lastChild.disabled = true;
            deleteIconCommon.disabled = true;
        }
    }

    /* delete icon click event */
    this.deleteNode = function (e) {
        e.stopPropagation();
        contentContainer.innerHTML = "";
        e.target.parentNode.remove();
    }

    /* common checkbox on change event */
    this.selectAll = function (e, deleteIcon) {
        var getCheckboxes = document.querySelectorAll(".check");
        console.log(getCheckboxes);
        var isCheckboxChecked = e.target.checked;

        if (isCheckboxChecked === true) {
            for (const iterator of getCheckboxes) {
                iterator.checked = true;
                deleteIconCommon.disabled = false;
                console.dir(iterator);
                iterator.parentNode.lastChild.disabled = false;
                // iterator.nextSibling.nextSibling.nextSibling.disabled = false;
                // iterator.parentNode.children.querySelector("button.delete").disabled =false;
            }
        }
        else {
            for (const iterator of getCheckboxes) {
                iterator.checked = false;
                deleteIconCommon.disabled = true;
                iterator.parentNode.lastChild.disabled = true;
            }
        }
    }
    
    /* common delete click event */
    this.deleteAll = function (e) {
        var del = Array.from(document.getElementsByClassName("check"));
        del.forEach(element => {
            if (element.checked === true)
                element.parentNode.remove();
        });
    }
    this.init();
}