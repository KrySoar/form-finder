//if there is a search form, remove it
//Si il y a un formulaire de recherche, le supprimer
patternF = `form[id*=search],form[name*=search]`
while(document.querySelector(patternF)) {
    document.querySelector(patternF).remove();
}

//Search a form, if there is not, use document as the form
//Rechercher un formulaire, si pas de formulaire, considérer toute la page comme étant le formulaire
formulaire = document.querySelector('form') ? document.querySelector('form') : document;
form_id = formulaire.id;

//almost all the time, the password-input has type=password
//99% du temps le champs du mot de passe est de type password (permet d'avoir les *****)
pass_id = formulaire.querySelector('input[type=password]').id;

//remove all the hidden inputs
//supprimer tous les input cachés
patternH = `input[type=hidden]`
while(formulaire.querySelector(patternH)) {
    formulaire.querySelector(patternH).remove();
}

//search pattern for the user-input
//Motif de recherche pour le champs d'identification (user)
patternU = `input[id*=user],input[name*=user],
         input[id*=login],input[name*=login],
         input[id*=Login],input[name*=Login],
         input[id*=mail],input[name*=mail],
         input[id*=dentifier],input[name*=dentifier]`;

user_id = formulaire.querySelector(patternU).id;

//return the result as id's separated by '|' for later treatment
//renvoyer le résultat sous la forme d'une chaine qu'il ne reste plus qu'à traiter
result = form_id + '|' + user_id + '|' + pass_id;
