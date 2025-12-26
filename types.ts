
export enum DomainStatus {
  AVAILABLE = 'AVAILABLE',
  TAKEN = 'TAKEN',
  PREMIUM = 'PREMIUM'
}

export interface DomainResult {
  domain: string;
  price: number;
  status: DomainStatus;
  isPopular?: boolean;
}

export interface OwnedDomain {
  id: string;
  domain: string;
  expiryDate: string;
  status: 'Active' | 'Expired' | 'Pending';
  autoRenew: boolean;
}

export interface AppState {
  cart: DomainResult[];
  ownedDomains: OwnedDomain[];
}
