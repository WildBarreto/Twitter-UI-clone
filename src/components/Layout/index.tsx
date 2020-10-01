import React from 'react';

import Main from '../Main';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
      <Container>
          <Wrapper>
              {/*<Menubar>*/}
                  <Main>

                  </Main>
              {/*</Menubar>*/}
          </Wrapper>
      </Container>
  );
}

export default Layout;