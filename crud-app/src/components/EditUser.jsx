import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { editUser, getUser } from '../service/api.js'
import { useNavigate, useParams } from 'react-router-dom'

const Container = styled(FormGroup)`
   width: 50%;
   margin: 5% auto 0 auto;
   & > div {
       margin: 20px
   }
`

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () => {

    const [user, setUser] = useState(defaultValue);
    const { name, username, email, phone } = user;

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      loadUserDetails();
    },[])
    
    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);

    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all')
    }

   const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        // console.log(user);
    }

    
    return (
        <Container>
        
        <Typography variant = 'h4'>Edit Information</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "name" value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "username" value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "email" value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "phone" value={phone}  />
            </FormControl> 
            <FormControl>
                <Button variant= "contained" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
} 

export default EditUser