
// Ajouter ecole function
function ajouterEcole() {
    const ecoleName = document.getElementById('ecoleInput').value.toUpperCase();
    const ecoleMsg = document.getElementById('msgEcole');
    const ecoleOptions = document.getElementById('ecoleOptions');

    if (ecoleName == '') {
        ecoleMsg.innerText = 'Attention le champ ecole est obligatoire';
        ecoleMsg.style.color = 'red';
    } else {
        ecoleMsg.innerText = "L'ecole est ajoutée avec succés";
        ecoleMsg.style.color = 'green';

        const option = document.createElement('option');
        option.value = ecoleName;
        option.innerText = ecoleName;
        ecoleOptions.appendChild(option);
        document.getElementById('ecoleInput').value = '';
    }
}

// Ajouter etudiant function
let etudiantsData = []
function ajouterEtudiant() {
    const etuName = document.getElementById('nomInput').value;
    if (!(etuName == '')) {
        const etuPrenom = document.getElementById('prenomInput').value || null;
        let etuFiliere;
        const filieres = document.getElementsByName('filiere');
        for (let i = 0; i < filieres.length; i++) {
            if(filieres[i].checked) {
                etuFiliere = filieres[i].value;
                break;
            } else {
                etuFiliere = 'null';
            }
        }
        const ecoleName = document.getElementById('ecoleOptions').value || null;
        const etudiantInfo = [etuName, etuPrenom, etuFiliere, ecoleName];
        etudiantsData.push(etudiantInfo)
    
        const etuLi = document.createElement('li');
        const etudiantList = document.getElementById('etudiantList');
        etuLi.innerText = `${etuName} ${etuPrenom} ${ecoleName} ${etuFiliere}`;
        etudiantList.appendChild(etuLi);
    } else {
        alert("Vous avez besion d'entree le nom");
    }
    
}

// vide function 
function vide() {
    document.getElementById('nomInput').value = '';
    document.getElementById('prenomInput').value = '';
    const filieres = document.getElementsByName('filiere');
    for (let i = 0; i < filieres.length; i++) {
        filieres[i].checked = false;
    }
    document.getElementById('ecoleOptions').innerHTML = ''
}

// supprimer function 
function supprimer() {
    etudiantsData.pop();
    document.getElementById('etudiantList').removeChild(document.getElementById('etudiantList').lastChild);
}

// afficher taille function 
function afficherTaille() {
    const etuNumber = document.getElementById('nombreEtudiant');
    etuNumber.innerText = etudiantsData.length;
}


