import React, {ReactElement, useState} from 'react'


const TodoApp: FC<{}> = (): ReactElement => {
	const [ todoList, setTodoList ] = useState([])
	return (
		<div>
			Todo App
		</div>
	)
}

export default TodoApp
