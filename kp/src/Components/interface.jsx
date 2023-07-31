import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function Interface(){
    const [city,setCity] = useState('');
    const navigate = useNavigate();

    

    function handleClick(){
        navigate(`/city/${city}`);
    }

    function handleChange(e){
        setCity(e.target.value)
    }
    console.log("rendering")
    return (
        <Box 
            style={{
                width:'50vw',
                padding : '20px',
                border: '1px solid grey',
                borderRadius: '3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems : 'center',
                gap: '15px'
        }}>
            <Box>
            <Typography variant='h3'>React Weather App</Typography>
            </Box>

            <Box component="img" 
            src='https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Clouds'
            sx={{
                width: '60%',
                height:'60%' 
            }}/>

            <Box>
            <Typography variant='h4'>Find Weather of your city</Typography>
            </Box>

            <Box sx={{
                    display:'flex',
                    flexDirection: 'row',
                    border: '1px solid black',
                    gap: '10px'
                    }}  >
                <TextField label='City' onChange={(e) => handleChange(e)} />
                <Button variant='contained' onClick={handleClick}>
                    Search
                </Button>

            </Box>

            

        </Box>
    )

}