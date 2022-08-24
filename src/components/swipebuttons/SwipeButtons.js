import React from 'react'
import "./swipebuttons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
        <IconButton className='swipeButtons_repeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_star'>
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_right'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_lightining'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons