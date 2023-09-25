// Global variables
const form = document.querySelector('#new-form');
const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
const submittedMeal = document.querySelector('#submitted-meal-container')

// Helper functions

// Fetch Request

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const mealData = mealData(form);
    const mealObj = {};
    mealData.forEach((value, key) => {
        mealObj[key] = value;
    })
    sendMealToAPI(mealObj)
});
const sendMealToAPI = (mealObj => {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mealObj),
    });
    .then(resp => resp.json());
    .then(mealArr = )
})