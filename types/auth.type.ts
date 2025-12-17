/* eslint-disable @typescript-eslint/no-explicit-any */



export interface TypeUser {
  _id: string;
  id: string;
  code: any;
  avatar?: string;
  name: string;
  numberOfMembers: number;
  numberOfConnections: number;
  connectionType: string[];
  gender: string;
  dateOfBirth: string;
  primaryMobile: string;
  email: string;
  address: string;
  paymentMethod: string;
  otherServices: string[];
  role: string;
  createdAt: string;
  updatedAt: string;
  roleId: string;
  companyName: string;
  bkashAccount: string;
  bkashStatus: string;
  loginStatus: string;
  documentStatus: string;
  activeStatus: string;
  bindingStatus: any;
  nidOrBirthCertificate: string;
  updatedBy: any;
  userType: string;
  roleDetails: RoleDetails;
  category: string;
  division: string;
  district: string;
  upazila: string;
  tradeLicenseFront: string;
  nidFront: string;
  visitingCardFront: string;
  tinCertificate: string;
  officeIdCardFront: string;
  parentCode: any;
  remarksForBkash: string;
  remarksForDocument: string;
}

export interface RoleDetails {
  _id: string;
  displayName: string;
  role: string;
  rewardType: string;
  minRequiredPoint: number;
  hasParent: boolean;
  isShowMyEmployee: boolean;
  isShowSubmission: boolean;
  isShowMyOffer: boolean;
  isCompany: boolean;
  type: string;
  permissions: any[];
}

export type DocumentStatus = 'document-approved' | 'document-rejected' | 'document-submitted';

export type BkashStatus = 'approved' | 'rejected' | 'pending';

export interface CompanyUser {
  _id: string;
  companyName: string;
  representativeName: string;
  name: string;
  code: string;
  roleId: string;
  primaryMobile: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  password: string;
  numberOfMembers: any;
  numberOfConnections: any;
  connectionType: any[];
  paymentMethod: string;
  bkashAccount: any;
  otherServices: any[];
  role: string;
  parentCode: any;
  bkashStatus: any;
  bkashApplyDate: any;
  bkashVerifyDate: any;
  remarksForBkash: any;
  loginStatus: string;
  loginApplyDate: string;
  loginVerifyDate: any;
  remarksForLoginVerify: any;
  documentStatus: DocumentStatus;
  dataApplyDate: any;
  dataVerifyDate: any;
  remarksForDocument: any;
  activeStatus: string;
  bindingStatus: any;
  nidOrBirthCertificate: string;
  tinCertificate: any;
  remarksForActiveStatus: any;
  remarksForAdmin: any;
  remarksForBindingStatus: any;
  isSynced: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export type UpdateUserInfoPayload = Pick<
  TypeUser,
  'name' | 'email' | 'gender' | 'dateOfBirth' | 'address'
>;
