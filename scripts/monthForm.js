const BaseURL = 'http://localhost:3001/api/v1/month-form';

async function getAllMonthForms() {
    try {
        const response = await axios.get(`${BaseURL}`);
        response.data.forEach((data) => {
            var node = document.createElement("LI");
            var textnode = document.createTextNode('From: ' + data.fromDate + ' To: ' + data.toDate );
            node.appendChild(textnode);
            document.getElementById("month-lists").appendChild(node);
        })  
    } catch (error) {
        console.log(error.data); //Try using a toast.
    }
}

getAllMonthForms();