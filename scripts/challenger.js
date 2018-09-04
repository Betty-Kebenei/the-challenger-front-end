function hideAndShow(id) {
    let elem = document.getElementById(id);
    if(elem.style.display === "none"){
        elem.style.display = "block";
    } else {
       elem.style.display = "none"; 
    }
}

function addMonthForm() {
    hideAndShow('month-form');
}

function displayAMonthsData() {
    hideAndShow('one-month');
}

function addDailyDataForm() {
    hideAndShow('daily-data-form');
}

