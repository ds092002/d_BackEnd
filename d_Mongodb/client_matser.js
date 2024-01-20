db.client_masters.insertMany([
    {
        ClientNo: 'C00001',
        Name: 'Ivan Bayross',
        Address1 : 'A/14',
        Address2 : 'Worli',
        City: 'Mumbai',
        Pincode: '400054',
        State: 'Maharashtra',
        BalDue: 15000
    },
    {
        ClientNo: 'C00002',
        Name: 'Mamta Bayross',
        Address1 : 'B2',
        Address2 : 'Chennai',
        City: 'Madras',
        Pincode: '780001',
        State: 'Tamil Nadu',
        BalDue: 0
    },
    {
        ClientNo: 'C00003',
        Name: 'Chhaya Bankar',
        Address1 : '65',
        Address2 : 'Nariman',
        City: 'Mumbai',
        Pincode: '400057',
        State: 'Maharashtra',
        BalDue: 5000
    },
    {
        ClientNo: 'C00004',
        Name: 'Ashwini Joshi',
        Address1 : 'A-28',
        Address2 : 'MS',
        City: 'Bangalore',
        Pincode: '560001',
        State: 'Karnataka',
        BalDue: 0
    },
    {
        ClientNo: 'C00005',
        Name: 'Hansel Colaco',
        Address1 : 'P-7',
        Address2 : 'Bandra',
        City: 'Mumbai',
        Pincode: '400060',
        State: 'Maharashtra',
        BalDue: 2000
    },
    {
        ClientNo: 'C00006',
        Name: 'Deepak Sharma',
        Address1 : 'L9',
        Address2 : 'Long Street',
        City: 'Mangalore',
        Pincode: '560050',
        State: 'Karnataka',
        BalDue: 0
    }
]);


db.client_masters.find();
db.client_masters.find({BalDue : 0});
db.client_masters.findOne({BalDue : 0});
db.client_masters.find({City : 'Mumbai'});
db.client_masters.find({State : 'Karnataka'});
