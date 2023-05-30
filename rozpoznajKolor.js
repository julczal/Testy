function rozpoznajKolor(kodKoloru) {
    kodKoloru = kodKoloru.toLowerCase();
    if (kodKoloru.charAt(0) === '#' && kodKoloru.length === 7) {
      var czerwony = parseInt(kodKoloru.substr(1, 2), 16);
      var zielony = parseInt(kodKoloru.substr(3, 2), 16);
      var niebieski = parseInt(kodKoloru.substr(5, 2), 16);
      var nazwaKoloru = rozpoznajKolorPoSkladowych(czerwony, zielony, niebieski);
      if (nazwaKoloru !== null) {
        return nazwaKoloru;
      }
    }
    return "Nieznany kolor";
  }
  function rozpoznajKolorPoSkladowych(czerwony, zielony, niebieski) {
    var kolory = {
      czarny: [0, 0, 0],
      biały: [255, 255, 255],
      czerwony: [255, 0, 0],
      zielony: [0, 255, 0],
      niebieski: [0, 0, 255]
    };
    for (var nazwaKoloru in kolory) {
      if (kolory.hasOwnProperty(nazwaKoloru)) {
        var skladoweKoloru = kolory[nazwaKoloru];
        if (
          czerwony === skladoweKoloru[0] &&
          zielony === skladoweKoloru[1] &&
          niebieski === skladoweKoloru[2]
        ) {
          return nazwaKoloru;
        }
      }
    }
    return null;
  }

module.exports = rozpoznajKolor;
  