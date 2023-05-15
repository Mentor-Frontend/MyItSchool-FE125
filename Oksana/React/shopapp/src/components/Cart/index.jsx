import cartIcon from "../../img/cart-an.png";
import { useSelector } from "react-redux";
import {
	CartCountStyled,
	CartCountWrapper,
} from "../../styledComponents/Cart";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
const Bounce = styled.div`animation: 1s ${keyframes`${bounce}`}`;

export default function Cart() {
    
	const cart = useSelector(state => state.cart.cartItems)
	return (
		<CartCountWrapper>
			<Bounce>
			<img src={cartIcon} alt="cart" width={45} height={45} />
			</Bounce>
			<CartCountStyled>
				{cart.reduce((acc, product) => {
                    return acc + product.quantity
                }, 0)}
			</CartCountStyled>
		</CartCountWrapper>
	);
}