window.onresize = screen;
window.onload = screen;

function screen() {
    mywidth = window.innerWidth
}
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if ((height === '') || (height < 0) || (isNaN(height))) {
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please provide a valid weight";
    } else {
        //calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //display the results
        results.innerHTML = `<span> <b>${bmi}</b><p class="result" style="font-size: 15px;"><b>Fantastic you are in a healthy range</b></span> <br>Vestbulum ac ex nisi.Nulla ut eros erat.<br>Nulla enim enim rutrum a portitor ut ulam</p>
        <div class="myrow">
                                <div class="row2">
                                    <div class="col">
                                        <img src="weekday.jpeg" width="50px" height="50px">
                                    </div>
                                    <div class="col" style="font-size: 12px; text-align: left;"><b style="font-size: 15px; color: black;">Weekday recipe ideas </b><br>Vestbulum oc ex nsi Nulla ut eros erat.Nulla enimi<br> rufrum a partitor ut</div>

                                </div>
                                <div class="row3">
                                    <div class="col">
                                        <img src="activity.jpeg" width="50px" height="50px">
                                    </div>
                                    <div class="col" style="font-size: 12px; text-align: left;"><b style="font-size: 15px; color: black;">Join an Activity Group</b><br>Vestbulum oc ex nsi Nulla ut eros erat.Nulla enimi <br>rufrum a partitor ut</div>

                                </div>
                                <div class="row4">
                                    <div class="col">
                                        <img src="night.jpeg" width="50px" height="50px">
                                    </div>
                                    <div class="col" style="font-size: 12px; text-align: left; "><b style="font-size: 15px; color: black;">Get a better night's sleep </b><br>Vestbulum oc ex nsi Nulla ut eros erat.Nulla enimi <brrufrum a partitor ut</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>`
        document.getElementsById("results")
    }


});