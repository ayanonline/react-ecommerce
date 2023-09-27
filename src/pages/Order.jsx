import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../services/apiAddress";

import OrderSummary from "../features/order/OrderSummary";
import AddressForm from "../features/address/AddressForm";
import AddressCard from "../features/address/AddressCard";

const Order = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [isAddressSelected, setIsAddressSelected] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState([]);

  const {
    isLoading,
    data: address,
    error,
  } = useQuery({
    queryFn: getAddress,
    queryKey: ["address"],
    onSuccess: (data) => {
      const currentAddress = data.filter((item) => item.selected);
      setIsAddressSelected(currentAddress.length > 0);
      setSelectedAddress(currentAddress);
    },
  });

  // const checkoutHandler

  if (isLoading) return null;

  return (
    <div className="relative flex min-h-screen flex-col items-start gap-4 px-5 py-5 lg:flex-row lg:justify-between lg:px-[20rem] lg:py-10">
      <section className="w-full">
        <h1 className="mb-2 lg:text-2xl">Select delivery address</h1>
        <div className="flex flex-col gap-2 lg:w-[50rem]">
          {address.map((item) => (
            <AddressCard key={item._id} address={item} />
          ))}
        </div>
        {!showAddressForm && (
          <button
            className="rounded-md border-2 border-dashed p-2 text-xs lg:w-[24rem] lg:py-4 lg:text-xl"
            onClick={() => setShowAddressForm(true)}
          >
            Add new address
          </button>
        )}

        {showAddressForm && (
          <AddressForm formName="create" hideForm={setShowAddressForm} />
        )}
      </section>
      <OrderSummary
        isAddressSelected={isAddressSelected}
        selectedAddress={selectedAddress}
      />
    </div>
  );
};

export default Order;
