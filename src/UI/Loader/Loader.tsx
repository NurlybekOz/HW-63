import {Box, CircularProgress} from "@mui/material";


const LoaderL = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
};

export default LoaderL;