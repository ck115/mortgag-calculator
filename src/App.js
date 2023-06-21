import React, {useState} from "react";
import {Grid} from "@mui/material";
import {Container} from "@mui/system";
import NavBar from "./Components/Navbar";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import Results from "./Components/Results";

//returns basic div containing hello everyone yes
function App () {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000*2,
    loanPayment: 3000*0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <NavBar />
      {/* maxWidth is how large the container can scale, sx is how styles are added to a component, in this case margin to the top T_T */}
      <Container maxWidth="xl" sx={{marginTop:4}}>
        {/* Grid is use to create a responsive layout. Gride container is the parent Grid, spacing={5} gives space between the items in the grid */}
        <Grid container spacing={5} alignItems="center">
          {/* Uses same type of naming convention for bootstrap resizing */}
          <Grid item xs={12} md={6}>

            <SliderSelect data={data} setData={setData} />

            <TenureSelect data={data} setData={setData} />

          </Grid>
          <Grid item xs={12} md={6}>

            <Results data={data} setData={setData} />

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;