import React from 'react'


import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import './Header.css'
import logo from '../logo.png'
import { ExpandMore, ForumOutlined, NotificationsActive } from '@material-ui/icons';


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="logo"/>

                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__center">
                <Tooltip title="Home">
                    <div className="header__option header__option--active">
                            <HomeIcon fontSize="large"/>                     
                    </div>
                </Tooltip>

                <Tooltip title="Home" >
                    <div className="header__option">
                            <FlagIcon fontSize="large"/>
                    </div>
                </Tooltip>

                <Tooltip title="Watch">
                    <div className="header__option">
                            <SubscriptionsIcon fontSize="large"/>
                    </div>
                </Tooltip>

                {/* <Tooltip title="Home"> */}
                    <div className="header__option">
                            <StorefrontIcon fontSize="large"/>
                    </div>
                {/* </Tooltip> */}

                <Tooltip title="Friends">
                    <div className="header__option">
                            <SupervisedUserCircleIcon fontSize="large"/> 
                    </div>
                </Tooltip>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Hassan</h4>
                </div>

                <Tooltip title="Create">
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Messages">
                    <IconButton>
                        <ForumOutlined />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Notifications">
                    <IconButton>
                        <NotificationsActive />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Account">
                    <IconButton>
                        <ExpandMore />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header
