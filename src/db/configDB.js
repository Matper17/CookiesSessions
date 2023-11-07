import mongoose from "mongoose";

const URI = 
    "mongodb+srv://clientUser:coderhouse23@tiendavirtualcluster.j1fv3uh.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(URI)
    .then(() => console.log("Conectado a la DB"))
    .catch((error) => console.log(error))