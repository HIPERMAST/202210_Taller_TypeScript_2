import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTableBody: HTMLElement = document.getElementById('series')!;
let averageSeasons: HTMLElement = document.getElementById('averageSeasons')!;
let seriesInfo: HTMLElement = document.getElementById('seriesInfo')!;

loadSeriesTable(dataSeries);
averageSeasons.innerHTML = `<b>Seasons average:</b> ${average(dataSeries)}`;

function loadSeriesTable(series: Serie[]): void {
    series.forEach(serie => {
        let tr: HTMLElement = document.createElement('tr');
        tr.setAttribute("class", "clickable");
        tr.onclick = function () {
            loadCard(serie);
        };
        tr.innerHTML = `
        <td><b>${serie.getIndex()}<b></td>
        <td><a href="#Card ${serie.getName()}">${serie.getName()}</a></td>
        <td>${serie.getchannel()}</td>
        <td>${serie.getSeasons()}</td>`;
        seriesTableBody.appendChild(tr);
    });
}

//function average of seasons
function average(series: Serie[]): number {
    let sum: number = 0;
    series.forEach(serie => {
        sum += serie.getSeasons();
    });
    return sum / series.length;
}

//function load an especific card
function loadCard(serie: Serie): void {
    seriesInfo.innerHTML = `
    <div class="card" style="width: 19rem;">
        <img class="card-img-top" src="${serie.getLinkImage()}">
        <div class="card-body">
            <h5 class="card-title">${serie.getName()}</h5>
            <div class="card-content">
                <p>${serie.getDescription()}</p>
            </div>
            <div class="card-action">
                <a href="${serie.getLinkWebPage()}" target="_blank">${serie.getLinkWebPage()}</a>
            </div>
        </div>
    </div>`;
}