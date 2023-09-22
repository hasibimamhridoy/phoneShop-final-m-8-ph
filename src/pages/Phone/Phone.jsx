import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();

  const phones = useLoaderData();

  useEffect(() => {

    
    const findPhone = phones?.find((phone) => phone.id === id);

    setPhone(findPhone);
  }, [id, phones]);


  return (
    <div>
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
