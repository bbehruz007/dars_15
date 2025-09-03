let tbody = document.getElementById("tbody")

const chiqar = () => {
    tbody.innerHTML = null

    data.forEach((item) => {
        let tr = document.createElement("tr")

        tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.bookName}</td>
        <td>${item.bookauthor}</td>
        <td>${item.bookyear}</td>
        <td><img width="80px"
                src=${item.bookimage}
                alt="rasm"></td>
        <td><a class="teg" href=${item.bookurl}>Link</a></td>
        <td>
            <div class="buttons">
                <img width="40px" onclick="showDeleteModal(${item.id})"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVH_dVrxYlT3A4z2JQNoLnXK5rr9336c1Flw&s"
                    alt="delete">
                <img width="30px" onclick="showEditModal(${item.id})"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
                    alt="edit">
            </div>
        </td>
    
    `

        tbody.appendChild(tr)
    })
}

chiqar(data)

let addModal = document.getElementById("add_modal")

const showAddModal = () => {
    addModal.style.display = "inline-block"
}

const hiddenAddModal = () => {
    addModal.style.display = "none"
}

let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let file = document.getElementById("image")

    let newPerson = {
        id: data.length == 0 ? 1 : data[data.length - 1].id + 1,
        bookName: document.getElementById("nom").value,
        bookauthor: document.getElementById("muallif").value,
        bookyear: Number(document.getElementById("yil").value),
        bookurl: document.getElementById("link").value,
        bookimage: URL.createObjectURL(file.files[0]),
    }

    data.push(newPerson)
    localStorage.setItem("data", JSON.stringify(data))

    chiqar(data)
    form.reset()
    hiddenAddModal()
})

let deleteModal = document.getElementById("delete_modal")

let deleteId

const showDeleteModal = (id) => {
    deleteModal.style.display = "inline-block"

    deleteId = id
    console.log(id);

}

const hiddenDeleteModal = () => {
    deleteModal.style.display = "none"
}
const deleteItem = () => {
    let newData = data.filter((item) => item.id != deleteId)

    data = newData
    localStorage.setItem("data", JSON.stringify(data))

    chiqar(data)
    hiddenDeleteModal()
}

let editModal = document.getElementById("edit_modal")

let editId

const showEditModal = (id) => {
    editModal.style.display = "inline-block"
    editId = id

    let person = data.filter((item) => item.id == id)[0]
    console.log(person);

    document.getElementById("nom2").value = person.bookName
    document.getElementById("muallif2").value = person.bookauthor
    document.getElementById("yil2").value = person.bookyear
    document.getElementById("link2").value = person.bookurl
    document.getElementById("image2").value = person.bookimage
}

const hiddenEditModal = () => {
    editModal.style.display = "none"
}

let form2 = document.getElementById("form")

form2.addEventListener("submit", (e) => {
    e.preventDefault()

    // let file = document.getElementById("image")

    let newData = data?.map((item) => {
        if (item.id == editId) {
            item.bookName = document.getElementById("nom2").value
            item.bookauthor = document.getElementById("muallif2").value
            item.bookyear = document.getElementById("yil2").value
            item.bookurl = document.getElementById("link2").value
            item.bookimage = document.getElementById("image2").value
        }

        return item
    })

    data = newData
    localStorage.setItem("data", JSON.stringify(data))

    chiqar(data)
    form2.reset()
    hiddenEditModal()
})
