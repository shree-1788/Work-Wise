const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`server is running on ${port}`);
});
