// model
// let bmi = (weight / ((height * height) / 10000)).toFixed(2);
let weight; 
let height;
let result = "";

// view
updateView();
function updateView() {
    // needs inputs weight, height, possibly gender. BMI result output evaluation healthy, under/overweight.
    document.querySelector('#app').innerHTML = `
        <div id="container">
            <input onchange="heightInp(this.value)" type="text" id="height" placeholder="høyde (i cm)"><br>
            <input onchange="weightInp(this.value)" type="text" id="weight" placeholder="vekt (i kg)"><br>
            <button id="btn" onclick="calcBMI()">Kalkuler</button>
            <div id="result">${result}</div>
        </div>
    `;
}

// control
function weightInp(w) {
    weight = w;
}

function heightInp(h) {
    height = h;
}

function calcBMI() {
    let bmi;
    //isNaN(height) og (weight) i parantes for at resultatet skal klare å si ifra på begge. uten dem tar den bare med den første
    if (height === "" || isNaN(height)) {
        result = "Skriv gyldig høyde. eks: 175";
    }

    else if
        (weight === "" || isNaN(weight)) {
        result = "Skriv gyldig vekt. eks: 65";
    }

    else {
        //Regner ut vekt i kg delt på høyde i kvadratmeter (eks: 1.65), og fikser til 2 slik at BMI resultat blir 11.1 og ikke 0.0111
        bmi = ( (weight / (height * height)) * 10000 ).toFixed(2);
        if (bmi < 18.5) {
            result = `Undervektig : BMI'en din er ${bmi}. Normal BMI er mellom 18,5 og 25`;
            // console.log('underweight', bmi);
        }

        else if (bmi >= 18.5 && bmi <= 25) {
            result = `Normalvektig! =) : BMI'en din er ${bmi}`;
            // console.log('normal', bmi);
        }

        else {
            result = `Overvektig : BMI'en din er ${bmi}. Normal BMI er mellom 18,5 og 25`;
            // console.log('overweight', bmi);
        }
    }
    updateView();
    return bmi;
}









// BMI = weight / height * height (kg/m2)
// BMI < 18,5 = undervekt
// BMI >= 18,5 <= 25 = normalvekt
// BMI >= 25 <= 30 = overvekt
// BMI > 30 = fedme