import React, {useEffect, useState} from "react";
import * as api from './api/api';
import SelectBlock from "./Components/SelectBlock";
import TableCurrency from "./Components/TableCurrency";
import {createArrayOfValutes} from "./helpers/valutesMethod";
import {Box} from "@mui/material";

function App() {

    const [valutes, setValutes] = useState([])
    const [selectedValue, setSelectedValue] = useState(0);

    useEffect(() => {
        api.getValutes()
            .then(valute => setValutes(createArrayOfValutes(valute)))
            .catch(err => console.log(err));
    }, [])

  return (
    <Box>
        <SelectBlock currences={valutes} value={selectedValue} onChange={value => setSelectedValue(value)}/>
        <TableCurrency currences={valutes} selectedValue={selectedValue}/>
    </Box>
  );
}

export default App;
