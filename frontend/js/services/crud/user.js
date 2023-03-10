import { 
    defaultRouteBackEnd
} from "../../config.js"

const table = "user"
const urlApi = defaultRouteBackEnd + table

const getUser = async (id) => {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({ id })
	};

    try {
        const response = await fetch(urlApi, config)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const getUserId = async () => {
    try {
        const response = await fetch(defaultRouteBackEnd + "me")
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const createUser = async (username, email, password) => {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({ username, email, password })
	};

    try {
        const response = await fetch(defaultRouteBackEnd + "register", config)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const updateUser = async (id, update) => {
    const config = {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify(update)
	};

    try {
        const response = await fetch(`${urlApi}/${id}`, config)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const deleteUser = async (id) => {
    const config = { method: "DELETE" }
    try {
        const response = await fetch(`${urlApi}/${id}`, config)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { getUser, getUserId, createUser, updateUser, deleteUser }