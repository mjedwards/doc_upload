import { useState, useEffect } from 'react';

const useCheckLocation = () => {
    const [allGood, setAllGood] = useState(false);


    useEffect(() => {
        setAllGood(Math.random() >= 0.5);
      }, []);
    
      return allGood;
}

export default useCheckLocation;
