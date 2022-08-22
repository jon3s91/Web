

function onButtonClick(evt, partitionName) {
    var i, partitionContainers;
    let ALL_COMPONENTS = "ALL"
    let PARTITION_CLASS = "partitionContainer"
    let PARTIION_ACTIVE = "active-partition"

    partitionContainers = document.getElementsByClassName(PARTITION_CLASS)

    for (i = 0; i < partitionContainers.length; i++) {
        partitionContainers[i].style.display = "none";
        partitionContainers[i].classList.remove(PARTIION_ACTIVE)
    }

    if (ALL_COMPONENTS == partitionName) {
        selectedPartiitons = document.getElementsByClassName(PARTITION_CLASS)
        for (i = 0; i < selectedPartiitons.length; i++) {
            selectedPartiitons[i].style.display = ""
        }
    } else {
        selectedPartiiton = document.getElementById(partitionName)
        if (selectedPartiiton != null) {
            selectedPartiiton.style.display = ""
            selectedPartiiton.classList.add(PARTIION_ACTIVE)
        }
    }
}

function searchBar() {
    let PARTIION_ACTIVE = "active-partition"
    let PARTITION_CLASS = "partitionContainer"
    let val = document.getElementById("search-bar").value
    let filter = function(node) {
        if (node != undefined) {
            if (node.innerHTML.includes(val)) {
                node.style.display = ""
            } else {
                node.style.display = "none"
            }
        }
    }
    let nodeVisitor = function(partition) {
        let childs = null
        if (partition[0] != undefined && partition[0].children != undefined) {
            childs = partition[0].children
        } else if (partition.children != undefined) {
            childs = partition.children
        }
        for (let i = 0; i < childs.length; i++) {
            filter(childs[i])
        }
    }
    
    partition = document.getElementsByClassName(PARTIION_ACTIVE)
    if (partition != undefined && partition.length != 0) {
        nodeVisitor(partition)
    } else {
        partitions = document.getElementsByClassName(PARTITION_CLASS)
        if (partitions != undefined && partitions.length != 0) {
            for (i = 0; i < partitions.length; i++) {
                partition = partitions[i]
                nodeVisitor(partition)
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


