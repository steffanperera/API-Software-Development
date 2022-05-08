const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/test", require("./routes/testRoutes"))
app.use("/api/citizens", require("./routes/citizenRoutes"))
app.use("/api/companies", require("./routes/companyRoutes"))
app.use("/api/officers", require("./routes/officerRoutes"))
app.use("/api/jobs", require("./routes/jobRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))
