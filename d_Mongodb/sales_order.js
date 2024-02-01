db.salesOrder.insertOne({
    OrderNo: "O19001",
    ClientNo: "C00001",
    OrderDate: "12-Jan-2004",
    SalesmanNo: "S00001",
    DelyType: "F",
    BillYN: "N",
    DelyDate: "20-July-2004",
    OrderStatus: "In Process"
});

db.salesOrder.insertMany([
    {
        OrderNo: "O19002",
        ClientNo: "C00002",
        OrderDate: "25-Jan-2004",
        SalesmanNo: "S00002",
        DelyType: "P",
        BillYN: "N",
        DelyDate: "27-July-2004",
        OrderStatus: "Cancelled"
    },
    {
        OrderNo: "O46865",
        ClientNo: "C00003",
        OrderDate: "18-Feb-2004",
        SalesmanNo: "S00003",
        DelyType: "F",
        BillYN: "Y",                                        
        DelyDate: "20-Feb-2004",
        OrderStatus: "Fullfilled"
    },
    {
        OrderNo: "O19003",
        ClientNo: "C00001",
        OrderDate: "03-Apr-2004",
        SalesmanNo: "S00001",
        DelyType: "F",
        BillYN: "Y",
        DelyDate: "07-Apr-2004",
        OrderStatus: "Fullfilled"
    },
    {
        OrderNo: "O46866",
        ClientNo: "C00004",
        OrderDate: "20-May-2004",
        SalesmanNo: "S00002",
        DelyType: "P",
        BillYN: "N",
        DelyDate: "22-May-2004",
        OrderStatus: "Cancelled"
    },
    {
        OrderNo: "O19008",
        ClientNo: "C00005",
        OrderDate: "24-May-2004",
        SalesmanNo: "S00004",
        DelyType: "F",
        BillYN: "N",
        DelyDate: "26-July-2004",
        OrderStatus: "In Process"
    }
]);



db.sales_orderDetail.insertMany([
    {
        OrderNo: "O19001",
        ProductNo: "P00001",
        QtyOrdered: 4,
        QtyDisp: 4,
        ProductRate: 525
    },
    {
        OrderNo: "O19001",
        ProductNo: "P07965",
        QtyOrdered: 2,
        QtyDisp: 1,
        ProductRate: 8400
    },
    {
        OrderNo: "O19001",
        ProductNo: "P07885",
        QtyOrdered: 2,
        QtyDisp: 1,
        ProductRate: 5250
    },
    {
        OrderNo: "O19002",
        ProductNo: "P00001",
        QtyOrdered: 10,
        QtyDisp: 0,
        ProductRate: 525
    },
    {
        OrderNo: "O46865",
        ProductNo: "P07868",
        QtyOrdered: 3,
        QtyDisp: 3,
        ProductRate: 3150
    },
    {
        OrderNo: "O46865",
        ProductNo: "P07885",
        QtyOrdered: 3,
        QtyDisp: 1,
        ProductRate: 5250
    },
    {
        OrderNo: "O46865",
        ProductNo: "P00001",
        QtyOrdered: 10,
        QtyDisp: 10,
        ProductRate: 525
    },
    {
        OrderNo: "O46865",
        ProductNo: "P0345",
        QtyOrdered: 4,
        QtyDisp: 4,
        ProductRate: 1050
    },
    {
        OrderNo: "O19003",
        ProductNo: "P03453",
        QtyOrdered: 2,
        QtyDisp: 2,
        ProductRate: 1050
    },
    {
        OrderNo: "O19003",
        ProductNo: "P06734",
        QtyOrdered: 1,
        QtyDisp: 1,
        ProductRate: 12000
    },
    {
        OrderNo: "O46866",
        ProductNo: "P07965",
        QtyOrdered: 1,
        QtyDisp: 0,
        ProductRate: 8400
    },
    {
        OrderNo: "O46866",
        ProductNo: "P07975",
        QtyOrdered: 1,
        QtyDisp: 0,
        ProductRate: 1050
    },
    {
        OrderNo: "O19008",
        ProductNo: "P00001",
        QtyOrdered: 10,
        QtyDisp: 5,
        ProductRate: 525
    },
    {
        OrderNo: "O19008",
        ProductNo: "P07975",
        QtyOrdered: 5,
        QtyDisp: 5,
        ProductRate: 1050
    }
]);


db.salesOrder.aggregate([
    {
        $lookup: {
               from: "client_masters",
               localField: "ClientNo",
               foreignField: "ClientNo",
               as: "ClientNo"
             }
    },
    {
        $lookup: {
               from: "salesman_master",
               localField: "SalesmanNo",
               foreignField: "SalesmanNo",
               as: "SalesmanNo"
             }
    },
    {
        $lookup: {
               from: "sales_orderDetail",
               localField: "OrderNo",
               foreignField: "OrderNo",
               as: "Order"
             }
    },
    {
        $lookup: {
               from: "product_masters",
               localField: "sales_orderDetail.ProductNo",
               foreignField: "ProductNo",
               as: "No"
             }
    }
    ]);