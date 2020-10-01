import React from 'react';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon,
    CakeIcon,
    Followage 
} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                {/* <EditButton outlined>Editar perfil</EditButton> */}

                <h1>Wild Barreto</h1>
                <h2>@wild_rreto</h2>

                <p>
                    Developer at <a href="www.google.com">@google</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon/>
                        Bahia, Brasil
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido 27/1997
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>1000</strong>
                    </span>
                    <span>
                        <strong>2000 </strong> Seguidores
                    </span>
                </Followage>

            </ProfileData>
        </Container>
    );
}

export default ProfilePage;