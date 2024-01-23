db.product_masters.insertMany([
    {
        ProductNo: 'P00001',
        Description: 'T-Shirt',
        ProfitPercentage: 5,
        UnitMeasure: 'Piece',
        QtyOnHand: 200,
        ReorederLv1: 50,
        SellPrice: 350,
        CostPrice: 250
    },
    {
        ProductNo: 'P0345',
        Description: 'Shirt',
        ProfitPercentage: 6,
        UnitMeasure: 'Piece',
        QtyOnHand: 150,
        ReorederLv1: 50,
        SellPrice: 500,
        CostPrice: 350
    },
    {
        ProductNo: 'P06734',
        Description: 'Cotton-Jeans',
        ProfitPercentage: 5,
        UnitMeasure: 'Piece',
        QtyOnHand: 100,
        ReorederLv1: 20,
        SellPrice: 600,
        CostPrice: 450
    },
    {
        ProductNo: 'P07865',
        Description: 'Jeans',
        ProfitPercentage: 5,  
        UnitMeasure: 'Piece',
        QtyOnHand: 100,
        ReorederLv1: 20,
        SellPrice: 750,
        CostPrice: 500
    },
    {
        ProductNo: 'P07868',
        Description: 'Trousers',
        ProfitPercentage: 2,
        UnitMeasure: 'Piece',
        QtyOnHand: 150,
        ReorederLv1: 50,
        SellPrice: 850,
        CostPrice: 500
    },
    {
        ProductNo: 'P07865',
        Description: 'Pull-Overs',
        ProfitPercentage: 2.5,
        UnitMeasure: 'Piece',
        QtyOnHand: 80,
        ReorederLv1: 30,
        SellPrice: 700,
        CostPrice: 450
    },
    {
        ProductNo: 'P07965',
        Description: 'Denim-Shirt',
        ProfitPercentage: 4,
        UnitMeasure: 'Piece',
        QtyOnHand: 100,
        ReorederLv1: 40,
        SellPrice: 350,
        CostPrice: 250
    },
    {
        ProductNo: 'P07975',
        Description: 'Lycra-Tops',
        ProfitPercentage: 5,
        UnitMeasure: 'Piece',
        QtyOnHand: 70,
        ReorederLv1: 30,
        SellPrice: 300,
        CostPrice: 175
    },
    {
        ProductNo: 'P08865',
        Description: 'Skirts',
        ProfitPercentage: 5,
        UnitMeasure: 'Piece',
        QtyOnHand: 75,
        ReorederLv1: 30,
        SellPrice: 450,
        CostPrice: 300
    }
]);



db.product_masters.find();
db.product_masters.find({ReorederLv1: 50});
db.product_masters.find({ReorederLv1: 50, QtyOnHand: 150});
db.product_masters.findOne({ReorederLv1: 50});