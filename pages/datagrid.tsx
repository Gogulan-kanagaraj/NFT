import { Box, Grid } from "@mui/material";
import CardDetails from "./card";

function DataGrid(){

    return(
        <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              <Grid item xs={12} md={4} lg={3}>
                <CardDetails />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <CardDetails />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <CardDetails />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <CardDetails />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <CardDetails />
              </Grid>
            </Grid>
          </Box>
    );

}
export default DataGrid