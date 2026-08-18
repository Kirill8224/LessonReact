import { Card, Button, Typography, TextField } from "@mui/material"
import { reducer } from "../bbl/useCounter"
import { useReducer } from "react"
export function Countui(){
    const nums= {name: 'Kirill', age: 5}
    const [state, deshier]= useReducer(reducer, nums)
    return(<Card>
        <div style={{display: "flex",  gap: '2px', justifyContent: 'center'}}>
        <Button variant="contained" onClick={()=>{deshier('inc')}}>{state.age} + 1</Button>
        <Button variant="contained" onClick={()=>{deshier('dec')}}>{state.age} -1</Button>
        <Button variant="contained" onClick={()=>{deshier('res')}}>сброситиь(0)</Button>
        <div>
        <TextField onChange={(e)=>deshier({type: 'setAge', payload: Number(e.target.value)})} placeholder="18" sx={{margin: 1}} label='возраст' />
        </div>
        <TextField sx= {{margin: 1}} label= 'Имя' placeholder="Кирилл" onChange={(e)=>{deshier({type: 'setName', payload: String(e.target.value)})}}/>
        </div>
        <Typography variant="h1">имя: {state.name}, возраст: {state.age}</Typography>
    </Card>)
}

