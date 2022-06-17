const mysql = require('mysql');

const createDB = () => {
    return new Promise((resolve) => {
        var connection = mysql.createConnection({
            host: 'oracle.sathvikks.com',
            user: 'mulesoft',
            password: process.env.dbPassword,
            multipleStatements: true
        });
        connection.connect(function (err) {
            if (err) throw err;
            console.log("Connected to Database");
            connection.query("CREATE DATABASE IF NOT EXISTS mulesoft", function (err, result) {
                if (err) throw err;
                console.log("Database mulesoft has been created");
                resolve()
            });
        });
    })
}


const connectDB = () => {
    return new Promise((resolve) => {
        createDB().then(() => {
            var connection = mysql.createConnection({
                host: 'oracle.sathvikks.com',
                user: 'mulesoft',
                password: process.env.dbPassword,
                database: 'mulesoft',
                multipleStatements: true
            });

            connection.connect((err) => {
                if (err) {
                    connection.connect((err) => {
                        if (err) {
                            console.log('Unable to connect to database')
                            console.log(err)
                        } else {
                            console.log('Database connection established!')
                        }
                    })
                } else {
                    console.log('Database connection established!')
                }
            })
            resolve(connection)
        })
    })
}

connectDB().then((connection) => {
    var sql = "DROP TABLE IF EXISTS Movies";
    connection.query(sql, (err, result) => {
        if (err) throw err
    });
    sql = "CREATE TABLE IF NOT EXISTS Movies (name VARCHAR(255), actor VARCHAR(255), actress VARCHAR(255), director VARCHAR(255), year int)"
    connection.query(sql, (err, result) => {
        if (err) throw err
        console.log("Table Movies has been created");
        var values = [
            ['K.G.F: Chapter 2', 'Yash', 'Shrinidhi', 'Prashanth Neel', 2022],
            ['RRR', 'Ram Charan', 'Alia Bhatt', 'S. S. Rajamouli', 2022],
            ['Pushpa: The Rise - Part 1', 'Allu Arjun', 'Rashmika Mandanna', 'Sukumar', 2021],
            ['Ala Vaikunthapurramulao', 'Allu Arjun', 'Pooja Hegde', 'Trivikram Srinivas', 2020],
            ['Kotigobba 3', 'Sudeep', 'Madonna Sebastian', 'Shiva Karthik', 2021],
            ['Master', 'Thalapathy Vijay', 'Malvika Mohanan', 'Lokesh Kanagaraj', 2021],
            ['Sarileru Neekavaru', 'Mahesh Babu', 'Rashmika Mandanna', 'Anil Ravipudi', 2020],
            ['Roberrt', 'Darshan Thoogudeep', 'Asha Bhat', 'Tarun Sudhir', 2021]
        ]
        var sql2 = "INSERT INTO Movies VALUES ?"
        connection.query(sql2, [values], (err, result) => {
            if (err) throw err
            console.log("Sample data has been inserted to the table")
        })
    });
})