const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const telephone = document.getElementById('tel');
const textMessage = document.getElementById('messagetext')
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const elmentSurvol = [];
form.addEventListener('submit', (e) => {
    let message = [];
    if (nom.value === '' || nom.value == null) {
        message.push('le nom est requis !');
        elmentSurvol.push('nom');
    }
    console.log(textMessage.length);
    if (textMessage.value == null || textMessage.value.length < 20) {
        message.push('Veuiller ajouter plus de texte au message !');
        elmentSurvol.push('messagetext');
    }
    if (telephone.value == null || telephone.value.length < 10) {
        message.push('Veuiller entrer un numéro de téléphone correct !');
        elmentSurvol.push('tel');
    }
    if (message.length > 0) {
        e.preventDefault();
        errorElement.innerText = message.join(', ');
        console.log(elmentSurvol);
        for (const idColor in elmentSurvol) {

            document.getElementById(elmentSurvol[idColor]).style.borderColor = "red";
        }

    }


})

