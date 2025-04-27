import Avatar from '@mui/material/Avatar';
import { cyan } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { Menu } from '@mui/material';
import { setCurrentUser, setUserTypes } from '../redux/Actions';

export const Header = () => {

    const user = useSelector(x => x.CurrentUser)
    const userTypes = useSelector(x => x.UserTypes)

    let userType = user && userTypes.length > 0 ? userTypes.find(t => t.id == user.userTypeId).description : ''
    const nav = useNavigate()
    let dis = useDispatch()

    useEffect(() => {
        dis(setUserTypes())
    }, []);

    const passHome = () => {
        nav('/Home')
    }

    const [anchorElUser, setAnchorElUser] = useState(null);
    const settings = ['החזרות', 'רכבים', 'יציאה'];


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const returns = () => {
        handleCloseUserMenu()
        nav('/UserZone/Return')
    }

    const cars = () => {
        handleCloseUserMenu()
        nav(`/${userType}Zone/Cars`)
    }

    const logout = () => {
        sessionStorage.setItem("currentUser", JSON.stringify(null))
        dis(setCurrentUser(""))
        handleCloseUserMenu()
        nav('/Home')
    }

    const login = () => {
        handleCloseUserMenu()
        nav('/LoginOrRegister/Login')
    }

    const options = () => {
        handleCloseUserMenu()
        nav('/ManagerZone/Options')
    }


    return <div className='header'>
        <img className="logo" onClick={passHome} src={`${process.env.PUBLIC_URL}/images/cars/logo-shaddow-s.png`}></img>
        {!user && <> <Tooltip title="אורח">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar id='profile' className='avatar' sx={{ bgcolor: cyan[700] }} src="/broken-image.jpg"></Avatar>
            </IconButton>
        </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >

                <MenuItem key={'return'} onClick={login}>
                    <Typography sx={{ textAlign: 'center' }}>התחברות</Typography>
                </MenuItem>

            </Menu>



        </>






















































































































































































































































































        }

        {user && <div id='profile' className='flex-row'>
            <label id='userName'>{user.name}</label>
            <Tooltip title="אזור אישי">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar className='avatar' sx={{ bgcolor: cyan[700] }}>{user.name[0]}</Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >

                <MenuItem key={'return'} onClick={returns}>
                    <Typography sx={{ textAlign: 'center' }}>החזרות</Typography>
                </MenuItem>

                {userType == 'manager' &&
                    <MenuItem key={'options'} onClick={options}>
                        <Typography sx={{ textAlign: 'center' }}>אפשרויות מנהל</Typography>
                    </MenuItem>}

                <MenuItem key={'cars'} onClick={cars}>
                    <Typography sx={{ textAlign: 'center' }}>רכבים</Typography>
                </MenuItem>

                <MenuItem key={'logout'} onClick={logout}>
                    <Typography sx={{ textAlign: 'center' }}>יציאה</Typography>
                </MenuItem>
            </Menu>




        </div>}
    </div>
}