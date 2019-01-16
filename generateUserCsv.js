const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');


var generateUsers = function(userBatchSize) {
    var arr = [];
    for (var i = currentUserBatch * userBatchSize; i < (userBatchSize + (currentUserBatch * userBatchSize)); i++) {
        let oneUser = {};
        totalUserCount++;
        
        oneUser.userId = i,
        oneUser.location = faker.address.county(),
        oneUser.loggedIn = faker.random.boolean(),
        oneUser.name = faker.internet.userName(),
        oneUser.city = faker.address.city(),
        oneUser.zip = faker.address.zipCode()

        arr.push(oneUser);
    }
    return arr;
}


var csvWriter1 = createCsvWriter({
    path: `userOutput.csv`,
    header: [
        {id: 'userId', title: 'userId'},
        {id: 'location', title: 'location'},
        {id: 'loggedIn', title: 'loggedIn'},
        {id: 'name', title: 'name'},
        {id: 'city', title: 'city'},
        {id: 'zip', title: 'zip'},

    ],
    append: true
});

const userBatchSize = 10000, userBatches = 1000;
let totalUserCount = 0, currentUserBatch = 0;

const writeUserData = () => {
    let arr = null;
    arr = generateUsers(userBatchSize);

    csvWriter1.writeRecords(arr)
        .then(() => {
            if (currentUserBatch < userBatches) {
                currentUserBatch++
                if (totalUserCount < (userBatches * userBatchSize)) {
                    writeUserData();
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
writeUserData();