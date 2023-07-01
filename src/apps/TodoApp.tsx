import React, {FC, ReactElement, useState} from 'react'
import TodoElem, {TodoElemAction} from 'src/components/TodoElem'
import ArrayUtils from 'src/utils/ArrayUtils'


interface TodoListData {
	id: string;
	value: string;
}


const TodoApp: FC<{}> = (): ReactElement => {
	const [ todoList, setTodoList ] = useState<Array<TodoListData>>([])

	const handleAdd = (): void => setTodoList(curr => {
			const updated = Array.from(curr)

			updated.push({ 
				id: `todo_item_${Math.round(Math.random() * 1000)}`,
				value: 'lorum ipsum'
			})

			return updated
		})

	const handleAction = (action: TodoElemAction, idx: number): void =>
		setTodoList(curr => {
			const updated = Array.from(curr)

			switch (action) {
				case TodoElemAction.MOVE_UP:
					ArrayUtils.swapIdx(updated, idx-1, idx)
					return updated

				case TodoElemAction.MOVE_DOWN:
					ArrayUtils.swapIdx(updated, idx+1, idx)
					return updated

				case TodoElemAction.DELETE:
					return ArrayUtils.deleteIdx(updated, idx)

				default:
					return curr
			}
		})

	const handleTodoListElemChange = (value: string, idx:number): void => 
		setTodoList(curr => {
			if (idx < 0 || idx >= curr.length) return curr
			const updated = Array.from(curr)
			updated[idx].value = value
			return updated
		})

	const renderTodoList = (): ReactElement => 
		todoList.length > 0 ?
			(<div>
					{todoList.map(({value, id}, idx) => 
							<div key={`div_todo_elem_${id}_${idx}`}>
								<span>{idx}.</span>
								<span>
									<TodoElem
										value={value}
										setValue={
											(value) => handleTodoListElemChange(value, idx)
										}
										handleAction={
											(action) => handleAction(action, idx)
										}
									/>
								</span>
							</div>
					)}
			</div>) :
			(<div>No Items Present.</div>)

	return (
		<div>
			<h1>Todo App</h1>
			<button onClick={handleAdd}>Add</button>
			<div>
				{renderTodoList()}
			</div>
		</div>
	)
}

export default TodoApp
