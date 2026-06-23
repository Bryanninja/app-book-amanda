import { create } from 'zustand';

type Country = 'BR' | 'PT' | 'MZ' | 'AO' | null;

interface CheckoutState {
  isOpen: boolean;
  selectedCountry: Country;
  openModal: () => void;
  closeModal: () => void;
  setCountry: (country: Country) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  isOpen: false,
  selectedCountry: null,
  openModal: () => set({ isOpen: true, selectedCountry: null }),
  closeModal: () => set({ isOpen: false }),
  setCountry: (country) => set({ selectedCountry: country }),
}));
