import app from './app';
import db from './src/db/configs';

(async () => {
    await db.sync();
})();

app.listen(3000, () => {
    console.log('listening on port 3000')
})

