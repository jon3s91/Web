
function onButtonClick(evt, partitionName) {
    var i, partitionContainers;
    let ALL_COMPONENTS = "ALL"
    partitionContainers = document.getElementsByClassName("partitionContainer")
    for (i = 0; i < partitionContainers.length; i++) {
        partitionContainers[i].style.display = "none";
    }

    if (ALL_COMPONENTS == partitionName) {
        selectedPartiitons = document.getElementsByClassName("partitionContainer")
        for (i = 0; i < selectedPartiitons.length; i++) {
            selectedPartiitons[i].style.display = ""
        }
    } else {
        selectedPartiiton = document.getElementById(partitionName)
        if (selectedPartiiton != null) {
            selectedPartiiton.style.display = ""
        }
    }
}

function searchBar() {

}