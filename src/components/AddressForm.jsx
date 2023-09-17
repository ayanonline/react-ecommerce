import { useState } from "react";

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
const AddressForm = ({ hideForm, data }) => {
  const [name, setName] = useState(data?.name);
  const [phone, setPhone] = useState(data?.phoneNumber);
  const [pincode, setPincode] = useState(data?.pincode);
  const [locality, setLocality] = useState(data?.locality);
  const [address, setAddress] = useState(data?.address);
  const [city, setCity] = useState(data?.city);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    hideForm();
  };

  return (
    <div className="relative">
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
          <select name="" id="" className=" w-full bg-white outline-none">
            <option value="">Select state</option>
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CH">Chandigarh</option>
            <option value="CT">Chhattisgarh</option>
            <option value="DN">Dadra and Nagar Haveli</option>
            <option value="DD">Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="LA">Ladakh</option>
            <option value="LD">Lakshadweep</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PY">Puducherry</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UT">Uttarakhand</option>
            <option value="WB">West Bengal</option>
          </select>
        </div>
        <div className="flex gap-5">
          <button type="submit" className="bg-green-500 px-3 py-2 text-white">
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
