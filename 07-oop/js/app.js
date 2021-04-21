// Your starting point, enjoy the ride!

function renderKontoRow(konto, parent) {

  const kontoRows = parent.querySelector('tr[data-nr]');

  let kontoRow = kontoRows.find(row => Number(row.dataset.nr) === konto.nr);
  if( !kontoRow) {
    kontoRow = document.createElement('tr');
    kontoRow.dataset.nr = konto.nr;
    kontoRow.innerHTML = '<td></td><td></td><td></td>';
    parent.appendChild(kontoRow);
  }

  kontoRow.querySelector('tr:nth-child(1)').textContent = konto.nr;
  kontoRow.querySelector('tr:nth-child(2)').textContent = 'Konto';
  kontoRow.querySelector('tr:nth-child(3)').textContent = konto.stand;

}
