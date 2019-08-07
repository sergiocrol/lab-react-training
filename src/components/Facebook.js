import React, { Component } from 'react';
import profiles from '../data/berlin.json';

class Facebook extends Component {
  state = {
    selectedCountry: '',
  }

  selectedCountry = country => {
    const newCountry = country;
    this.setState({
      selectedCountry: newCountry
    })
  }

  bgc = country => {
    return { backgroundColor: (this.state.selectedCountry === country) ? 'lightblue' : 'white' }
  }

  countryButtons = () => {
    return [...new Set(profiles.map(country => { return country.country }))]
      .map((country, index) => {
        return (
          <button key={index} onClick={() => { this.selectedCountry(country) }} >{country}</button>
        )
      })
  }

  render() {
    return (
      < div >
        {this.countryButtons()}
        {
          profiles.map((profile, index) => {
            return (
              <div key={index} className="profileCard" style={this.bgc(profile.country)}>
                <img src={profile.img} alt="" />
                <section>
                  <p><span>First name:</span> {profile.firstName}</p>
                  <p><span>Last name:</span> {profile.lastName}</p>
                  <p><span>Country:</span> {profile.country}</p>
                  <p><span>Type:</span> {(profile.isStudent) ? 'Student' : 'Teacher'}</p>
                </section>
              </div>
            )
          })
        }
      </div >
    )
  }
}

export default Facebook;