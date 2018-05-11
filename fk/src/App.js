import React, { Component } from 'react'
import './js/fontawesome-all.js'
import './styles/styles.css'

class App extends Component {
  render() {
    return (
      <div>
      <div class="w3-display-container">
        <div class="w3-bar w3-xlarge w3-white w3-padding w3-fix-menu">
            <div class="w3-dropdown-hover w3-fix-menu">
              <button class="w3-button w3-white w3-text-blue w3-hover-blue w3-button-white">
                <i class="fas fa-align-justify"></i>
              </button>
              <div class="w3-dropdown-content w3-bar-block w3-card-4 w3-blue w3-xlarge w3-fix-menu">
                <a href="/html/fk/blogi.html" class="w3-bar-item w3-button w3-hover-sand">
                  <i class="far fa-newspaper w3-margin-right"></i>Blogi</a>
                <a href="/html/fk/mitaihmetta.html" class="w3-bar-item w3-button w3-hover-sand">
                  <i class="fas fa-question-circle w3-margin-right"></i>Mikä on FisuKortti</a>
                <a href="/html/fk/kontakti.html" class="w3-bar-item w3-button w3-hover-sand">
                  <i class="fas fa-envelope-open w3-margin-right"></i>Yhteystiedot</a>
                <a href="/html/fk/tos.html" class="w3-bar-item w3-button w3-hover-sand">
                  <i class="fas fa-unlock-alt w3-margin-right"></i>Käyttöehdot</a>
                <a href="facebook.com" class="w3-bar-item w3-button w3-hover-sand w3-hide-medium w3-hide-large">
                  <i class="fab fa-facebook-square w3-margin-right w3-hide-medium w3-hide-large"></i>facebook</a>
                <a href="instagram.com" class="w3-bar-item w3-button w3-hover-sand w3-hide-large w3-hide-medium">
                  <i class="fab fa-instagram w3-margin-right w3-hide-large w3-hide-medium"></i>instagram</a>
                <div class="w3-bar-item">
                  <span class="">
                    <i class="far fa-copyright" style={{marginRight:'5'}}></i>FisuKortti</span>
                </div>
              </div>
            </div>
  
            <a href="/html/fk/index.html">
              <span class="w3-bar-item w3-display-middle w3-fix-menu w3-text-blue">FisuKortti</span>
            </a>
            <a href="facebppk.com" class="w3-bar-item w3-right w3-button w3-hover-blue w3-hide-small w3-text-blue">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="instagram.com" class="w3-bar-item w3-right w3-button w3-hover-blue w3-hide-small w3-text-blue">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="kirjaudu.html" class="w3-bar-item w3-right w3-button w3-hover-blue w3-fix-menu w3-text-blue">
              <i class="fas fa-user"></i>
            </a>
        </div>
      </div>
    
    
    <div class="w3-border"></div>
      
      <div className="w3-col w3-search-loop w3-resize-search-bar w3-hide-small w3-hide-medium" style={{width:'6%'}}>
        <button className="w3-button w3-hover-white">
          <span className="w3-text-blue w3-resize-search-icon">
            <i className="fas fa-search w3-resize-search-icon" style={{marginRight:'5'}}></i> Hae</span>
        </button>
      </div>
      <div className="w3-col w3-search-loop w3-resize-search-bar w3-hide-small w3-hide-laptop" style={{width:'6%'}}>
        <button className="w3-button w3-hover-white">
          <i className="fas fa-search w3-resize-search-icon w3-text-blue"></i>
        </button>
      </div>

    <div className="w3-hide-medium w3-hide-laptop" style={{textAlign:'center', marginRight:'15%', marginBottom:'-5'}}>
      <button className="w3-button w3-hover-white">
        <span className="w3-text-blue w3-resize-search-icon">
          <i className="fas fa-search w3-resize-search-icon" style={{marginRight:'5'}}></i> Hae</span>
      </button>
    </div>
  

  <div className="w3-main" style={{marginTop:'10px', marginBottom:'10px'}}>
    <div className="w3-row-padding w3-margin-top w3-padding-top">
      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/sebastian-sandqvist-418547-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Harvaluoto, Kaarina</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-text-blue" style={{marginRight:'5px'}}></i> Hauki, kuha, ahven, kuorre, lahna</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-amber w3-padding" style={{textAlign:'center'}}>
            <i className="far fa-d-card" style={{}}></i>Luvanvarainen

          </div>
        </div>
      </div>
      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/andrey-trusov-15106-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Unelmajärvi, Espoo</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven, taimen, karppi</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-red w3-padding" style={{textAlign:'center'}}>
            <i className="fas fa-exclamation-tiangle" style={{}}></i>Rauhoitettu

          </div>
        </div>
      </div>
      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/ravi-pinisetti-69440-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Ahvenkoski, Loviisa</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven, taimen, karppi</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-blue w3-padding" style={{textAlign:'center'}}>
            <i className="far fa-d-card" style={{}}></i>Kalastuksenhoitomaksu

          </div>
        </div>
      </div>
      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/arto-marttinen-117445-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Berglund, Inkoo</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven, taimen, karppi</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-amber w3-padding" style={{textAlign:'center'}}>
            <i className="far fa-d-card" style={{}}></i>Luvanvarainen

          </div>
        </div>
      </div>
      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/sebastian-sandqvist-418547-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Harvaluoto, Kaarina</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-amber w3-padding" style={{textAlign:'center'}}>
            <i className="far fa-d-card" style={{}}></i>Luvanvarainen

          </div>
        </div>
      </div>
      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/andrey-trusov-15106-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Unelmajärvi, Espoo</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven, taimen, karppi</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-red w3-padding" style={{textAlign:'center'}}>
            <i className="fas fa-exclamation-tiangle" style={{}}></i>Rauhoitettu

          </div>
        </div>
      </div>
      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/ravi-pinisetti-69440-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Ahvenkoski, Loviisa</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven, taimen, karppi</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-blue w3-padding" style={{textAlign:'center'}}>
            <i className="far fa-d-card" style={{}}></i>Kalastuksenhoitomaksu

          </div>
        </div>
      </div>
      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/arto-marttinen-117445-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Berglund, Inkoo</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven, taimen, karppi</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-amber w3-padding" style={{textAlign:'center'}}>
            <i className="far fa-d-card" style={{}}></i>Luvanvarainen

          </div>
        </div>
      </div>
      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/sebastian-sandqvist-418547-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Harvaluoto, Kaarina</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-amber w3-padding" style={{textAlign:'center'}}>
            <i className="far fa-d-card" style={{}}></i>Luvanvarainen

          </div>
        </div>
      </div>

      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/andrey-trusov-15106-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Unelmajärvi, Espoo</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven, taimen, karppi</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-red w3-padding" style={{textAlign:'center'}}>
            <i className="fas fa-exclamation-tiangle" style={{}}></i>Rauhoitettu

          </div>
        </div>
      </div>

      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/ravi-pinisetti-69440-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Ahvenkoski, Loviisa</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven, taimen, karppi</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-blue w3-padding" style={{textAlign:'center'}}>
            <i className="far fa-d-card" style={{}}></i>Kalastuksenhoitomaksu

          </div>
        </div>
      </div>

      <div className="w3-quarter w3-margin-bottom w3-tablet-view">
        <a href="/html/fk/place.html" className="w3-grayscale-min">
          <img src="/html/images/arto-marttinen-117445-unsplash.jpg" alt="John" style={{width:'100%'}}/>
        </a>
        <div className="w3-container">
          <h3>
            <a href="/html/fk/place.html" style={{textDecoration: 'none'}}>
              <i className="fas fa-location-arrow w3-margin-right w3-text-blue"></i>Berglund, Inkoo</a>
          </h3>
          <p className="w3-opacity">
            <i className="fas fa-hand-peace w3-tet-blue" style={{}}></i> Hauki, kuha, ahven, taimen, karppi</p>
          <p>
            <i className="fas fa-exclamation w3-tet-blue" style={{}}></i> Aivan jäätäviä mörköjä koko järvi täynnä. Renkailu kielletty koska hauet syöneet varomattomia...</p>
          <div className="w3-panel w3-amber w3-padding" style={{textAlign:'center'}}>
            <i className="far fa-d-card" style={{}}></i>Luvanvarainen

          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    )
  }
}

export default App
