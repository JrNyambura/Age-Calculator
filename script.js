const submit = document.getElementById('button');

function age() {
    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);

    //current date

    var currDate = new Date();

    //date of birth object
    var dob = new Date(year, month-1, day);

    //calculate age
    var ageInMilliseconds = currDate - dob;
    var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

    //calculate remaining milliseconds to months
    var remainingMilliseconds = ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25);

    //convert remaining months to days
    var remainingDays = Math.floor(remainingMilliseconds / (1000 * 60 * 60* 24));

    //convert remaining days to months
    var remainingMonths = Math.floor(remainingDays / 30.44);

    //Days:

    var Days = remainingDays % 30;

    //output the results
    var resultDiv = document.getElementById('result');

    if (resultDiv) {
        resultDiv.innerHTML = 'Age: ' + ageInYears + 'Years,  ' + remainingMonths + '   months, ' + Days+ 'days';
} else {
    console.error("Result div not found.");
}

}

//event Listeners
submit.addEventListener('click', age);