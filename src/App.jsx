import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import './scss/styles.scss'

class App extends React.Component {
    render() {
      return (
        <div className='appContainer'>
          <MainContainer></MainContainer>
        </div>
      )
    }
  }

export default App;
