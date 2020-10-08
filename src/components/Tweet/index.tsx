import React from 'react';

import { 
    Container, 
    Retweeted, 
    RocketseatIcon, 
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Descriptition,
    ImageCotent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon

} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon/>
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar/>

              <Content>
                  <Header>
                      <strong>Rocketseat</strong>
                      <span>@Rocketseat</span>
                      <Dot/>
                      <time>27 de outubro</time>
                  </Header>

                  <Descriptition>Foguete não tem ré </Descriptition>

                  <ImageCotent/>

                  <Icons>
                      <Status>
                          <CommentIcon/>
                          20
                      </Status>

                      <Status>
                          <RetweetIcon/>
                          30
                      </Status>

                      <Status>
                          <LikeIcon/>
                          200
                      </Status>
                  </Icons>
              </Content>

          </Body>
      </Container>
  );
}

export default Tweet;