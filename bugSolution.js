```javascript
// Correct usage using $or operator or checking for existence
db.collection('myCollection').find({ $or: [{field: {$exists:true}}, {field: {$in: []}}]}); 
//alternative solution using $exists
db.collection('myCollection').find({ field: { $exists: true }});
```