import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection } from "../../../services/utils/controllers";

const Retirement = () => {
  const auth = useSelector((state) => state.auth.value.user);
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth !== null) {
      setLoading(true);
      collection("claims")
        .then((res) => {
          const data = res.data.data;

          setClaims(
            data.filter(
              (claim) =>
                claim.owner.id === auth.id && claim.type === "touring-advance"
            )
          );
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    }
  }, [auth]);

  return <div>Retirement</div>;
};

export default Retirement;
