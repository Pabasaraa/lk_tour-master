"use client"; 
import { useState, useEffect } from "react"; 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import styles from "./pTour.module.css"; 
import BackToTop from "../components/BackToTop"; 
import Loader from "../components/Loader"; 
import StepOne from "./steps/StepOne"; 
import StepTwo from "./steps/StepTwo"; 
import StepThree from "./steps/StepThree"; 
import StepFour from "./steps/StepFour";  

export default function PTour() {   
  const [loading, setLoading] = useState(true);   
  const [step, setStep] = useState(1);   
  const [formData, setFormData] = useState({     
    title: "",     
    fullName: "",     
    nationality: "",     
    email: "",     
    phone: "",     
    arrivalDate: "",     
    departureDate: "",     
    nights: "",     
    accommodation: "",     
    adults: "",     
    children: "",     
    selectedPlaces: [] as string[],     
    customLocation: "",     
    tourGuide: "",     
    inquiries: ""   
  });    

  useEffect(() => {     
    const timer = setTimeout(() => setLoading(false), 2000);     
    return () => clearTimeout(timer);   
  }, []);    

  const nextStep = () => setStep((prev) => prev + 1);   
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : 1));   
  const updateFormData = (data: any) =>     
    setFormData((prev) => ({ ...prev, ...data }));    

  return (     
    <>       
      <Navbar />        
      {/* Hero Section */}       
      <section className={styles.ptourIntro}>         
        <div className={styles.pTourTitle}>           
          <h1>Build Your Tour</h1>           
          <p>             
            Create Your Own Sri Lankan Adventure! Design a tour that’s uniquely             
            yours and we’ll craft the perfect itinerary just for you. Your journey,             
            your way!           
          </p>         
        </div>       
      </section>        
      {loading ? (         
        <Loader height="60vh" />       
      ) : (         
        <section className={styles.pTourSection}>           
          <div className={styles.ptourContainer}>             
            <div className={styles.leftSection}>               
              {step === 1 && (                 
                <StepOne                   
                  onNext={(data) => {                     
                    updateFormData(data);                     
                    nextStep();                   
                  }}                   
                  updateFormData={updateFormData}                   
                  formData={formData}                 
                />               
              )}               
              {step === 2 && (                 
                <StepTwo                   
                  onNext={(data) => {                     
                    updateFormData(data);                     
                    nextStep();                   
                  }}                   
                  onPrevious={prevStep}                   
                  updateFormData={updateFormData}                   
                  formData={formData}                 
                />               
              )}               
              {step === 3 && (                 
                <StepThree                   
                  onNext={(data) => {                     
                    updateFormData(data);                     
                    nextStep();                   
                  }}                   
                  onPrevious={prevStep}                   
                  formData={formData}                 
                />               
              )}               
              {step === 4 && (                 
                <StepFour                   
                  onPrevious={prevStep}                   
                  formData={formData}                 
                />               
              )}             
            </div>             
            <div className={styles.rightSection}>               
              <div className={styles.contactInfo}>                 
                <h2>Need help?</h2>                 
                <p>Feel free to call or text us on WhatsApp</p>                 
                <div className={styles.phoneNumbers}>                   
                  <span>📞 +94 77 083 8768</span>                   
                  <span>WhatsApp: +94 77 083 8768</span>                 
                </div>               
              </div>               
              <div className={styles.sightsSection}>                 
                <h2>Top sights in Sri Lanka</h2>                 
                {/* Carousel Placeholder */}                 
                <div className={styles.carousel}>                   
                  <div className={styles.carouselText}>Explore Sri Lanka</div>                 
                </div>                 
                <div className={styles.navigationDots}>                   
                  <div className={`${styles.dot} ${styles.active}`}></div>                   
                  <div className={styles.dot}></div>                   
                  <div className={styles.dot}></div>                 
                </div>               
              </div>             
            </div>           
          </div>         
        </section>       
      )}        
      <Footer />       
      <BackToTop />     
    </>   
  ); 
}
