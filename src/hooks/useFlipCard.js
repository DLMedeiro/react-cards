import React, {useState} from 'react'

const useFlipCard = (initialState) => {
    const [isFacingUp, setIsFacingUp] = useState(initialState);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    }
    return [isFacingUp, flipCard]
}

export default useFlipCard;