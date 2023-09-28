// This function is the endpoint's request handler.
exports = function() {
    // Data can be extracted from the request as follows:

    // Query params, e.g. '?arg1=hello&arg2=world' => {arg1: "hello", arg2: "world"}
    //const {arg1, arg2} = query;

    // Headers, e.g. {"Content-Type": ["application/json"]}
    //const contentTypes = headers["Content-Type"];

    // Raw request body (if the client sent one).
    // This is a binary object that can be accessed as a string using .text()
 

    // You can use 'context' to interact with other application features.
    // Accessing a value:
    // var x = context.values.get("value_name");
const projection = {
  "_id": 0,
 "image": 1,
 "name": 1,
 "image": 1,
 "image2": 0,
 "description": 0,
}
    // Querying a mongodb service:
     const kittens = context.services.get("mongodb-atlas").db("kittens").collection("kittens").find(projection)
      .toArray()
  .then(kittens => {
    console.log(`Successfully found ${kittens.length} documents.`)
    kittens.forEach(console.log)
    return kittens
  })
  .catch(err => console.error(`Failed to find kittens: ${err}`))

    // Calling a function:
    // const result = context.functions.execute("function_name", arg1, arg2);

    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.
   return kittens
};
