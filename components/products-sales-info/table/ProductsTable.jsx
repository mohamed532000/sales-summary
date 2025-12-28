import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useMainCategoryData } from '@/services/client/useMainCategoryData'
import { useSubCategoryData } from '@/services/client/useSubCategoryData';
function ProductsTable({data}) {
    const {category:mainCategoryData} = useMainCategoryData();
    const {category:subCategoryData} = useSubCategoryData();
    return (
        <Table className={"p-4"}>
        <TableCaption>Products Of {mainCategoryData?.name} - {subCategoryData?.name}</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead >Item</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Sales Times</TableHead>
                <TableHead >Unit Cost</TableHead>
                <TableHead >Revinue</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                data?.products?.length >= 1
                ?
                data?.products?.map((item , index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item?.name}</TableCell>
                        <TableCell>{item?.price}</TableCell>
                        <TableCell>{item?.salesTimes}</TableCell>
                        <TableCell >{item?.unitCost}EGP</TableCell>
                        <TableCell >{item?.allSalesPrice}EGP</TableCell>
                    </TableRow>
                ))
                :
                <TableRow>
                    <TableCell className="font-medium">No Data avilable</TableCell>
                </TableRow>
            }

        </TableBody>
        </Table>
    )
}

export default ProductsTable