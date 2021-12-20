var users = [
    {
        "_id": "60f2d4170b9f789a2b8b7b59",
        "age": 79,
        "name": "Owens Dudley"
    },
    {
        "_id": "60f2d417900f88bf5a75405f",
        "age": 48,
        "name": "Castillo Whitney"
    },
    {
        "_id": "60f2d417c92f08ca4a5ddf7d",
        "age": 54,
        "name": "Sharlene Blackburn"
    },
    {
        "_id": "60f2d417597572e50ba7c977",
        "age": 50,
        "name": "Heidi Diaz"
    },
    {
        "_id": "60f2d417650ec444becf65ea",
        "age": 44,
        "name": "Hendricks Duran"
    },
    {
        "_id": "60f2d417d69e29427625e710",
        "age": 36,
        "name": "Angie Schultz"
    },
    {
        "_id": "60f2d41757f76f97cc2f81dc",
        "age": 35,
        "name": "Gretchen Kaufman"
    },
    {
        "_id": "60f2d41707050acca77b312b",
        "age": 45,
        "name": "Rosa Oconnor"
    },
    {
        "_id": "60f2d417d0fbae148cde292d",
        "age": 64,
        "name": "Schneider Mathews"
    },
    {
        "_id": "60f2d4178db81fa281afca9c",
        "age": 23,
        "name": "Mcintosh Morrow"
    },
    {
        "_id": "60f2d4177ed6be5f775090bb",
        "age": 60,
        "name": "Eaton Massey"
    },
    {
        "_id": "60f2d417100af53292abd861",
        "age": 35,
        "name": "Lott Mccoy"
    },
    {
        "_id": "60f2d4178e735d82f5638110",
        "age": 47,
        "name": "Gardner Juarez"
    },
    {
        "_id": "60f2d417e33d5ff361d1eba0",
        "age": 80,
        "name": "Gabriela Delaney"
    },
    {
        "_id": "60f2d4173ea482fcb54f4723",
        "age": 72,
        "name": "Townsend Hammond"
    },
    {
        "_id": "60f2d417a8ec47a5d95fb0eb",
        "age": 78,
        "name": "Sexton Ryan"
    },
    {
        "_id": "60f2d4179ff3f3cde6a18743",
        "age": 51,
        "name": "Miles Lowery"
    },
    {
        "_id": "60f2d417eed37689e93eac70",
        "age": 64,
        "name": "Nancy Sharpe"
    },
    {
        "_id": "60f2d417796b4890a548b68d",
        "age": 41,
        "name": "Santana Odonnell"
    },
    {
        "_id": "60f2d417af9f3640982a76c3",
        "age": 59,
        "name": "billie Cline"
    }
]

var inputNode = document.querySelector('input');
var listNode = document.querySelector(".list");

var reset = () => {
    var getAllTodo = document.querySelectorAll('.list li');
    getAllTodo.forEach((val) => {
        val.remove();
    })
}

var renderUser = (users) => {
    users.forEach((val) => {
        var user = document.createElement("li");
        user.textContent = val.name;
        listNode.appendChild(user);
    });

}
renderUser(users);

inputNode.addEventListener('keyup', function (e) {
    reset();
    if (inputNode.value) {
        var search = users.filter((val) => val.name.includes(inputNode.value));
        search.forEach((val) => {
            var searchName = val.name.split(inputNode.value);
            var keyWord = document.createElement('li');
            keyWord.innerHTML = `<p>${searchName[0]}<span class="highlight">${inputNode.value}</span>${searchName[1]}</p>`;
            listNode.appendChild(keyWord);
        });

        listNode.style.display = 'block';
    } else {
        listNode.style.display = 'none';
    }
});
