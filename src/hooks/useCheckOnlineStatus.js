import React, { useEffect, useState } from 'react'

const useCheckOnlineStatus = () => {
  const [isOnline,setIsOnline] = useState(false);

  useEffect(()=>{
    //check online functionalities
  },[]);
  return isOnline
}

export default useCheckOnlineStatus;