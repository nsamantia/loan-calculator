// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate results
function calculateResults(e){
    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const caculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayents = parseFloat(years.value) * 12;

    //Compute monthly payments
    const x = Math.pow(1 + caculatedInterest, calculatedPayents);
    const monthly = (principal*x*caculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayents).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayents)-principal).toFixed(2);
    } else {
        showError('Please check your numbers');
    }

    e.preventDefault();
}

// Show Error
function showError(error){
    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div

    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error afer 3 seconds

    setTimeout(clearError, 3000);
}

//Clear error
function clearError(){
    document.querySelector('.alert').remove();
}