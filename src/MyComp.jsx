import React from 'react';

export class MyComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: {}
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8080/api/hh")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
            <div>
                {items.id}<br/>
                {items.name}
            </div>
        );
      }
    }
  }
