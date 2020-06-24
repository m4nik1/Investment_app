import * as SQLite from 'expo-sqlite'

export function investDB () {
    const db = SQLite.openDatabase('invest.db')

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('create table if not exists items (symbol TEXT NOT NULL, shares, price);',
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