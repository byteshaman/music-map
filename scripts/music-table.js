import { countryList } from './music-data.js';


const options = {
  valueNames: ['country', 'artist', 'album', 'genres', 'year', 'url'],
  item: function(val) {
    return `<tr>
              <td class="region">${val.region}</td>
              <td class="country">${val.country}</td>
              <td class="artist">${val.artist}</td>
              <td><a class="album" href="${val.url}" target="_blank>${val.album}</a></td>
              <td class="year">${val.year}</td>
              <td class="year"></td><td class="genres">${val.genres}</td>
            </tr>`
  }
}

let values = [];

// Object.entries(countryList) => [main-index][[sub-index-1] : "country-code", [sub-index-2] : {key-1 : val-1 ... key-n : val-n}]

// first forEach accesses the main-index (key) => key[0] is the country code, key[1] is the object containing various info
Object.entries(countryList).forEach(key => {
  values.push({
    region: key[1].region,
    country: svgMap.prototype.countries[key[0]], //get the value (country name) associated to the key (country code) of the svgMap prototype
    artist: key[1].artist,
    album: key[1].album,
    genres: key[1].genres,
    year: key[1].year,
    url: key[1].link,
  })
});

const list = new List('table-container', options, values)
list.sort('country'); //initial sort
