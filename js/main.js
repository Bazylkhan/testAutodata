async function start() {

    const response = await fetch('dataUsers.json');
    const data = await response.json();
    data.forEach(obj => {

        Object.entries(obj).forEach(([key, value]) => {
            //create child div
            let user = document.createElement('div');
            user.setAttribute("class", "user");

            //create input            
            let userInput = document.createElement('input');
            userInput.setAttribute("class", "info");
            userInput.setAttribute("type", "text");
            userInput.setAttribute("disabled", true);
            userInput.setAttribute("value", `${value}`);

            //create buttons
            let updateButton = document.createElement('div');
            updateButton.setAttribute("class", "update");
            updateButton.innerText = "Изменить";

            let deleteButton = document.createElement('div');
            deleteButton.setAttribute("class", "delete");
            deleteButton.innerText = "Удалить";

            //set input and buttons in child div
            user.appendChild(userInput);
            user.appendChild(updateButton);
            user.appendChild(deleteButton);


            //set in parent div
            let users = document.querySelector(".users");
            users.appendChild(user);

        });
    });
}

start();
//Тут решил все таки переити на JQuery
//Удаления элемента
$(document).on('click', '.delete', function () {
    $(this).parent().remove();
})







//функция для изменения Текста
$(document).on('click', '.update', function () {
    $(this).siblings('.info').prop("disabled", false);
if($(this).text()==='Изменить'){
$(this).html("Сохранить");
}else{
    $(this).html("Изменить");
}
})
