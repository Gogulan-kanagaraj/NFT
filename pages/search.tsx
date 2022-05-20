import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Grid, Stack, Button, Menu, MenuItem, alpha, InputBase, styled } from "@mui/material";
import React from 'react';
const SearchBar = () => {
    const Search = styled('div')(({ theme }) => ({
        justifyContent: 'center',
        position: 'absolute',
        border: "2px solid black",
        borderRadius: '50px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '40%',
        // [theme.breakpoints.up('sm')]: {
        //   marginLeft: theme.spacing(3),
        //   width: 'auto',
        // },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [data, setData] = React.useState<null | string>("Filter")
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e: string) => {
        setAnchorEl(null);
        setData(e);
    };
    return (
        <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
            <Grid container sx={{ justifyContent: "center" }} spacing={2}>
                <Grid item xs={12} sm={8} md={6} lg={9}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Grid>
                <Grid item xs={12} sm={4} md={6} lg={3}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="secondary" onClick={handleClick} startIcon={<FilterListIcon />}>
                            {data}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => handleClose("price low to high")}>price low to high</MenuItem>
                            <MenuItem onClick={() => handleClose("price high to low")}>price high to low"</MenuItem>
                        </Menu>
                    </Stack></Grid>
            </Grid>
        </Box>
    );
}
export default SearchBar;