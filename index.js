import dotenv from 'dotenv'
import app from './app.js'
import {database} from './database/index.js'

dotenv.config()
database();
const port =  process.env.PORT || '4000'
app.listen(port, () => {
    try {
        console.log(`Server is running at port ${port}`);
    } catch (error) {
        console.log({ 'Error of port ': error });
    }
})