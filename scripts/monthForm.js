const BaseURL = 'http://localhost:3001/api/v1/month-form';
let month_id;

//GET all month forms.
async function getAllMonthForms() {
    try {
        const response = await axios.get(`${BaseURL}`);
        response.data.forEach((data) => {
            let node = document.createElement("LI");

            //create a id attribute
            let att1 = document.createAttribute("id"); 
            att1.value = data._id;
            node.setAttributeNode(att1); 

            //create an onclick attribute
            let att3 = document.createAttribute("onclick"); 
            att3.value = "getAMonth()";
            node.setAttributeNode(att3);

            
            let textnode = document.createTextNode('From: ' + data.fromDate + ' To: ' + data.toDate );
            node.appendChild(textnode);
            document.getElementById("month-lists").appendChild(node);
        })  
    } catch (error) {
        snackbar(error.response.data, "snackbar-failure");
    }
}
getAllMonthForms();

//GET a single month form.
async function getAMonth() {
    let id = event.target.id;
    try {
        const response = await axios.get(`${BaseURL}/${id}`);
        displayAMonthsData()
    } catch(error) {
        snackbar(error.response.data, "snackbar-failure");
    }
}

//POST a month form
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
