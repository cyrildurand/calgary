import React from 'react';

export default class AdditionalInformation extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">ALTITUDE DE DÉPART</div>
            <div className="col">1650 mètres</div>
            <div className="col">DIFFICULTÉ :</div>
            <div className="col">TD</div>
          </div>
          <div className="row">
            <div className="col">ALTITUDE D ARRIVÉE</div>
            <div className="col">1850 mètres</div>
            <div className="col">LONGUEUR :</div>
            <div className="col"> 800 mètres</div>
          </div>
          <div className="row">
            <div className="col">DÉNIVELÉ : </div>
            <div className="col">200 mètres </div>
            <div className="col">PRIX :</div>
            <div className="col">Gratuit</div>
          </div>
        </div>

        <div>
          <h4>TYPE DE VIA FERRATA</h4>
          <p>Année 1998 : Beaucoup de barreaux - Peu de contact rocher</p>
        </div>
        <div>
          <h4>HORAIRES</h4>
          <p>Aller / Retour : 2h15</p>
        </div>
        <div>
          <h4>Plus d infos</h4>
          <p>Office du Tourisme des Orres - Tel : 04 92 44 01 61 - http://www.lesorres.com</p>
        </div>
      </>
    );
  }
}
