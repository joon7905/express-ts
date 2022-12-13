import express, {Request, Response, Router} from 'express';

const app = express();

interface Person {
    name: string,
    age: number,
    url: string,
}

const jh: Person = {
    name: "권준한",
    age: 42,
    url: 'www.somanet.xyz'
};

app.get('/get', (req: Request, res: Response)=>{
    res.send(jh);
});

app.get('/', (req: Request, res: Response)=>{
    res.json(jh);
})

console.log('express listening...')
app.listen(8080);