import React from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const CurrencyRow = ({currency, selectedValue}) => {

    return (
        <TableRow>
            <TableCell align="left">{currency.Name}</TableCell>
            <TableCell align="right">{currency.Nominal}</TableCell>
            <TableCell align="right">{currency.CharCode}</TableCell>
            <TableCell align="right">{!selectedValue ? 'Не выбрано' : (currency.Value / selectedValue).toFixed(4)}</TableCell>
        </TableRow>
    );

};

export default CurrencyRow;