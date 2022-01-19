import React from "react";

export const Demo: React.FC = () => {
  const [user, setUser] = React.useState({
    name: "John",
    lastName: "Doe",
    age: 30,
    address: "",
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({
        ...user,
        [field]: e.target.value,
      });
    };

  return (
    <>
      <h4>{user.name}</h4>
      <input value={user.name} onChange={handleChange("name")} />
      <input value={user.lastName} onChange={handleChange("lastName")} />
      <input value={user.address} onChange={handleChange("address")} />
      <input type="number" value={user.age} onChange={handleChange("age")} />
    </>
  );
};
