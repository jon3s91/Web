

function onButtonClick(evt, partitionName) {
    var i, partitionRows;
    let ALL_COMPONENTS = "ALL"
    let PARTITION_CLASS = "component_entry"
    let PARTIION_ACTIVE = "component_active"

    partitionRows = document.getElementsByClassName(PARTITION_CLASS)

    for (i = 0; i < partitionRows.length; i++) {
        partitionRows[i].style.display = "none";
        partitionRows[i].classList.remove(PARTIION_ACTIVE)
    }

    if (ALL_COMPONENTS == partitionName) {
        selectedPartiitons = document.getElementsByClassName(PARTITION_CLASS)
        for (i = 0; i < selectedPartiitons.length; i++) {
            selectedPartiitons[i].style.display = ""
        }
    } else {
        partitionRows = document.getElementsByClassName(partitionName)
        if (partitionRows != null) {
            for (i = 0; i < partitionRows.length; i++) {
                partitionRow = partitionRows[i]
                partitionRow.style.display = ""
                partitionRow.classList.add(PARTIION_ACTIVE)
            }
        }
    }
}

function searchBar() {
    let val = document.getElementById("search-bar").value
    let PARTIION_ACTIVE = "component_active"
    let PARTITION_CLASS = "component_entry"
    let filter = function(partitionRow) {
        if (partitionRow.children == undefined && partitionRow.length == 4) {
            fileName   = partitionRow[1].innerText
            symbolName = partitionRow[2].innerText
            if ((!fileName.includes(val)) && (!symbolName.includes(val))) {
                partitionRow.style.display = "none"
            }
            else
            {
                partitionRow.style.display = ""
            }
        }
        else if (partitionRow.children.length == 4) {
            fileName   = partitionRow.children[1].innerText
            symbolName = partitionRow.children[2].innerText
            if ((!fileName.includes(val)) && (!symbolName.includes(val))) {
                partitionRow.style.display = "none"
            }
            else
            {
                partitionRow.style.display = ""
            }
        }
    }
    
    partition = document.getElementsByClassName(PARTIION_ACTIVE)
    if (partition != undefined && partition.length != 0) {
        for (i = 0; i < partitionRows.length; i++) {
            partitionRow = partitionRows[i]
            filter(partitionRow)
        }
    } else {
        partitionRows = document.getElementsByClassName(PARTITION_CLASS)
        if (partitionRows != undefined && partitionRows.length != 0) {
            for (i = 0; i < partitionRows.length; i++) {
                partitionRow = partitionRows[i]
                filter(partitionRow)
            }
        }
    }
}

function debounceSearch(func, wait) {
    let timeout;

    return function eventCallback() {

        const later = () => {
            timeout = null;
            func();
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};


