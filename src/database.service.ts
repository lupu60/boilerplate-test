
import * as postgres from 'postgres'

const sql = postgres('postgressql://postgres:postgres@localhost:5432/test',{})

export default sql
