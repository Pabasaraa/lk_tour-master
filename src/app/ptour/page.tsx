'use client';
import { useState, useEffect } from 'react';

export default function PTour() {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    nationality: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    nights: '',
    accommodation: '',
    adults: '',
    children: '',
    selectedPlaces: [] as string[],
    customLocation: '',
    tourGuide: '',
    inquiries: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : 1));
  const updateFormData = (data: any) =>
    setFormData((prev) => ({ ...prev, ...data }));

  return <></>;
}
