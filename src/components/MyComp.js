import React from 'react';

export class MyComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: {},
        isSaucisse: true
      };
    }
  
    componentDidMount() {
      this.printData();
    }


    getData( path )
    {
      fetch(`https://bdgest-jkl-api.oups.net/${path}`)
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

    printData()
    {
      if(this.state.isSaucisse)
      {
        this.getData( "api/hh" )
      }
      else
      {
        this.getData("api/")
      }
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
            <div>
                {items.id}<br/>
                {items.name}
            </div>
            <input onClick={() => {
              this.setState({isSaucisse: !this.state.isSaucisse}); 
              this.printData()
            }} 
              type="button" class="button is-info" value="Bonjouir"
            />
        </div>
        );
      }
    }
  }
