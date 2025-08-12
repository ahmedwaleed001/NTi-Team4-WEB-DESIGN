const defaultUsers = [
    {
        username: "admin",
        email: "admin@donuts.com",
        phone: "1234567890",
        password: "admin123",
        role: "admin"
    },
    {
        username: "user",
        email: "user@donuts.com",
        phone: "1234567890",
        password: "user123",
        role: "user"
    }
];

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
}

export function saveUser(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ ...user, role: "user" });
    localStorage.setItem("users", JSON.stringify(users));
}



export function checkLogin(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.find(user => user.email === email && user.password === password);
}


