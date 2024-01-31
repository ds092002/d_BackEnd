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
        DelyDate: "",                                       
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