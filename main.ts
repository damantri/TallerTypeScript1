import { series } from './data.js';
import { Serie } from './serie.js';

console.log("Loading series...");


function generateTableRow(serie: Serie): string {
  return `<tr>
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
          </tr>`;
}


function displaySeries(): void {
  const tableBody = document.querySelector('#series-table') as HTMLElement | null;

  if (tableBody) {

    const { tableRows, totalSeasons } = series.reduce(
      (acc, serie) => {
        acc.tableRows += generateTableRow(serie);
        acc.totalSeasons += serie.seasons;
        return acc;
      },
      { tableRows: '', totalSeasons: 0 }
    );
    tableBody.innerHTML = tableRows;
    const averageSeasons = (totalSeasons / series.length).toFixed(1);
    const avgRow = `<tr><td colspan="3">Average Seasons</td><td>${averageSeasons}</td></tr>`;
    tableBody.insertAdjacentHTML('beforeend', avgRow);
  } else {
    console.error('No se encontró el elemento con id "series-table" en el DOM.');
  }
}

displaySeries();
