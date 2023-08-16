/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');

// Search for documents in the current collection.
db.getCollection('equipment')
  .find(
    {
      // "name":/Robert/i
      /*
      * Filter
      * fieldA: value or expression
      */
    },
    {
      // _id: 1
      /*
      * Projection
      * _id: 0, // exclude _id
      * fieldA: 1 // include field
      */
    }
  )
  .sort({
    /*
    * fieldA: 1 // ascending
    * fieldB: -1 // descending
    */
  }).skip(2).limit(10);

// db.getCollection('equipment').count();
