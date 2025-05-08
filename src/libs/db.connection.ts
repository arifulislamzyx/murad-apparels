const { username, password } = process.env;

const connectionDb = `mongodb+srv://${username}:${password}@muradapparels.md68ind.mongodb.net/murad-apparels?retryWrites=true&w=majority&appName=muradApparels`;

export default connectionDb;
