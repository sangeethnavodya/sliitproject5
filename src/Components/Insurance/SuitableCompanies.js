import jsPDF from "jspdf";
import React from "react";

function SuitableCompanies(props) {
    function redirect(url){
        window.location.href = url;
    }
    const { data } = props;
    const tableRows = data.map((row, index) => (
        <tr key={index} className='shop-table-rows'>
            <td className='table-shop-td' onClick={()=>redirect(row.url)}>
                <img src={row.image.url} alt="product" width="100" height="100" />
            </td>
            <td className='table-shop-td-name' >{row.title}</td>

        </tr>
    ));

 

    return (
        <div id='shop-main-div'>
            <table className='shop-main-table' >
                <thead className='shop-main-head'>
                    <tr className='shop-tr'>
                        <th className='shop-th'>Logo</th>
                        <th className='shop-th'>Insurance Company</th>
                    </tr >
                </thead>

                <tbody>
                    {tableRows}
                </tbody>

            </table>
            
        </div>
    );
}

export default SuitableCompanies;
