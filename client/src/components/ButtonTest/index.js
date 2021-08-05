import React from 'react'
import Button from '@material-ui/core/Button'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const CardTest = () => {

  return (
    <Button variant="contained" color="primary" className="m-5" disableElevation>
      <AccessAlarmIcon />Disable elevation
    </Button>
  )
}

export default CardTest
