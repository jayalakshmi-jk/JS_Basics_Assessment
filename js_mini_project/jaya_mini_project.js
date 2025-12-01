// Mini Project: Student performance manager

let obj = {}
obj.Student_Name =prompt("Enter student name: ")
let arr= []
m1=arr.push(Number(prompt("Enter m1: ")))
m2=arr.push(Number(prompt("Enter m2: ")))
m3=arr.push(Number(prompt("Enter m3: ")))
m4=arr.push(Number(prompt("Enter m4: ")))
m5=arr.push(Number(prompt("Enter m5: ")))

obj.marks = arr
function CalculateTotal(marks) {
   let total= marks.reduce((acc, m) => acc + m, 0)
  return total
}

function CalculateAverage(total){
    let avg = total / 5
    return avg
}
function getGrade(average){
    if(average>=90 && 100 >= average){
       return "A"
    }else if(average>80 && 89 < average){
         return "B"
    }else if(average>70 && 79 < average){
        return "C"
    }else if(average>60 && 69 < average){
        return "D"
    }else if(average>0 && 59 < average){
         return "FAIL"
    }
}
obj.total = CalculateTotal(obj.marks)
obj.average = CalculateAverage(obj.total)
obj.grade = getGrade(obj.average)
console.log(obj)


//Output:
// Enter student name: arun
// Enter m1: 78
// Enter m2: 85
// Enter m3: 90
// Enter m4: 66
// Enter m5: 80
// {
//   Student_Name: 'arun',
//   marks: [ 78, 85, 90, 66, 80 ],
//   total: 399,
//   average: 79.8,
//   grade: 'C'
// }
