import React from 'react';
import NativeSelect from "@mui/material/NativeSelect";
import {Box, Typography} from "@mui/material";

const SelectBlock = ({currences, value, onChange}) => {

    return (
        <Box sx={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            gap: 1
        }}>
            <Typography variant='subtitle2' sx={{color: 'text.secondary'}}>Базовая валюта</Typography>
            <NativeSelect
                value={value}
                onChange={evt => onChange(evt.target.value)}
            >
                {<option disabled value={0}>Не выбрано</option>}
                {currences.map(currency =>
                    <option value={currency.Value} key={currency.ID}>{currency.Name}</option>
                )}
            </NativeSelect>
            <Typography variant='subtitle2' sx={{color: 'text.secondary'}}>Выберите базовую валюту</Typography>
        </Box>
    );

};

export default SelectBlock;