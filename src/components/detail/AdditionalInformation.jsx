// @flow
import React from 'react';

type Props = {
  +difficulty: string,
  +duration: {
    +roundTrip?: string,
    +endToParking?: string,
    +climbing?: string,
    +parkingToStart?: string,
  },
  +price: number,
  +year?: number,
};
export default class AdditionalInformation extends React.Component<Props> {
  static defaultProps = {
    price: 0,
  };

  render() {
    let { difficulty, price, duration } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">ALTITUDE DE DÉPART</div>
            <div className="col">1650 mètres</div>
            <div className="col">DIFFICULTÉ :</div>
            <div className="col">{difficulty}</div>
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
            <div className="col">{price == 0 ? 'gratuit' : `${price.toFixed(2)}€`}</div>
          </div>
        </div>

        <div>
          <h4>TYPE DE VIA FERRATA</h4>
          <p>Année 1998 : Beaucoup de barreaux - Peu de contact rocher</p>
        </div>
        <div>
          <h4>HORAIRES</h4>
          <p>Aller / Retour : {duration.roundTrip}</p>
        </div>
        <div>
          <h4>Plus d infos</h4>
          <p>Office du Tourisme des Orres - Tel : 04 92 44 01 61 - http://www.lesorres.com</p>
        </div>
      </>
    );
  }
}
