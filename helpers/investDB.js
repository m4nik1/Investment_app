import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('invest.db')

export function investDB () {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists items (id integer primary key not null, symbol TEXT NOT NULL, shares, price);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

export const insertInvestment = (symbol, shares, price) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`Insert into items (symbol, shares, price) values (?, ?, ?);`,
                [symbol, shares, price],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

export const fetchInvestment = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('select * from items',
                [symbol, shares, price],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}