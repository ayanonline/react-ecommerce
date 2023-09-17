import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import AddressForm from "./AddressForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateAddress,
  deleteAddress as deleteApi,
} from "../services/apiAddress";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";

const AddressCard = ({ address }) => {
  const [showForm, setShowForm] = useState(false);

  const queryClient = useQueryClient();

  const changeHandler = () => {
    if (address?.selected === false) update();
  };

  const { isLoading: isUpdating, mutate: update } = useMutation({
    mutationFn: () => updateAddress(address._id, { selected: true }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["address"] }),
    onError: (error) => toast.error(error.message),
  });
  const { isLoading: isDeleting, mutate: deleteAddress } = useMutation({
    mutationFn: () => deleteApi(address._id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Address deleted");
    },
    onError: (error) => toast.error(error.message),
  });

  return (
    <div>
      {showForm ? (
        <AddressForm hideForm={setShowForm} data={address} />
      ) : (
        <div className="relative mb-2 flex w-[40rem] items-center rounded-md border-2 p-4">
          {isUpdating && <Loader />}
          <input
            type="radio"
            checked={address?.selected}
            onChange={changeHandler}
            disabled={isUpdating}
            className="mr-4 h-6 w-6 cursor-pointer"
          />
          <div>
            <h1 className="mb-2 text-xl">
              {address?.name} {address?.phoneNumber}
            </h1>
            <p className="text-lg text-gray-500">
              {address?.name} {address?.locality} {address?.city} -
              {address?.pincode}
            </p>
          </div>
          <button
            className="absolute right-4 top-4"
            onClick={() => setShowForm(true)}
          >
            <FiEdit className="text-xl" />
          </button>
          <button
            disabled={isDeleting}
            className="absolute bottom-4 right-4"
            onClick={() => deleteAddress()}
          >
            <HiOutlineTrash className="h-6 w-6 cursor-pointer text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
