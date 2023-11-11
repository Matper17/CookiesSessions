import express from "express"
import cookieParser from "cookie-parser"
import {__dirname} from "./utils.js"
import handlebars from "express-handlebars"
import viewsRouter from "./routes/views.router.js"
import cookieRouter from "./routes/cookie.router.js"
import sessionsRouter from "./routes/sessions.router.js"
import session from "express-session"
import "./db/configDB.js"
import fileStore from "session-file-store"
const FileStore = fileStore(session); 
import MongoStore from "connect-mongo"
import  path  from "path"
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser("SecretCookie"))



//Mongo DB

const URI = "mongodb+srv://clientUser:coderhouse23@tiendavirtualcluster.j1fv3uh.mongodb.net/?retryWrites=true&w=majority"
app.use(
    session({
        store: new MongoStore({
            mongoUrl: URI,
        }),
        secret: "secretSession",
        cookie: {maxAge: 60000}
    })
)

//Handlebars 

app.engine("handlebars", handlebars.engine())
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "handlebars")
//app.use(express.static('public'));

//Routes

app.use("/", viewsRouter)
app.use("/api/cookie", cookieRouter)
app.use("/api/sessions", sessionsRouter)


app.listen(8080, () =>{
    console.log("Escuchando al puerto 8080")
})