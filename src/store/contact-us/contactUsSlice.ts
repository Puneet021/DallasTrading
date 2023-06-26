import { createSlice } from "@reduxjs/toolkit";
import { IContactUsData } from "../../utils/models/contact-us.model";
import { IStore } from "../../utils/models/store.model";

const initialState: { contactUsData: IContactUsData[]; loader: boolean } = {
  contactUsData: [
    {
      name: "Dubai",
      address:
        "10th Floor, Shoba Ivory 2, Business Bay - Dubai - United Arab Emirates",
      mobileNo: "+971 4 363 5500",
      email: "info@dallastrading.net",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.705946243937!2d55.26928987627525!3d25.17940497772232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6834914eab65%3A0x46526b1478fdeae0!2sSobha%20Ivory%201%20-%2032a%20Marasi%20Dr%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1685506013799!5m2!1sen!2sin",
    },
    {
      name: "Qatar (Doha Office)",
      address: "Street 32, Gate 98, Industrial Area, Doha, State of Qatar",
      mobileNo: "+974 4 469 1947",
      email: "dallastrading@qatar.net.qa",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3678028789977!2d51.44411157601849!3d25.190816031957947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d1246575f249%3A0x10f24869b5f2f639!2s98%20Street%2032%2C%20Ar-Rayyan%2C%20Qatar!5e0!3m2!1sen!2sin!4v1687796292898!5m2!1sen!2sin",
    },
    {
      name: "Qatar (Doha Showroom)",
      address: "Building no 3, shop no 16 Barwa Village Doha, State of Qatar",
      mobileNo: "+974 4 442 6811",
      email: "dallastrading@qatar.net.qa",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.86168891986!2d51.57103461390279!3d25.20438855818201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cebdfbd5c125%3A0x388db881b4786d9c!2sBarwa%20Village%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sin!4v1687796449704!5m2!1sen!2sin",
    },
    {
      name: "Oman (Muscat Office)",
      address: "PC 111, Ghala Industrial Area, Muscat, Sultanate of Oman",
      mobileNo: "+968 2 459 3041",
      email: "vijay@dallastrading.net",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14627.436410419681!2d58.34767921107112!3d23.57350333324495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffd75ae2f525%3A0xba7e54290d8f6b76!2sGhala%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1687796554275!5m2!1sen!2sin",
    },
  ],
  loader: false,
};

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState: initialState,
  reducers: {},
});

export const getContactUsData = (state: IStore) =>
  state.contactUs.contactUsData;

export default contactUsSlice.reducer;
