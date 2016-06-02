# MongoDB - Aggregation & MapReduce

Reference: http://thejackalofjavascript.com/mapreduce-in-mongodb/

If you are starting from new project, you need to install the following dependencies: 

```bash
    npm init
    npm i mongojs --save-dev
    npm i dummy-json --save-dev
```

  
And MongoDB must be started. In two different terminals, run:
```bash
    mongo
```  
```bash
    mongod
```  

Finally, run the project:

```bash
    node dataGen.js
```  
```bash
    node example1.js
```  
```bash
    node example2.js
```  
```bash
    node example3.js
```  

Aggregation:

- List 999 documents.
```bash
    db.demo_inge.findAll();
```
- List just one document.
```bash
    db.demo_inge.findOne();
```
- List distinct ages from 999 documents.
```bash
    db.demo_inge.distinct("age");
```
- Count female documents.
```bash
    db.demo_inge.find({"gender":"female"}).count();
```
- List and sort by age documents. (Age range (30-33)).
```bash
    db.demo_inge.find({age:{ $gt: 30, $lt: 33}}).sort({age:1});
```
- List and sort by age documents. (Age range (30-33)). Pretty print.
```bash
    db.demo_inge.find({age:{ $gt: 30, $lt: 33}}).sort({age:1}).pretty();
```
- Return Min, Max and Avg age from 999 documents.
```bash
    db.demo_inge.aggregate([{$group: {_id:"PromedioEdadQuery", prom_edad:{$avg:"$age"}, max_edad:{$max:"$age"}, min_edad:{$min:"$age"}}}]).pretty();
```

Map Reduce:

- Count males and females using MapReduce.
```bash
    db.example1_results().find();
```
- Get oldest and youngest in each gender.
```bash
    db.example2_results().find();
```
- Count number of persons in each hobby.
```bash
    db.example3_results().find();
```
