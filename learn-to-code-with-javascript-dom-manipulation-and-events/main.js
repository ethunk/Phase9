let buttonElement = document.getElementById('duplicate-borg-ship');

buttonElement.addEventListener('click', () => {
  let borgFleetDiv = document.getElementById('borg-fleet');
  borgFleetDiv.innerHTML += '<img src="borg-ship.png" alt="Borg Ship">';
});
