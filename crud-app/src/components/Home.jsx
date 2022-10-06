import { Box, Typography, styled } from '@mui/material';

import image1 from '../Assets/Images/CRUD2.jpg';
import image2 from '../Assets/Images/CRUD1.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const Home = () => {

    return (
        <Header>
            <Typography variant="h4" style={{display: 'flex', justifyContent:'center', alignItems:'center', fontWeight: 'bold' }}>Welcome to CRUD Application</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={image1} />
                <Image src={image2} />
            </Box>
        </Header>
    )
}

export default Home;