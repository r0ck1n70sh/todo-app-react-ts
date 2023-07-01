import React, {FC, ReactElement} from 'react'
import TodoApp from 'src/apps/TodoApp'


const App: FC<{}> = (): ReactElement => {
	return (
		<div>
			<h1>Hello! I'm using react</h1>
			<div><TodoApp /></div>
		</div>
	)
}

export default App

