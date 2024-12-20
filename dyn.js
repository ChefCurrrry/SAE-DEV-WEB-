
// Sélectionne tous les cercles (cercles interactifs)
const boutonsInfo = document.querySelectorAll('.circle1, .circle2, .circle3, .circle4') // Sélectionner tous les cercles
// Sélectionne l'élément qui affichera le texte associé aux cercles
const texteAffiche = document.getElementById('output')

// Parcourt chaque cercle
boutonsInfo.forEach(boutonI => {
  // Ajoute un événement au clic sur chaque cercle
  boutonI.addEventListener('click', () => {
    // Récupère l'attribut 'data-paragraphe' du cercle cliqué
    const paragraphe = boutonI.getAttribute('data-paragraphe')
    // Change le texte de l'élément #output pour afficher le paragraphe correspondant
    texteAffiche.textContent = paragraphe
  })
})

// Sélectionne l'élément avec l'ID 'aDecouvrir' (contenu caché/dévoilé)
const contenu = document.getElementById('aDecouvrir')
// Sélectionne le bouton avec l'ID 'enSP' qui déclenche l'affichage du contenu
const element = document.getElementById('enSP')

// Ajoute un événement au clic sur le bouton 'enSP'
element.addEventListener('click', function () {
  // Vérifie si le contenu est caché ou affiché
  if (contenu.style.display === 'none' || contenu.style.display === '') {
    // Si caché, affiche le contenu en 'flex'
    contenu.style.display = 'flex';
  } else {
    // Sinon, cache le contenu
    contenu.style.display = 'none';
  }
})

// Sélectionne tous les éléments ayant la classe .num (chiffres à incrémenter)
const valeurChange = document.querySelectorAll('.num')
// Définit un intervalle de temps pour l'incrémentation (1 ms)
const interval = 1

// Parcourt chaque élément .num
valeurChange.forEach((valeurChange) => {
  let valeurDebut = 3000; // Définir la valeur de départ (exemple : 3000)
  // Récupère la valeur cible (attribut data-value) à laquelle le compteur doit arriver
  const valeurFin = parseInt(valeurChange.getAttribute('data-value'));
  // Calcule la durée d'incrémentation (interval divisé par la valeur finale)
  const duree = Math.floor(interval / valeurFin)
  // Démarre un intervalle de temps pour incrémenter la valeur
  const compteur = setInterval(function () {
    valeurDebut += 1 // Incrémente la valeur
    valeurChange.textContent = valeurDebut // Affiche la valeur actuelle

    // Si la valeur actuelle atteint la valeur cible
    if (valeurDebut === valeurFin) {
      // Arrête l'incrémentation
      clearInterval(compteur)
    }
  }, duree) // Exécute l'incrémentation avec la durée calculée
})
