import styled from "styled-components";

const StyledTable= styled.table`
	width: 100%;
	border: none;
	margin-bottom: 20px;
	text-align: center;

thead th {
	padding: 10px;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	text-align: center; 
	color: #444441;
	border-top: 2px solid #716561;
	border-bottom: 2px solid #716561;
}
tbody td {
	padding: 10px;
	font-size: 14px;
	line-height: 20px;
	color: #444441;
	border-top: 1px solid #716561;
}
img {
	max-width: 150px;
	display: block;
}
.productName{
	display: flex;
    flex-wrap: wrap;
	justify-content: flex-start;
    align-items: center;

}


.productNameSpan{
	font-weight: bold;
	display: block;
	padding-left: 20px;
	text-align: left;
}


tfoot td {
	font-weight: 500;
	border-top: 4px solid #716561;
	color: darkred;

}


#close {
	overflow: hidden;
	position: relative;
	border: none;
	padding: 0;
	width: 2em; height: 2em;
	border-radius: 50%;
	background: transparent;
	color: #daa2a2;
	font: inherit;
	text-indent: 100%;
	cursor: pointer;
	
	&:focus {
		outline: solid 0 transparent;
		box-shadow: 0 0 0 2px #f98e8e
	}
	
	&:hover {
		background: rgba(161, 29, 29, 0.1)
	}
	
	&:before, &:after {
		position: absolute;
		top: 15%; left: calc(50% - .0625em);
		width: .125em; height: 70%;
		border-radius: .125em;
		transform: rotate(45deg);
		background: currentcolor;
		content: ''
	}
	
	&:after { transform: rotate(-45deg); }
}


@media (max-width: 567px) {
	img {
	max-width: 70px;
}
thead th {
	padding: 5px;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
}	

.productNameSpan{
	padding-left: 2px;
}

}	

`
export { StyledTable };