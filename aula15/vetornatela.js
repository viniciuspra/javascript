let num = [4,7,1,9,2]
num.sort()
num.push(3) 
console.log(num)
let p = num.indexOf(9)
console.log(`(${p})`)

/*
for (let c = 0; c < num.length; c++) {
    console.log(`${c+1} -> ${num[c]}`)
} 

for (let c in num) {
    console.log(num[c])
}
*/