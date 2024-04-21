import * as React from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { tabItems } from "../constants";
import Tabs from "@mui/material/Tabs";
import TabContent from "./TabContent";
import { fetchProductData } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const tabitems = useSelector((state: any) => state.ProductSlice.productData);
  // console.log("qqqq", tabitems);

  React.useEffect(() => {
    dispatch<any>(fetchProductData());
  }, []);
  const [value, setValue] = React.useState("Vegetables");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const CardItems = tabitems.filter(
    (item: any) => value === item.Category.Category
  );
  return (
    <Box sx={{ padding: "2rem", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{
              "& .css-1aquho2-MuiTabs-indicator": {
                width: 0,
              },
            }}
          >
            {tabItems.map((items) => (
              <Tab label={items.label} value={items.label} key={items.label} />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value}>
          <TabContent items={CardItems} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
