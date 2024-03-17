document.getElementById('tuddmeg').hidden = false;

function kaka() {
  let text;
  let Kaka = prompt('Kaka vagy?');
  if (Kaka == 'Igen' || Kaka == 'igen' || Kaka == 'iGEN' || Kaka == 'IGEN') {
    alert('Gratulálok, kaka vagy!');
  } else if (Kaka == 'Nem' || Kaka == 'nem' || Kaka == 'nEM' || Kaka == 'NEM') {
    alert('De.');
  } else {
    alert('Akkor is kaka vagy.');
  }
  document.getElementById('tuddmeg').hidden = true;
  document.getElementById('grat').hidden = false;
  document.getElementById('biztos').hidden = false;
  document.getElementById('tutu').hidden = true;
}

function tutu() {
  document.getElementById('tutu').hidden = false;
}

function viszlat() {
  document.getElementById('szia').hidden = false;
  document.getElementById('szia2').hidden = true;
  document.getElementById('grat').hidden = false;
  document.getElementById('biztos').hidden = true;
  nem.checked = false;
}

function viszlat2() {
  document.getElementById('szia2').hidden = false;
  document.getElementById('szia').hidden = true;
  document.getElementById('grat').hidden = false;
  document.getElementById('biztos').hidden = true;
  igen.checked = false;
}

function Feri() {
  alert('Keresett a Feri!');
  document.getElementById('biztos').hidden = true;
  document.getElementById('tutu').hidden = true;
  document.getElementById('szia').hidden = true;
  document.getElementById('szia2').hidden = true;
  document.getElementById('kakaVagy').hidden = true;
  document.getElementById('grat').hidden = true;
  document.getElementById('milyenFeri').hidden = false;
}

function csa() {
  window.location.reload();
}
