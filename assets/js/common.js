/**
 * Converts {UniqueBuildingIdentification.v3.CodeArea} into GeoJSON object.
 *
 * @param {UniqueBuildingIdentification.v3.CodeArea} codeArea The code area.
 * @return {Object} The GeoJSON object.
 */
function toGeoJSON(codeArea) {
  var features = [];

  // Centroid.
  features.push({
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [codeArea.centerOfMass.longitudeLo, codeArea.centerOfMass.latitudeLo],
          [codeArea.centerOfMass.longitudeLo, codeArea.centerOfMass.latitudeHi],
          [codeArea.centerOfMass.longitudeHi, codeArea.centerOfMass.latitudeHi],
          [codeArea.centerOfMass.longitudeHi, codeArea.centerOfMass.latitudeLo],
          [codeArea.centerOfMass.longitudeLo, codeArea.centerOfMass.latitudeLo],
        ],
      ],
    },
    "properties": {
      "name": "centroid",
    },
  });

  // Bounding box.
  //
  // Note: Always included to represent the building footprint.
  features.push({
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [codeArea.longitudeLo, codeArea.latitudeLo],
          [codeArea.longitudeLo, codeArea.latitudeHi],
          [codeArea.longitudeHi, codeArea.latitudeHi],
          [codeArea.longitudeHi, codeArea.latitudeLo],
          [codeArea.longitudeLo, codeArea.latitudeLo],
        ],
      ],
    },
    "properties": {
      "name": "bbox",
    },
  });

  // North extent.
  //
  // Note: Not included if north extent of bounding box coincides with that of centroid.
  if (codeArea.centerOfMass.latitudeHi != codeArea.latitudeHi) {
    features.push({
      "type": "LineString",
      "coordinates": [
        [codeArea.centerOfMass.longitudeLo + ((codeArea.centerOfMass.longitudeHi - codeArea.centerOfMass.longitudeLo) / 2), codeArea.centerOfMass.latitudeHi],
        [codeArea.centerOfMass.longitudeLo + ((codeArea.centerOfMass.longitudeHi - codeArea.centerOfMass.longitudeLo) / 2), codeArea.latitudeHi],
      ],
      "properties": {
        "name": "extent-north",
      },
    });
  }

  // South extent.
  //
  // Note: Not included if south extent of bounding box coincides with that of centroid.
  if (codeArea.centerOfMass.latitudeLo != codeArea.latitudeLo) {
    features.push({
      "type": "LineString",
      "coordinates": [
        [codeArea.centerOfMass.longitudeLo + ((codeArea.centerOfMass.longitudeHi - codeArea.centerOfMass.longitudeLo) / 2), codeArea.centerOfMass.latitudeLo],
        [codeArea.centerOfMass.longitudeLo + ((codeArea.centerOfMass.longitudeHi - codeArea.centerOfMass.longitudeLo) / 2), codeArea.latitudeLo],
      ],
      "properties": {
        "name": "extent-south",
      },
    });
  }

  // East extent.
  //
  // Note: Not included if east extent of bounding box coincides with that of centroid.
  if (codeArea.centerOfMass.longitudeHi != codeArea.longitudeHi) {
    features.push({
      "type": "LineString",
      "coordinates": [
        [codeArea.centerOfMass.longitudeHi, codeArea.centerOfMass.latitudeLo + ((codeArea.centerOfMass.latitudeHi - codeArea.centerOfMass.latitudeLo) / 2)],
        [codeArea.longitudeHi, codeArea.centerOfMass.latitudeLo + ((codeArea.centerOfMass.latitudeHi - codeArea.centerOfMass.latitudeLo) / 2)],
      ],
      "properties": {
        "name": "extent-east",
      },
    });
  }

  // West extent.
  //
  // Note: Not included if west extent of bounding box coincides with that of centroid.
  if (codeArea.centerOfMass.longitudeLo != codeArea.longitudeLo) {
    features.push({
      "type": "LineString",
      "coordinates": [
        [codeArea.centerOfMass.longitudeLo, codeArea.centerOfMass.latitudeLo + ((codeArea.centerOfMass.latitudeHi - codeArea.centerOfMass.latitudeLo) / 2)],
        [codeArea.longitudeLo, codeArea.centerOfMass.latitudeLo + ((codeArea.centerOfMass.latitudeHi - codeArea.centerOfMass.latitudeLo) / 2)],
      ],
      "properties": {
        "name": "extent-west",
      },
    });
  }

  return {
    "type": "FeatureCollection",
    "features": features,
  };
}
