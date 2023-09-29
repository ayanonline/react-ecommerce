import axios from "axios";
import { baseUrl } from "../utils/constrant";

const instance = axios.create({
  withCredentials: true,
});

export const createOrder = async (cartId) => {
  const stripe = Stripe(
    "pk_test_51NnPJDSHBDc5FvT5hLcy8PlITuqsyqbL3u9jofItUQhhLEblr6l2q7SOopoZP9FzOZSxoJ92ZF2n4ITb6g7cnr0o00KBJTOaaF",
  );

  try {
    // 1) Get checkout session from API
    const session = await instance(
      `${baseUrl}/order/checkout-session/${cartId}`,
    );

    // 2) Create checkout form and charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
  }
};
