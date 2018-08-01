var numbers = [10,20,30,40];

function evenArray(numbers){
    return numbers.filter(function(n){
        return n%2 == 0;
    });
}

console.log(evenArray(numbers));