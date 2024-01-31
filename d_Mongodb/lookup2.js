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
    }
    ]);