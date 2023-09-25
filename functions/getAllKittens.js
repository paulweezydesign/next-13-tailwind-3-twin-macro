

exports = function() {
  const mongodb = context.services.get("mongodb-atlas");
  const kittens = mongodb.db("kittens").collection("kittens");

const projection = {"_id": 0 , "id": 0, "name":1, "image": 1, "image2": 0, "description": 0};
return kittens.find( projection)
 
  .toArray()
  .then(kittens => {
    console.log(`Successfully found ${kittens.length} documents.`)
  kittens.forEach(console.log)
    return kittens
  })
  .catch(err => console.error(`Failed to find documents: ${err}`))
}
