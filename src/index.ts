import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port: number = 3000;

class App {
    private app: Express;

    constructor () {
        this.app = express();
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static("public"));
        this.app.use(express.json());
        this.app.use(cors());
    }

    public init = async () => {
        try {
            this.app.listen(port, () => {
                console.log("server is started");
            })
            this.app.get("/", (req, res) => {
                res.send("Hello express typescript");
            })
            this.app.get("/users", (req, res) => {
                const users = [
                    {name: "Ivan"},
                    {name: "Danil"},
                    {name: "Pasha"}
                ]
                res.send(users);
            })
        } catch (error: unknown) {
            const err = error as Error;
            console.log(err.message);
        }
    }
}

export const app = new App();

app.init().then(() => {
    console.log("Server is ok");
}).catch(() => {
    console.log("server is not ok");
})