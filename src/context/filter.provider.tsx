import React, { useState } from "react"
import { Task } from "../components/Card"
import { FilterContext } from "./filter.context"

interface props {
	children: React.ReactNode
}

const toDo = JSON.parse(localStorage.getItem("toDo") || "") || []

const FilterProvider = ({ children }: props) => {
	const [filterToDo, setFilterToDo] = useState<any>(toDo)
	const [taskToDo, setTaskToDo] = useState<Task[]>([])

	return (
		<FilterContext.Provider
			value={[filterToDo, setFilterToDo, taskToDo, setTaskToDo]}
		>
			{children}
		</FilterContext.Provider>
	)
}

export default FilterProvider
