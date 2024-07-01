//  for-of, for-in, forEach loops


let arr=[1,3,46,9]

for(let val of arr){

    // console.log(val);
}

for(let key in arr){

    // console.log(arr[key]);
}

map=new Map()

map.set('IN','India');
map.set('Fr',"France");
map.set("UK","United Kingdom");

// console.log(map);

for(let [key,value] of map){
    // console.log(key, ":", value)
}

numbers=[9,8,65,54,78]

numbers.forEach(function (val,index,arr) {

    if (arr[index] ==65){
        arr[index]=70
    }

    // console.log(val,index,arr)
});

console.log(numbers);
