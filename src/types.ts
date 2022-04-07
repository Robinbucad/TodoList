export type Task = {
	id:  1 | number
	title: string
	date: string
	status: string
	column:string
}

export type SingleTaskProps = {
	title: string,
	id: number,
	date: string,
	status : string,
	handleDelTask:(id:number) => void
}

export type Importance = 'minor' | 'normal' | 'important'