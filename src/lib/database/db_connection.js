const username = process.env.myusername
const password = process.env.mypassword

if(!username || !password){
    throw new Error("Missing MongoDB Credentials")
}

export const connectionString = `mongodb+srv://madhuh0102:madhumita.y.sugandhi@cluster04.vnbqg10.mongodb.net/Employees`