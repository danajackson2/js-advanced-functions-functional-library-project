const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const key in collection){
        callback(collection[key], key, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let newColl = []
      for(const key in collection){
        newColl.push(callback(collection[key], key, collection))
      }
      return newColl
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for(const key in collection){
        acc = callback(acc, collection[key], collection)
      }
      return acc
    },

    find: function(collection, predicate){
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]
        } 
      }
      return undefined
    },

    filter: function(collection, predicate){
      let arr = []
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          arr.push(collection[i])
        } 
      }
      return arr
    },

    size: function(collection){
      let counter = 0
      for(const item in collection){
        counter += 1
      }
      return counter
    },

    first: function(array, n=1){
      let arr = []
      for (let i = 0; i < n; i++){
        arr.push(array[i])
      }
      return arr.length === 1 ? arr[0] : arr
    },

    last: function(array, n=1){
      let newArr = array.slice(-n)
      return newArr.length === 1 ? newArr[0] : newArr
    },

    compact: function(array){
      let newArr = []
      for (const item of array){
        if(item){
          newArr.push(item)
        }
      }
      return newArr
    },

    sortBy: function(array, callback){
      
    },

    flatten: function(){

    },

    uniq: function(){

    },

    keys: function(){

    },

    values: function(){

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
