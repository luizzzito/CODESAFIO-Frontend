import {
    Typography,
    Grid,
    Container, Box, Divider
} from "@mui/material";

function ProjectInfo({ title, date, state }) {
    return (
        <Container>
            <Grid container spacing={2}  marginTop={1}>
                <Grid item xs={7}>
                    <Typography sx={{ color: '#333333', fontWeight: 'bold' }}>{title}</Typography>
                </Grid>
                <Grid item xs={4}>
                    {(state=="Rechazado") ? 
                    <Box
                    sx={{
                        backgroundColor: '#D24242',
                        width: "auto",
                        height: 25,
                        display: 'flex',
                        direction: 'column',
                        justifyContent: 'center',
                        borderRadius: 1
                    }}
                >
                    <Typography sx={{ color: 'white ' }}>{state}</Typography>
                </Box> : null}
                {(state=="Aceptado") ? 
                    <Box
                    sx={{
                        backgroundColor: '#42D27C',
                        width: "auto",
                        height: 25,
                        display: 'flex',
                        direction: 'column',
                        justifyContent: 'center',
                        borderRadius: 1
                    }}
                >
                    <Typography sx={{ color: 'white ' }}>{state}</Typography>
                </Box> : null}
                {(state=="En proceso") ? 
                    <Box
                    sx={{
                        backgroundColor: '#DED842',
                        width: "auto",
                        height: 25,
                        display: 'flex',
                        direction: 'column',
                        justifyContent: 'center',
                        borderRadius: 1
                    }}
                >
                    <Typography sx={{ color: 'white ' }}>{state}</Typography>
                </Box> : null}
                </Grid>
            </Grid>
            <Typography sx={{ color: '#565656', marginTop: 1 }}>{date}</Typography>
            <Typography sx={{ color: '#8C8C8C', marginTop: 2 }}>Descripción del proyecto aaaaaaaa</Typography>
            <Box
                        sx={{
                            backgroundColor: '#7042D2',
                            width: 100,
                            height: 25,
                            display: 'flex',
                            direction: 'column',
                            justifyContent: 'center',
                            borderRadius: 1,
                            marginTop: 2
                        }}
                    >
                        <Typography sx={{ color: 'white ' }}>Frontend</Typography>
                    </Box>
                    <Divider sx={{ py: 1 }} />   
        </Container>
    );
}

export default ProjectInfo;
