import React, {useState, useEffect} from 'react'
import uuid from "uuid";
import axios from "axios";

const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const addCard = async () => {
      const response = await axios.get(url);
      setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard]
}

export default useAxios;