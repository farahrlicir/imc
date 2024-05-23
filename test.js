<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="imc-calculator">
    <h2>IMC Calculator</h2>
    <label for="weight">Weight (kg):</label><br><br>
    <input type="number" id="weight" required><br>
    <br>
    <label for="age">age :</label><br><br>
    <input type="number" id="age" required><br>
    <br>
    <label for="height">Height (cm):</label><br><br>
    <input type="number" id="height" required><span> <button onclick="calculateIMC()">Calculate IMC</button></span>
    
    <p id="result"></p>
    <p id="idealweight"></p>
    <p id="energy"></p>
</div>

<script>
    function calculateIMC() {
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value/100;
        let age = document.getElementById("age").value;

        if (height === "" || isNaN(height) || age ==="" || isNaN(age)) 
		result.innerHTML = "Provide a valid Height and age !";

	else if (weight === "" || isNaN(weight)) 
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the imc
	else {
        let imc = weight / (height * height);
        let idealweight = (50+0.9*(height-152))
         
        document.getElementById("idealweight").innerText = " your ideal weight is " + idealweight.toFixed(2);
        result.innerHTML =`ideal weight  : <span>${idealweight}</span>`;

        document.getElementById("result").innerText = "Your IMC is: " + imc.toFixed(2);
        if (imc < 18.6) result.innerHTML =
			`Under Weight : <span>${imc}</span>`;

		else if (imc >= 18.6 && imc < 24.9) 
			result.innerHTML = 
				`Normal : <span>${imc}</span>`;
		else result.innerHTML =
			`Over Weight : <span >${imc}</span>`;
	}

} 
</script>

</body>
</html>
