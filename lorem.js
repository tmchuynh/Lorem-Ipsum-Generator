const form = document.querySelector(".lorem-form");
const numofsent = document.getElementById("numofsent");
const numofsentRange = document.getElementById("numofsentRange");
const result = document.querySelector(".lorem-text");

function syncParaNumbers(e) {
    const value = e.target.value;
    numofsentvalue = value;
    numofsentRange.value = value;
}

// form.addEventListener('submit', e => {
//     e.preventDefault()
// const value = parseInt(numofsent.value);
// let tempText = value.slice(0, value);
// tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
// result.innerHTML = tempText;
// })

$(document).ready(function() {
    form.addEventListener('submit', e => {
        e.preventDefault();
        $.getJSON('https://baconipsum.com/api/?callback=?', { 'type': 'meat-and-filler', 'start-with-lorem': getRandomInt(20), 'para': 3 },
            function(baconGoodness) {
                if (baconGoodness && baconGoodness.length > 0) {
                    $(".lorem-text").html('');
                    for (var i = 0; i < baconGoodness.length; i++) {
                        $(".lorem-text").show();
                    }
                };
            }
        );
    });
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

numofsent.addEventListener('input', syncParaNumbers);
numofsentRange.addEventListener('input', syncParaNumbers);