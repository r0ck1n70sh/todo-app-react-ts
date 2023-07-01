import React, {FC, ReactElement, ChangeEvent} from 'react'

interface TodoElemProps {
	value: string;
	setValue: (value: string) => void;
	handleAction: (action: TodoElemAction) => void;
}

export enum TodoElemAction {
	MOVE_UP,
	MOVE_DOWN,
	DELETE
}

const TodoElem: FC<TodoElemProps> = (props): ReactElement => {
	const {value, setValue, handleAction} = props

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => 
		setValue(e?.target?.value)

	return (
		<div>
			<span>
				<input
					placeholder="Lorem Ipsum"
					value={value}
					onChange={handleChange}
				/>
			</span>
			<span>
				<button onClick={() => handleAction(TodoElemAction.MOVE_UP)}>
					up
				</button>
			</span>
			<span>
				<button onClick={() => handleAction(TodoElemAction.MOVE_DOWN)}>
					down
				</button>
			</span>
			<span>
				<button onClick={() => handleAction(TodoElemAction.DELETE)}>
					delete
				</button>
			</span>	
		</div>
	)
}

export default TodoElem
