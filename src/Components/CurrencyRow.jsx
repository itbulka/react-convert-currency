import React from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const CurrencyRow = (props) => {
    return (
        <TableRow>
            <TableCell align="left" sx={{}}>{props.currency.name}</TableCell>
            <TableCell align="right">{props.currency.value}</TableCell>
            <TableCell align="right">{props.currency.code}</TableCell>
            <TableCell align="right">{props.currency.rate}</TableCell>
        </TableRow>
    );
};

export default CurrencyRow;