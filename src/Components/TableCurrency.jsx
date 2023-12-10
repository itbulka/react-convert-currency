import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CurrencyRow from "./CurrencyRow";

const TableCurrency = ({currences, selectedValue}) => {

    return (
        <Table sx={{
            mt: 3,
            backgroundColor: '#fafafa',
            borderRadius: 1,
            boxShadow: 2,
        }}>
            <TableHead>
                <TableRow>
                    <TableCell align="left" sx={{ fontWeight: 'bold' }}>Валюта</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Единиц</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Буквенный код</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Курс</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {currences.map( currency =>
                    <CurrencyRow currency={currency} selectedValue={selectedValue} key={currency.ID}/>
                )}
            </TableBody>
        </Table>
    );

};

export default TableCurrency;