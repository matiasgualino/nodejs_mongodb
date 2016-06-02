# MongoDB - Aggregation & MapReduce

Reference: http://thejackalofjavascript.com/mapreduce-in-mongodb/

If you are starting from new project, you need to install the following dependencies: 
  npm init
  npm i mongojs --save-dev
  npm i dummy-json --save-dev
  
And MongoDB must be started:
  mongo
  mongod

1. node dataGen.js
2. node example1.js
3. node example2.js
4. node example3.js

Aggregation:

  db.demo_inge.findAll();
  
  db.demo_inge.findOne();
  
  db.demo_inge.distinct("age");
  
  db.demo_inge.find({"gender":"female"}).count();
  
  db.demo_inge.find({age:{ $gt: 30, $lt: 33}}).sort({age:1});
  
  db.demo_inge.find({age:{ $gt: 30, $lt: 33}}).sort({age:1}).pretty();
  
  db.demo_inge.aggregate([{$group: {_id:"PromedioEdadQuery", prom_edad:{$avg:"$age"}, max_edad:{$max:"$age"}, min_edad:{$min:"$age"}}}]).pretty();

Map Reduce:

  db.example1_results().find();
  
  db.example2_results().find();
  
  db.example3_results().find();
