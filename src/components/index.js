
//This is your top level React component, you may change everything

import React from 'react'
import logo from '../assets/spotim-logo.jpg'
import {Container, Image} from 'semantic-ui-react'
import styled from 'styled-components';

const Logo = styled.div`
      img{
	width: 80px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;      
      }
      
`;


class App extends React.PureComponent {
  render() {
    return <Container className={'spotim-header'}>
      <div className={'spotim-title'}>
        Welcome to the CPE490 Chat App!
      </div>
      <div>
        <Logo>
          <Image size={'tiny'} src={logo}/>
        </Logo>

      </div>
    </Container>
  }
}

export default App;
