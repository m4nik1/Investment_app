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

