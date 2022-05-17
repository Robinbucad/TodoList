export type Task = {
	id:  1 | number
	title: string
	date: string

	column:string
}

export type SingleTaskProps = {
	title: string,
	id: number,
	date?: string,
	handleDelTask:(id:number) => void
}

