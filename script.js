
// Соеденить два объекта в одно целое (новый объект)
// Получить все ключи из нового объекта и сохранить их в новую переменную
// Получить все значения из нового объекта и сохранить их в новую переменную
// Соеденить две этих массива (ключи и значения)
// Отфильтровать массив по их типам элементов


//Object.keys(user)//name for ex
//Object.values()//definitions for ex adam

//Object.entries()//defintion and key


let user ={
name: "Alex",
surname: "Addams",
age: 20,
profession: "programmer",
hairColor: "blonde",
level: false,
addInf:{
info: 'junior',
info: 'junior',
info: 'junior',
info: 'junior'
}

}

let passport ={
    series: "AC",
    number: 11123321,
    date: 2021-06-06,
    addInf:{
        info: 'junior',
        info: 'junior',
        info: 'junior',
        info: 'junior'
        }

}
let newObject = Object.assign({}, user,{passport})
let newKey = Object.keys(newObject)
let newValues = Object.values(newObject)
let allTheInf = Object.assign({}, {newKey},{newValues})

console.log(allTheInf)
let types = {
    string: [],
    number: [],
    object: [],
    boolean: [],
}




































