```javascript
//Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{"$inc":{"field":1}});
//To increment by a value greater than 1, you can still use $inc, but it will work as expected only if you pass an integer or a double precision floating point number 
db.collection.updateOne({"_id":ObjectId("someId")},{"$inc":{"field":5}});
```