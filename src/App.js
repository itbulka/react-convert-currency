import React, {useEffect, useState} from "react";
import * as api from './api/api';
import SelectBlock from "./Components/SelectBlock";
import TableCurrency from "./Components/TableCurrency";
import {createArrayOfValutes} from "./helpers/valutesMethod";
import {Box, Typography} from "@mui/material";

function App() {

    const [valutes, setValutes] = useState([])
    const [selectedValue, setSelectedValue] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        api.getValutes()
            .then(valute => setValutes(createArrayOfValutes(valute)))
            .catch(err => setError(err));
    }, [])

  return (
      <div>
          { error !== ''
              ?
              <Typography variant="h2" sx={{ color: 'text.secondary', textAlign: 'center' }}>{error}</Typography>
              :
              <Box>
                  <SelectBlock currences={valutes} value={selectedValue} onChange={value => setSelectedValue(value)}/>
                  <TableCurrency currences={valutes} selectedValue={selectedValue}/>
              </Box>
          }
      </div>
  );
}

export default App;
