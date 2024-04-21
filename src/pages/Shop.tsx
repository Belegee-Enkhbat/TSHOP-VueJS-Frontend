import { Grid, Box } from "@mui/material";
import Cards from "../utils/Cards";
import { fetchProductData } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Input } from "antd";
const { Search } = Input;
type Props = {};

const Shop = (props: Props) => {
  const dispatch = useDispatch();
  const tabitems = useSelector((state: any) => state.ProductSlice.productData);
  useEffect(() => {
    dispatch<any>(fetchProductData());
  }, []);

  const [filter, setFilter] = useState("");
  const searchItem = useMemo(() => {
    return tabitems.filter((item: any) => {
      return item.ProductName.toLowerCase().includes(filter.toLowerCase());
    });
  }, [tabitems, filter]);

  const handeleSearch = (e: any) => {
    setFilter(e.target.value);
  };
  // const handleSearch = () => {
  //   if (search === "") {
  //     setDatas(data);
  //   } else {
  //     const filteredData = data.filter((course) => {
  //       return course.coursename.toLowerCase().includes(search.toLowerCase());
  //     });
  //     return setDatas(filteredData);
  //   }
  // };
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "3rem",
          width: "25rem",
          backgroundColor: "#bccef84a",
          margin: "2rem 0rem 2rem 0rem",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Search...."
          value={filter}
          onChange={handeleSearch}
          style={{
            border: "1px",
            borderRadius: "8px",
            height: "2rem",
            margin: "0 .5rem 0 .5rem",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {searchItem.map((item: any) => (
          <Cards item={item} />
        ))}
      </Box>
    </Grid>
  );
};

export default Shop;
