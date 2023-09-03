import 'dotenv/config';

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));