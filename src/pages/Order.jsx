import { useState } from "react";
import AddressCard from "../components/AddressCard";
import AddressForm from "../components/AddressForm";
import CartSummary from "../components/CartSummary";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAddress } from "../services/apiAddress";

const Order = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [isAddressSelected, setIsAddressSelected] = useState(false);

  const {
    isLoading,
    data: address,
    error,
  } = useQuery({
    queryFn: getAddress,
    queryKey: ["address"],
    onSuccess: (data) => {
      const selectedAddress = data.filter((item) => item.selected);
      setIsAddressSelected(selectedAddress.length > 0);
    },
  });
  if (isLoading) return null;

  return (
    <div className="relative flex min-h-screen items-start justify-between px-[20rem] py-10">
      <section>
        <h1 className="mb-2 text-2xl">Select delivery address</h1>
        <div className="flex w-[50rem] flex-col gap-2">
          {address.map((item) => (
            <AddressCard key={item._id} address={item} />
          ))}
        </div>
        {!showAddressForm && (
          <button
            className="w-[24rem] rounded-md border-2 border-dashed py-4 text-xl"
            onClick={() => setShowAddressForm(true)}
          >
            Add new address
          </button>
        )}

        {showAddressForm && (
          <AddressForm formName="create" hideForm={setShowAddressForm} />
        )}
      </section>
      <CartSummary />
    </div>
  );
};

export default Order;
