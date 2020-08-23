import * as SQLite from 'expo-sqlite';

const db2 = SQLite.openDatabase('investments.db')

export function init () {
    const promise = new Promise((resolve, reject) => {
        db2.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Stocks (id INTEGER PRIMARY KEY NOT NULL, symbol TEXT NOT NULL, shares TEXT NOT NULL, price TEXT NOT NULL );',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                 reject(err)
                }
            );
        });
    });
    return promise;
}

export function insertInvestment (symbol, shares, price) {
    const promise = new Promise((resolve, reject) => {
        db2.transaction(tx => {
            tx.executeSql(
                `INSERT INTO Stocks (symbol, shares, price) VALUES (?, ?, ?);`,
                [symbol, shares, price],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                 reject(err)
                }
            );
        });
    });
    return promise;
}

export const fetchInvestment = () => {
    const promise = new Promise((resolve, reject) => {
        db2.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM Stocks',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                 reject(err)
                }
            );
        });
    });
    return promise;
}