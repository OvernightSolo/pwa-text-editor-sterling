// import { request } from "express";
import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async content => {
  console.log("PUT to the database");

  // creating a connection tothe db and the version to use
  const contactDb = await openDB("jate", 1);

  // creating a new transaction and specifyfing the db and data privileges
  const tx = contactDb.transaction("jate", "readwrite");

  // opening up the desired object store
  const store = tx.objectStore("jate");

  // using the .add() method on the store and pssing int the content
  const request = store.put({
    id: 1,
    value: content,
  });

  //getting confirmation of the request
  const result = await request;
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // creating a connection to the db and the version to use
  const contactDb = await openDB("jate", 1);

  // creating a new transaction and specifying the db and data prilvileges
  const tx = contactDb.transaction("jate", readonly);

  // opening the desired object store
  const store = tx.objectStore("jate");

  // using the .getAll() method to get all data in the db
  const request = store.getAll();

  // getting confirmation of the request
  const result = await request;
  console.log("result.value", result);
  return result?.value;
};
initdb();
