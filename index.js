import express from "express";
import bodyParser from "body-parser";
import {
    sequelize
} from "./dbConfig.js"

sequelize.sequelize
    .authenticate()
    .then(async () => {
        console.log('database connected');
        await sequelize.sequelize.sync();
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
app.use(express.static('public'));
import {
    EmployeeModel
} from "./employeeModel.js"

app.use(bodyParser.json())

app.get('/getEmployeeDetails', async (req, res) => {
    try {
        console.log("calling get image API")

        const response = await EmployeeModel.findAndCountAll({});
        console.log('Employees Details ', JSON.stringify(response));
        res.send(response);
    } catch (e) {
        return res.status(500).json({
            status: 500,
            errorMessage: e.message,
        });
    }
})

app.put('/updateEmployeeDetails/:id', async (req, res) => {
    try {
        console.log("calling updateEmployeeDetails API")

        const response = await EmployeeModel.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            });
        res.send(response);
    } catch (e) {
        return res.status(500).json({
            status: 500,
            errorMessage: e.message,
        });
    }
})
app.post('/createEmployeeDetails', async (req, res) => {
    try {
        console.log("calling createEmployeeDetails API")

        const response = await EmployeeModel.create(req.body);
        res.send(response);
    } catch (e) {
        return res.status(500).json({
            status: 500,
            errorMessage: e.message,
        });
    }
})
app.delete('/deleteEmployee/:id', async (req, res) => {
    try {
        console.log("calling deleteEmployees API")

        const response = await EmployeeModel.destroy({
            where: {
                id: req.params.id
            }
        });
        console.log('response ', response)
        res.send({
            message: `${req.params.id} deleted successfully`
        });
    } catch (e) {
        return res.status(500).json({
            status: 500,
            errorMessage: e.message,
        });
    }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Listening on port " + port);
});