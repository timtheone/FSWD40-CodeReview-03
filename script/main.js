window.onload = function () {
    function calculateInsurance (name,age,country,hp) {
        
        if (country == "austria") {
            insurance = Math.floor(hp * 100/age + 50);
        } else if (country == "germany") {
            insurance = Math.floor(hp * 120/age + 100);
        } else {
            insurance = Math.floor(hp * 150/(age + 2) + 150);
        }
        if (name == "") {
            return "Please enter your Name"
        } else if (isNaN(insurance)) {
            return "Nothing to calculate. Please fill forms"
        } else {
        return `${name}, your insurance cost ${insurance} &euro;`
    }
    }

    document.getElementById("button2").addEventListener("click", function() {
        inputName = document.getElementById('name').value;
        inputAge = parseInt(document.getElementById('age').value);
        inputCountry = document.getElementById('country').value;
        inputHp = parseInt(document.getElementById('hp').value);

        document.getElementById("result").innerHTML = calculateInsurance(inputName, inputAge, inputCountry, inputHp)
        })

}

