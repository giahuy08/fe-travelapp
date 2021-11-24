import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import callApi from "../../api/apiService";
import { useHistory } from "react-router";


const theme = createTheme();


export default function SignUp() {
  const [user, setUser] = useState({
    activeStep: 0,
    labelWidth: 0,
    error: false, //<---- here
    errorMessage: {} //<-----here
  })
  const [value, setValue] = useState()
  const handleValue = (e) => {

    setValue(e.target.value)
    console.log(e.target.value)
  }


  const handleNext = (e) => {
    const data = new FormData(e.currentTarget);
    let isError = false;
    if (data.get('firstName') === '') {
      isError = true;
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, firstName: "Không được bỏ trống" }
      }));
    }else {
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, firstName: "" }
      }));
    }
    if (data.get('lastName') === '')  {
      isError = true;
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, lastName: "Không được bỏ trống" }
      }));
    }else {
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, lastName: "" }
      }));
    }
    if (data.get("email") === '') {
      isError = true;
      setUser(prev => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, email: "Nhập địa chỉ Email của bạn" }
      }));
    }
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.get("email"))) {
      isError = true;
      setUser(prev => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, email: "Email không hợp lệ" }
      }));
    } else {
      setUser(prev => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, email: "" }
      }));
    }
    
    if (data.get('phone') === '') {
      isError = true;
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, phone: "Nhập số điện thoại của bạn" }
      }));
    } else {
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, phone: "" }
      }));
    }
    if (data.get('address') === '') {
      isError = true;
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, address: "Nhập địa chỉ của bạn" }
      }));
    }else {
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, address: "" }
      }));
    }
    if (data.get('password') === '') {
      isError = true;
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, password: "Nhập mật khẩu" }
      }));
    }else {
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, password: "" }
      }));
    }
    if (data.get('confirm-password') === '') {
      isError = true;
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, confirmpassword: "Xác nhận lại mật khẩu" }
      }));
    }else if (data.get('confirm-password') !== data.get('password')) {
      isError = true;
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, confirmpassword: "Xác nhận lại mật khẩu không đúng" }
      }));
    } else {
      setUser(prev =>({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, confirmpassword: ""}
      }));
    }
    if(!isError){
      //add else if for validating other fields (if any)
      setUser(prevState => ({
        activeStep: prevState.activeStep + 1,
        error: false,
        errorMessage: {}
      }));
    }
  }

  const history = useHistory()
  const handleSubmit = (e) => {
    
    const data = new FormData(e.currentTarget);
    handleNext(e);
    e.preventDefault();
    console.log(data.get('firstName'));
    if (data.get('firstName') !== "" && data.get('lastName') !== "" &&
      data.get("email") !== "" && data.get("password") !== "" &&
      data.get('phone') !== "" && data.get('address') !== "" &&
      data.get('password') === data.get('confirm-password')) {
      let user = {
        email: data.get('email'),
        password: data.get('password'),
        phone: "0" + data.get('phone'),
        name: data.get('firstName') + " " + data.get('lastName'),
        address: data.get('address'),
      };
      console.log(user);
      callApi(`user/register`, "POST", user)
        .then((res) => {
         
          history.push({pathname:"/otp-signup",state:{email: data.get("email")}});

        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <img
              src="./images/logo.png"
              alt=""
              style={{ width: 50, height: 50 }}
            />
          </Link>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!user.errorMessage.firstName}
                  helperText={
                    user.errorMessage.firstName &&
                    user.errorMessage.firstName
                  }
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Họ"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!user.errorMessage.lastName}
                  helperText={
                    user.errorMessage.lastName &&
                    user.errorMessage.lastName
                  }
                  required
                  fullWidth
                  id="lastName"
                  label="Tên"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!user.errorMessage.email}
                  helperText={
                    user.errorMessage.email &&
                    user.errorMessage.email
                  }
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Quốc gia
                    </InputLabel>
                    <NativeSelect
                      defaultValue={84}
                      value={value}
                      onChange={handleValue}
                      inputProps={{
                        name: "firstphone",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value="376">AD +376</option>
                      <option value="971">AE +971</option>
                      <option value="93">AF +93</option>
                      <option value="1268">AG +1268</option>
                      <option value="1264">AI +1264</option>
                      <option value="355">AL +355</option>
                      <option value="374">AM +374</option>
                      <option value="244">AO +244</option>
                      <option value="54">AR +54</option>
                      <option value="1684">AS +1684</option>
                      <option value="43">AT +43</option>
                      <option value="61">AU +61</option>
                      <option value="297">AW +297</option>
                      <option value="994">AZ +994</option>
                      <option value="387">BA +387</option>
                      <option value="1246">BB +1246</option>
                      <option value="880">BD +880</option>
                      <option value="32">BE +32</option>
                      <option value="226">BF +226</option>
                      <option value="359">BG +359</option>
                      <option value="973">BH +973</option>
                      <option value="257">BI +257</option>
                      <option value="229">BJ +229</option>
                      <option value="1441">BM +1441</option>
                      <option value="673">BN +673</option>
                      <option value="591">BO +591</option>
                      <option value="55">BR +55</option>
                      <option value="1242">BS +1242</option>
                      <option value="975">BT +975</option>
                      <option value="267">BW +267</option>
                      <option value="375">BY +375</option>
                      <option value="501">BZ +501</option>
                      <option value="1">CA +1</option>
                      <option value="243">CD +243</option>
                      <option value="236">CF +236</option>
                      <option value="242">CG +242</option>
                      <option value="41">CH +41</option>
                      <option value="225">CI +225</option>
                      <option value="682">CK +682</option>
                      <option value="56">CL +56</option>
                      <option value="237">CM +237</option>
                      <option value="86">CN +86</option>
                      <option value="57">CO +57</option>
                      <option value="506">CR +506</option>
                      <option value="53">CU +53</option>
                      <option value="238">CV +238</option>
                      <option value="357">CY +357</option>
                      <option value="420">CZ +420</option>
                      <option value="49">DE +49</option>
                      <option value="253">DJ +253</option>
                      <option value="45">DK +45</option>
                      <option value="1767">DM +1767</option>
                      <option value="1809">DO +1809</option>
                      <option value="213">DZ +213</option>
                      <option value="593">EC +593</option>
                      <option value="372">EE +372</option>
                      <option value="20">EG +20</option>
                      <option value="212">EH +212</option>
                      <option value="291">ER +291</option>
                      <option value="34">ES +34</option>
                      <option value="251">ET +251</option>
                      <option value="358">FI +358</option>
                      <option value="679">FJ +679</option>
                      <option value="691">FM +691</option>
                      <option value="298">FO +298</option>
                      <option value="33">FR +33</option>
                      <option value="241">GA +241</option>
                      <option value="44">GB +44</option>
                      <option value="1473">GD +1473</option>
                      <option value="995">GE +995</option>
                      <option value="44">GG +44</option>
                      <option value="233">GH +233</option>
                      <option value="350">GI +350</option>
                      <option value="299">GL +299</option>
                      <option value="220">GM +220</option>
                      <option value="224">GN +224</option>
                      <option value="590">GP +590</option>
                      <option value="240">GQ +240</option>
                      <option value="30">GR +30</option>
                      <option value="502">GT +502</option>
                      <option value="1671">GU +1671</option>
                      <option value="245">GW +245</option>
                      <option value="592">GY +592</option>
                      <option value="852">HK +852</option>
                      <option value="504">HN +504</option>
                      <option value="385">HR +385</option>
                      <option value="509">HT +509</option>
                      <option value="36">HU +36</option>
                      <option value="62">ID +62</option>
                      <option value="353">IE +353</option>
                      <option value="972">IL +972</option>
                      <option value="44">IM +44</option>
                      <option value="91">IN +91</option>
                      <option value="964">IQ +964</option>
                      <option value="98">IR +98</option>
                      <option value="354">IS +354</option>
                      <option value="39">IT +39</option>
                      <option value="44">JE +44</option>
                      <option value="1876">JM +1876</option>
                      <option value="962">JO +962</option>
                      <option value="81">JP +81</option>
                      <option value="254">KE +254</option>
                      <option value="996">KG +996</option>
                      <option value="855">KH +855</option>
                      <option value="686">KI +686</option>
                      <option value="269">KM +269</option>
                      <option value="1869">KN +1869</option>
                      <option value="850">KP +850</option>
                      <option value="82">KR +82</option>
                      <option value="965">KW +965</option>
                      <option value="1345">KY +1345</option>
                      <option value="7">KZ +7</option>
                      <option value="856">LA +856</option>
                      <option value="961">LB +961</option>
                      <option value="1758">LC +1758</option>
                      <option value="423">LI +423</option>
                      <option value="94">LK +94</option>
                      <option value="231">LR +231</option>
                      <option value="266">LS +266</option>
                      <option value="370">LT +370</option>
                      <option value="352">LU +352</option>
                      <option value="371">LV +371</option>
                      <option value="218">LY +218</option>
                      <option value="212">MA +212</option>
                      <option value="377">MC +377</option>
                      <option value="373">MD +373</option>
                      <option value="382">ME +382</option>
                      <option value="261">MG +261</option>
                      <option value="692">MH +692</option>
                      <option value="389">MK +389</option>
                      <option value="223">ML +223</option>
                      <option value="95">MM +95</option>
                      <option value="976">MN +976</option>
                      <option value="853">MO +853</option>
                      <option value="596">MQ +596</option>
                      <option value="222">MR +222</option>
                      <option value="1664">MS +1664</option>
                      <option value="356">MT +356</option>
                      <option value="230">MU +230</option>
                      <option value="960">MV +960</option>
                      <option value="265">MW +265</option>
                      <option value="52">MX +52</option>
                      <option value="60">MY +60</option>
                      <option value="258">MZ +258</option>
                      <option value="264">NA +264</option>
                      <option value="687">NC +687</option>
                      <option value="227">NE +227</option>
                      <option value="234">NG +234</option>
                      <option value="505">NI +505</option>
                      <option value="31">NL +31</option>
                      <option value="47">NO +47</option>
                      <option value="977">NP +977</option>
                      <option value="674">NR +674</option>
                      <option value="64">NZ +64</option>
                      <option value="968">OM +968</option>
                      <option value="507">PA +507</option>
                      <option value="51">PE +51</option>
                      <option value="689">PF +689</option>
                      <option value="675">PG +675</option>
                      <option value="63">PH +63</option>
                      <option value="92">PK +92</option>
                      <option value="48">PL +48</option>
                      <option value="1787">PR +1787</option>
                      <option value="970">PS +970</option>
                      <option value="351">PT +351</option>
                      <option value="680">PW +680</option>
                      <option value="595">PY +595</option>
                      <option value="974">QA +974</option>
                      <option value="262">RE +262</option>
                      <option value="40">RO +40</option>
                      <option value="381">RS +381</option>
                      <option value="7">RU +7</option>
                      <option value="250">RW +250</option>
                      <option value="966">SA +966</option>
                      <option value="677">SB +677</option>
                      <option value="248">SC +248</option>
                      <option value="249">SD +249</option>
                      <option value="46">SE +46</option>
                      <option value="65">SG +65</option>
                      <option value="386">SI +386</option>
                      <option value="421">SK +421</option>
                      <option value="232">SL +232</option>
                      <option value="378">SM +378</option>
                      <option value="221">SN +221</option>
                      <option value="252">SO +252</option>
                      <option value="597">SR +597</option>
                      <option value="239">ST +239</option>
                      <option value="503">SV +503</option>
                      <option value="963">SY +963</option>
                      <option value="268">SZ +268</option>
                      <option value="1649">TC +1649</option>
                      <option value="235">TD +235</option>
                      <option value="228">TG +228</option>
                      <option value="66">TH +66</option>
                      <option value="992">TJ +992</option>
                      <option value="670">TL +670</option>
                      <option value="993">TM +993</option>
                      <option value="216">TN +216</option>
                      <option value="676">TO +676</option>
                      <option value="90">TR +90</option>
                      <option value="1868">TT +1868</option>
                      <option value="688">TV +688</option>
                      <option value="886">TW +886</option>
                      <option value="255">TZ +255</option>
                      <option value="380">UA +380</option>
                      <option value="256">UG +256</option>
                      <option value="1">US +1</option>
                      <option value="598">UY +598</option>
                      <option value="998">UZ +998</option>
                      <option value="379">VA +379</option>
                      <option value="1784">VC +1784</option>
                      <option value="58">VE +58</option>
                      <option value="1284">VG +1284</option>
                      <option value="1340">VI +1340</option>
                      <option value="84">VN +84</option>
                      <option value="678">VU +678</option>
                      <option value="685">WS +685</option>
                      <option value="967">YE +967</option>
                      <option value="27">ZA +27</option>
                      <option value="260">ZM +260</option>
                      <option value="263">ZW +263</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  error={!!user.errorMessage.phone}
                  helperText={
                    user.errorMessage.phone &&
                    user.errorMessage.phone
                  }
                  type="number"
                  autoComplete="given-phone"
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Số điện thoại"
                  autoFocus
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!user.errorMessage.address}
                  helperText={
                    user.errorMessage.address &&
                    user.errorMessage.address
                  }
                  required
                  fullWidth
                  name="address"
                  label="Địa chỉ"
                  type="text"
                  id="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!user.errorMessage.password}
                  helperText={
                    user.errorMessage.password &&
                    user.errorMessage.password
                  }
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!user.errorMessage.confirmpassword}
                  helperText={
                    user.errorMessage.confirmpassword &&
                    user.errorMessage.confirmpassword
                  }
                  required
                  fullWidth
                  name="confirm-password"
                  label="Nhập lại mật khẩu"
                  type="password"
                  id="confirm-password"
                  autoComplete="confirm-new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Tôi đã đọc và chập nhận với các điều khoản"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#F1786a" }}
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng Ký
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Bạn đã có tài khoản rồi? Đăng nhập ngay
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
