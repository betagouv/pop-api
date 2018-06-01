const proj4 = require('proj4')
const { log } = require('./log');

//https://epsg.io/27572
proj4.defs("lambert0", "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs");
//https://epsg.io/27571
proj4.defs("lambert1", "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=1200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs");
//https://epsg.io/27572#
proj4.defs("lambert2", "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs");
//https://epsg.io/27573#
proj4.defs("lambert3", "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=3200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs");
//https://epsg.io/27574#
proj4.defs("lambert4", "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=4185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs");
//https://epsg.io/2154
proj4.defs("lambert93", "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
//https://epsg.io/2990
proj4.defs("gauss laborde", "+proj=tmerc +lat_0=-21.11666666666667 +lon_0=55.53333333333333 +k=1 +x_0=50000 +y_0=160000 +ellps=intl +towgs84=94,-948,-1262,0,0,0,0 +units=m +no_defs");
//https://epsg.io/32630
proj4.defs("mtu", "+proj=utm +zone=30 +datum=WGS84 +units=m +no_defs");


function extractPoint(xy, zone, REF) {
  if (!xy) {
    return null
  }
  if (!zone) {
    log('GEOLOC', REF, 'has no zone', xy)
    return null
  }
  const coords = xy.split(';').map((e) => parseFloat(e.trim()));

  if (coords.length !== 2 || isNaN(coords[0]) || isNaN(coords[1])) {
    log('GEOLOC', REF, 'GEOLOC is not properly formated', xy)
    return null
  }

  switch (zone.toLowerCase()) {
    case 'lambert0': {
      const c = proj4('lambert0', 'WGS84', [coords[0], coords[1]]);
      return [c[1], c[0]];
    }
    case 'lambert1': {
      const c = proj4('lambert1', 'WGS84', [coords[0], coords[1]]);
      return [c[1], c[0]];
    }
    case 'lambert2': {
      const c = proj4('lambert2', 'WGS84', [coords[0], coords[1]]);
      return [c[1], c[0]];
    }
    case 'lambert3': {
      const c = proj4('lambert3', 'WGS84', [coords[0], coords[1]]);
      return [c[1], c[0]];
    }
    case 'lambert4': {
      const c = proj4('lambert4', 'WGS84', [coords[0], coords[1]]);
      return [c[1], c[0]];
    }
    case 'gauss laborde': {
      const c = proj4('gauss laborde', 'WGS84', [coords[0], coords[1]]);
      return [c[1], c[0]];
    }
    case 'lambert93': {
      const c = proj4('lambert93', 'WGS84', [coords[0], coords[1]]);
      return [c[1], c[0]];
    }
    default:
      log('GEOLOC', REF, `Cant find zone ${zone} `, xy)
      return null
  }
}


function extractPolygon(xy, zone, REF) {
  if (!xy) {
    return null
  }

  if (!zone) {
    log('GEOLOC', REF, ` has no zone `, xy)
    return null
  }

  if (xy.indexOf('/') !== -1) {
    const coords = xy.split('/');
    const points = coords.map((e) => {
      return extractPoint(e, zone, REF);
    })
    return points;
  } else {
    const coords = xy.split(';');
    if (coords.length === 4) {
      const points = [];
      points.push(extractPoint(`${coords[0]};${coords[2]}`, zone, REF));
      points.push(extractPoint(`${coords[0]};${coords[3]}`, zone, REF));
      points.push(extractPoint(`${coords[1]};${coords[3]}`, zone, REF));
      points.push(extractPoint(`${coords[1]};${coords[2]}`, zone, REF));
      return points;
    } else {
      log('GEOLOC', REF, ` cant understand the polygon `, coords)
      return null;
    }
  }
  log('GEOLOC', REF, ` Cant manage the polygon in zone ${zone} `, xy)
  return null;

}


// (1714481 ; 9275307 / 1714418 ; 9275407 / 1714577 ; 9275593 / 1714650 ; 9275488 / 1714481 ; 9275307)
// Lambert1 with (0771000 ; 0779150 ; 1240490 ; 1237440)


module.exports = {
  extractPoint,
  extractPolygon
};

