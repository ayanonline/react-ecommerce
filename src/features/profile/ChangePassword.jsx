const ChangePassword = () => {
  return (
    <section className="relative flex flex-col">
      <h1 className="mb-4 font-bold text-green-400 lg:text-2xl">
        PASSWORD CHANGE
      </h1>
      <label htmlFor="currentpass" className="mb-1 text-sm lg:text-lg">
        Current password
      </label>
      <input
        id="currentpass"
        type="password"
        placeholder="*********"
        className="mb-4 rounded-md bg-gray-100 p-3 text-xs outline-none lg:text-base"
      />
      <label htmlFor="newpass" className="mb-1 text-sm lg:text-lg">
        New password
      </label>
      <input
        id="newpass"
        type="password"
        placeholder="*********"
        className="mb-4 rounded-md bg-gray-100 p-3 text-sm outline-none lg:text-base"
      />
      <label htmlFor="confirmpass" className="mb-1 text-sm lg:text-lg">
        Confirm password
      </label>
      <input
        id="confirmpass"
        type="password"
        placeholder="*********"
        className="mb-20 rounded-md bg-gray-100 p-3 text-sm outline-none lg:text-base"
      />
      <button className="absolute bottom-0 right-0 mb-4 w-fit bg-green-500 p-2 text-sm text-white lg:text-base">
        CHANGE PASSWORD
      </button>
    </section>
  );
};

export default ChangePassword;
