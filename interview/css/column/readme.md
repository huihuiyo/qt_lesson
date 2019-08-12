两列布局 一列固定宽度， 一列自适应

- flex -> 在PC端不保险
	.row {
		display: flex;
		width: 100%;
		height: 200px;
		background-color: lightgreen;
	}
	.col1 {
		flex: 1;
		height: 100%;
		background-color: pink;
	}
	.col2 {
		width: 100px;
		height: 100%;
		background-color: lightblue;
	}

- float