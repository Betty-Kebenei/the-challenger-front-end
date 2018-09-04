//GET all daily data for a specific month.
async function getAllDailyData(monthId) {
    try {
        const response = await axios.get(`${BaseURL}/${monthId}/daily-data`);
        console.log(response)
    } catch(error){
        snackbar(error.response.data, "snackbar-failure");
    }
}