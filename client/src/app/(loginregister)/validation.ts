function validateUsername(value:string){
    if (!value) {
        return "Заполните поле ввода!";
    } else if (!/^[a-zA-Z0-9_]{3,16}$/.test(value)) {
        return "Некорректное имя";
    }
}
function validatePassword(value:string){
    if(!value){
        return "Заполните пароль!"
    }else if(!/.{6,}/.test(value)){
        return "Некорректный пароль"
    }
}
export {
    validatePassword,
    validateUsername,
}