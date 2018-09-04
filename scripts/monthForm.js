const BaseURL = 'http://localhost:3001/api/v1/month-form';

async function getAllMonthForms() {
    try {
        const response = await axios.get(`${BaseURL}`);
        response.data.forEach((data) => {
            let node = document.createElement("LI");
            let textnode = document.createTextNode('From: ' + data.fromDate + ' To: ' + data.toDate );
            node.appendChild(textnode);
            document.getElementById("month-lists").appendChild(node);
        })  
    } catch (error) {
        snackbar(error.response.data, "snackbar-failure");
    }
}
getAllMonthForms();

async function postMonthForm() {
    const data = {
        fromDate: document.getElementById('month-form').elements[0].value,
        toDate: document.getElementById('month-form').elements[1].value
    }
    try {
        const response = await axios.post(`${BaseURL}`, data);
        snackbar(response.data.message, "snackbar-success");
        addMonthForm();
        getAllMonthForms();
    } catch(error) {
        snackbar(error.response.data, "snackbar-failure");
    }
}
