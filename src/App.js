import React, {useEffect, useState} from "react";
import './index.css';
import SelectBlock from "./Components/SelectBlock";
import TableCurrency from "./Components/TableCurrency";
import * as api from './api/api';
import {createArrayOfValutes} from "./helpers/valutesMethod";

function App() {

    const [valutes, setValutes] = useState([])
    const [selectedValue, setSelectedValue] = useState(0);

    useEffect(() => {
        api.getValutes()
            .then(valute => setValutes(createArrayOfValutes(valute)))
            .catch(err => console.log(err));
    }, [])

  return (
    <div>
        <SelectBlock currences={valutes} value={selectedValue} onChange={value => setSelectedValue(value)}/>
        <TableCurrency currences={valutes} selectedValue={selectedValue}/>
    </div>
  );
}

export default App;
