import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  createAddress as createAddressApi,
  updateAddress as updateAddressApi,
} from "../../services/apiAddress";
import toast from "react-hot-toast";

const Input = ({ name, state, handler }) => {
  return (
    <div className="my-2 w-[19rem] border-2 px-2 py-1">
      <label className="text-sm text-gray-500">{name}</label>
      <br />
      <input
        type="text"
        value={state}
        onChange={(e) => handler(e.target.value)}
        className="w-full outline-none"
      />
    </div>
  );
};

const AddressForm = ({ formName, hideForm, data }) => {
  const [name, setName] = useState(data ? data.name : "");
  const [phone, setPhone] = useState(data ? data.phoneNumber : "");
  const [pincode, setPincode] = useState(data ? data.pincode : "");
  const [locality, setLocality] = useState(data ? data.locality : "");
  const [address, setAddress] = useState(data ? data.address : "");
  const [city, setCity] = useState(data ? data.city : "");
  const [state, setState] = useState(data ? data.state : "");

  const formData = new FormData();
  const queryClient = useQueryClient();

  const submitHandler = (e) => {
    e.preventDefault();
    formData.append("name", name);
    formData.append("phoneNumber", phone);
    formData.append("pincode", pincode);
    formData.append("locality", locality);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);

    if (formName === "create") createAddress();
    if (formName === "update") updateAddress();
  };

  const { isLoading: isCreating, mutate: createAddress } = useMutation({
    mutationFn: () => createAddressApi(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Address created");
      hideForm();
    },
    onError: (error) => toast.error(error.message),
  });

  const { isLoading: isUpdating, mutate: updateAddress } = useMutation({
    mutationFn: () => updateAddressApi(data._id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Address updated");
      hideForm();
    },
    onError: (error) => toast.error(error.message),
  });

  return (
    <div className="relative my-2">
      <h1 className="text-xl">
        {formName === "update" ? "Update address" : "Create address"}
      </h1>
      <form
        className="flex w-[40rem] flex-wrap justify-between gap-2"
        onSubmit={submitHandler}
      >
        <Input name="Name" state={name} handler={setName} />
        <Input name="Phone" state={phone} handler={setPhone} />
        <Input name="Pincode" state={pincode} handler={setPincode} />
        <Input name="Locality" state={locality} handler={setLocality} />

        <div className="w-full border-2 px-2 py-1">
          <label className="text-sm text-gray-500">Address</label>
          <br />
          <textarea
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="flex-shrink-1 w-full resize-none overflow-hidden outline-none "
          />
        </div>

        <Input name="City/Dist" state={city} handler={setCity} />

        <div className="my-2 h-fit w-[19rem] border-2 px-2 py-1">
          <label className="text-sm text-gray-500">State</label>
          <br />
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full cursor-pointer bg-white outline-none"
          >
            <option value="">{state ? state : "select state"}</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="flex gap-5">
          <button
            disabled={isCreating || isUpdating}
            type="submit"
            className="bg-green-500 px-3 py-2 text-white"
          >
            Save address
          </button>
        </div>
      </form>
      <button
        className="absolute bottom-0 left-[8rem] px-4 py-2"
        onClick={() => hideForm()}
      >
        Cancel
      </button>
    </div>
  );
};

export default AddressForm;
