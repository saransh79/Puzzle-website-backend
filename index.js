import dotenv from 'dotenv'
import app from './app.js'
import {database} from './database/index.js'

dotenv.config()
database();
const port = '4000' || process.env.PORT
app.listen(port, () => {
    try {
        console.log(`Server is running at port ${port}`);
    } catch (error) {
        console.log({ 'Error of port ': error });
    }
})